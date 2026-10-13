import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  { word: 'Hello', lang: 'English' },
  { word: 'Bonjour', lang: 'French' },
  { word: 'こんにちは', lang: 'Japanese' },
  { word: 'Hola', lang: 'Spanish' },
  { word: '안녕하세요', lang: 'Korean' },
  { word: 'Ciao', lang: 'Italian' },
  { word: 'Hallo', lang: 'German' },
  { word: 'Halo', lang: 'Indonesian' },
];

const GREETING_DURATION = 350; // ms per greeting
const EXIT_DELAY = 200; // ms after last greeting before exit

export default function LoadingScreen({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock body scroll
    document.body.classList.add('loading-active');

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= greetings.length - 1) {
          clearInterval(timer);
          // Begin exit sequence
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              setIsVisible(false);
              document.body.classList.remove('loading-active');
              if (onComplete) onComplete();
            }, 800);
          }, EXIT_DELAY);
          return prev;
        }
        return prev + 1;
      });
    }, GREETING_DURATION);

    return () => {
      clearInterval(timer);
      document.body.classList.remove('loading-active');
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={isExiting ? { y: '-100%' } : { y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {/* Subtle bottom line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'var(--border-subtle)',
        }}
      />

      {/* Counter indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '40px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.05em',
        }}
      >
        {String(currentIndex + 1).padStart(2, '0')} / {String(greetings.length).padStart(2, '0')}
      </div>

      {/* Greeting text */}
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="loading-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {greetings[currentIndex].word}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}
