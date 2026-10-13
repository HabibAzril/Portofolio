import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CustomCursor — A ring and dot cursor that morphs around hovered items.
 * Inspired by React Bits Custom Cursor effect.
 *
 * Features:
 * - Smooth spring physics with high-performance Framer Motion transforms
 * - Central dot tracks instantaneously without latency
 * - Outer ring follows with fluid inertia and morphs/expands over interactive elements
 * - Click feedback (contraction impulse)
 * - Auto-detects touch devices and gracefully falls back to native cursor
 * - Clean fade in/out when mouse leaves/enters the viewport
 */
export default function CustomCursor({
  dotSize = 6,
  ringSize = 47,
  hoverRingSize = 64,
  dotColor = '#ffffff',
  ringColor = 'rgba(255, 255, 255, 0.45)',
  ringHoverColor = 'rgba(255, 255, 255, 0.95)',
  ringHoverBg = 'rgba(255, 255, 255, 0.08)',
  targetSelector = 'a, button, [role="button"], input, textarea, select, [data-cursor], .btn-primary, .btn-secondary, .card, .project-card, .tab-btn',
}) {
  const [isTouch] = useState(() => {
    if (typeof window === 'undefined') return false;
    return (
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0
    );
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');

  // Coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring for the outer follower ring
  const springConfig = { damping: 26, stiffness: 380, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isTouch) return;

    document.body.classList.add('custom-cursor-enabled');

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target;
      if (target && target instanceof Element) {
        const interactiveEl = target.closest(targetSelector);
        if (interactiveEl) {
          setIsHovered(true);
          const customText = interactiveEl.getAttribute('data-cursor-text');
          setCursorText(customText || '');
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouch, mouseX, mouseY, isVisible, targetSelector]);

  if (isTouch) return null;

  return (
    <>
      {/* Central Sharp Dot */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 4 : dotSize,
          height: isHovered ? 4 : dotSize,
          borderRadius: '50%',
          backgroundColor: dotColor,
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 999999,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s ease',
        }}
      />

      {/* Outer Morphing Follower Ring */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? hoverRingSize : ringSize,
          height: isHovered ? hoverRingSize : ringSize,
          borderRadius: '50%',
          border: isHovered ? `2px solid ${ringHoverColor}` : `1.5px solid ${ringColor}`,
          backgroundColor: isHovered ? ringHoverBg : 'transparent',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 999998,
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.78 : 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition:
            'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), border 0.2s ease, background-color 0.2s ease, opacity 0.15s ease, scale 0.15s ease',
        }}
      >
        {cursorText && (
          <span
            style={{
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#ffffff',
              mixBlendMode: 'difference',
              userSelect: 'none',
            }}
          >
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}
