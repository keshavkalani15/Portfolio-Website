import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import TargetCursor from './components/reactbits/TargetCursor';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';

import './App.css';

function App() {
  const [appKey, setAppKey] = useState(0);

  const handleResetAnimations = () => {
    // Instantly zip to top so scroll-based animations (like CGPA) don't
    // trigger out of sight while a smooth scroll is happening!
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setAppKey(prev => prev + 1);
  };

  return (
    <>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <Navbar />
      <main key={appKey}>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact onMessageSentComplete={handleResetAnimations} /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
