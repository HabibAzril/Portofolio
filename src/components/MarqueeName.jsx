import React from 'react';

const NAME = 'AZRIL AHMAD';
const REPETITIONS = 6;

function MarqueeRow({ direction = 'left', filled = false }) {
  const items = Array.from({ length: REPETITIONS }, (_, i) => i);

  return (
    <div style={{ overflow: 'hidden' }}>
      <div className={`marquee-track ${direction}`}>
        {/* Duplicate content for seamless loop */}
        {[0, 1].map((setIndex) =>
          items.map((i) => (
            <span key={`${setIndex}-${i}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span className={`marquee-text ${filled ? 'filled' : ''}`}>
                {NAME}
              </span>
              <span className="marquee-separator">•</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}

export default function MarqueeName() {
  return (
    <section className="marquee-section" aria-label="Animated name display">
      <MarqueeRow direction="left" filled={true} />
      <MarqueeRow direction="right" filled={false} />
    </section>
  );
}
