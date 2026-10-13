import React, { useState, useCallback } from 'react';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeName from './components/MarqueeName';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setLoadingComplete(true);
  }, []);

  return (
    <>
      {/* Morphing Ring & Dot Custom Cursor */}
      <CustomCursor />

      {/* Loading Screen Overlay */}
      <LoadingScreen onComplete={handleLoadingComplete} />

      {/* Scroll Progress Bar */}
      {loadingComplete && <ScrollProgress />}

      {/* Main Portfolio */}
      <div className="portfolio-app">
        {loadingComplete && <Navbar />}
        <main>
          <Hero isReady={loadingComplete} />
          <MarqueeName />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
