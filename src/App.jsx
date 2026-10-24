import React, { useState, useCallback } from 'react';
import TargetCursor from './components/TargetCursor';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeName from './components/MarqueeName';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setLoadingComplete(true);
  }, []);

  return (
    <>
      {/* Target Reticle Cursor from React Bits */}
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
        hoverDuration={0.2}
        size={36}
        cornerSize={12}
        thickness={3}
        padding={6}
        matchRadius={true}
        dotSize={4}
        blendMode="difference"
        showLabel={true}
        clickEffect={true}
        targetSelector=".cursor-target, a, button, .btn-primary, .btn-secondary, [role='button']"
      />

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
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
