import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import { ApartmentProvider } from './components/ApartmentContext';

function PageShell() {
  const location = useLocation();
  return <AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .28 }}><Routes location={location}><Route path="/" element={<Home />} /><Route path="/gallery" element={<Gallery />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<Home />} /></Routes></motion.div></AnimatePresence>;
}

export default function App() { return <ApartmentProvider><div className="app"><a className="skip-link" href="#main">Skip to content</a><Navbar /><div id="main"><PageShell /></div><Footer /></div></ApartmentProvider>; }
