import { useId, useMemo, useState, type PointerEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { GrowthPoint, Lang } from '../data/content';
import { easeOut } from '../lib/motion';
import './GrowthChart.css';

interface GrowthChartProps {
  points: GrowthPoint[];
  lang: Lang;
}

const WIDTH = 720;
const HEIGHT = 300;
const MARGIN = { top: 16, right: 16, bottom: 32, left: 52 };
const PLOT_W = WIDTH - MARGIN.left - MARGIN.right;
const PLOT_H = HEIGHT - MARGIN.top - MARGIN.bottom;

function niceMax(max: number) {
  const magnitude = Math.pow(10, Math.floor(Math.log10(max)));
  const normalized = max / magnitude;
  const niceNormalized = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
  return niceNormalized * magnitude;
}

function formatMonth(month: string, lang: Lang) {
  const [year, m] = month.split('-').map(Number);
  const date = new Date(year, m - 1, 1);
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-US', { month: 'short' }).format(date);
}

export default function GrowthChart({ points, lang }: GrowthChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const gradientId = useId();

  const yMax = useMemo(() => niceMax(Math.max(...points.map((p) => p.value))), [points]);
  const yTicks = useMemo(() => {
    const step = yMax / 4;
    return [0, step, step * 2, step * 3, yMax];
  }, [yMax]);

  const coords = useMemo(
    () =>
      points.map((p, i) => ({
        x: MARGIN.left + (i / (points.length - 1)) * PLOT_W,
        y: MARGIN.top + PLOT_H - (p.value / yMax) * PLOT_H,
        ...p,
      })),
    [points, yMax],
  );

  const linePath = coords.map((c, i) => `${i === 0 ? 'M' : 'L'} ${c.x} ${c.y}`).join(' ');
  const areaPath = `${linePath} L ${coords[coords.length - 1].x} ${MARGIN.top + PLOT_H} L ${coords[0].x} ${MARGIN.top + PLOT_H} Z`;

  const tickEvery = Math.max(1, Math.round((points.length - 1) / 4));
  const xTickIndices = coords.map((_, i) => i).filter((i) => i % tickEvery === 0 || i === coords.length - 1);

  const active = activeIndex !== null ? coords[activeIndex] : null;
  const last = coords[coords.length - 1];

  const handlePointerMove = (event: PointerEvent<SVGSVGElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = ((event.clientX - rect.left) / rect.width) * WIDTH;
    let nearest = 0;
    let nearestDist = Infinity;
    coords.forEach((c, i) => {
      const dist = Math.abs(c.x - relX);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = i;
      }
    });
    setActiveIndex(nearest);
  };

  return (
    <div className="growth-chart">
      <svg
        className="growth-chart__svg"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label={`${points[0].month} – ${last.month}: ${last.value.toLocaleString(lang === 'es' ? 'es-ES' : 'en-US')}`}
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setActiveIndex(null)}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--fill)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--fill)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {yTicks.map((tick) => {
          const y = MARGIN.top + PLOT_H - (tick / yMax) * PLOT_H;
          return (
            <g key={tick}>
              <line
                x1={MARGIN.left}
                x2={WIDTH - MARGIN.right}
                y1={y}
                y2={y}
                className="growth-chart__gridline"
              />
              <text x={MARGIN.left - 10} y={y} className="growth-chart__tick growth-chart__tick--y">
                {Math.round(tick).toLocaleString(lang === 'es' ? 'es-ES' : 'en-US')}
              </text>
            </g>
          );
        })}

        {xTickIndices.map((i) => (
          <text
            key={i}
            x={coords[i].x}
            y={HEIGHT - 8}
            className="growth-chart__tick growth-chart__tick--x"
          >
            {formatMonth(coords[i].month, lang)}
          </text>
        ))}

        <motion.path
          d={areaPath}
          fill={`url(#${gradientId})`}
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: easeOut }}
        />
        <motion.path
          d={linePath}
          fill="none"
          stroke="var(--fill)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: easeOut }}
        />

        <circle cx={last.x} cy={last.y} r="5" fill="var(--fill)" stroke="var(--bg)" strokeWidth="2" />
        <text x={last.x} y={last.y - 14} className="growth-chart__end-label" textAnchor="end">
          +{last.value.toLocaleString(lang === 'es' ? 'es-ES' : 'en-US')}
        </text>

        {active && (
          <>
            <line
              x1={active.x}
              x2={active.x}
              y1={MARGIN.top}
              y2={MARGIN.top + PLOT_H}
              className="growth-chart__crosshair"
            />
            <circle cx={active.x} cy={active.y} r="5" fill="var(--fill)" stroke="var(--bg)" strokeWidth="2" />
          </>
        )}

        {coords.map((c, i) => (
          <rect
            key={c.month}
            x={MARGIN.left + (i / points.length) * PLOT_W - (i === 0 ? 0 : (0.5 * PLOT_W) / points.length)}
            y={MARGIN.top}
            width={PLOT_W / points.length}
            height={PLOT_H}
            fill="transparent"
            tabIndex={0}
            role="img"
            aria-label={`${formatMonth(c.month, lang)}: ${c.value.toLocaleString(lang === 'es' ? 'es-ES' : 'en-US')}`}
            onPointerEnter={() => setActiveIndex(i)}
            onFocus={() => setActiveIndex(i)}
            onBlur={() => setActiveIndex(null)}
            className="growth-chart__hit"
          />
        ))}
      </svg>

      {active && (
        <div
          className="growth-chart__tooltip"
          style={{ left: `${(active.x / WIDTH) * 100}%`, top: `${(active.y / HEIGHT) * 100}%` }}
        >
          <span className="growth-chart__tooltip-value">
            {active.value.toLocaleString(lang === 'es' ? 'es-ES' : 'en-US')}
          </span>
          <span className="growth-chart__tooltip-label">{formatMonth(active.month, lang)}</span>
        </div>
      )}
    </div>
  );
}
