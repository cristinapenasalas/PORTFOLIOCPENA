import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Placeholder from './pages/Placeholder';
import { useLanguage } from './context/LanguageContext';

function WorkPage() {
  const { lang } = useLanguage();
  return <Placeholder lang={lang} title={{ es: 'Proyectos', en: 'Work' }} />;
}

function CaseStudyPage() {
  const { lang } = useLanguage();
  return <Placeholder lang={lang} title={{ es: 'Estudio de caso', en: 'Case study' }} />;
}

function ServicesPage() {
  const { lang } = useLanguage();
  return <Placeholder lang={lang} title={{ es: 'Servicios', en: 'Services' }} />;
}

function ContactPage() {
  const { lang } = useLanguage();
  return <Placeholder lang={lang} title={{ es: 'Contacto', en: 'Contact' }} />;
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/proyectos" element={<WorkPage />} />
        <Route path="/proyectos/:slug" element={<CaseStudyPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
