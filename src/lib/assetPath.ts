/** Prefixes a root-relative asset path (e.g. "/case-studies/x.jpg") with the
 * app's base path, so images resolve correctly when deployed under a
 * subpath (e.g. GitHub Pages project sites). */
export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
