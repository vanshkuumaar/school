import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    let x = 0;
    let y = 0;

    switch (direction) {
        case 'up': y = 40; break;
        case 'down': y = -40; break;
        case 'left': x = 40; break;
        case 'right': x = -40; break;
    }

    // Set initial state
    gsap.set(ref.current, { autoAlpha: 0, x, y });

    gsap.to(ref.current, {
      autoAlpha: 1,
      x: 0,
      y: 0,
      duration: 1.0, 
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%', // Trigger when top of element hits 85% of viewport height
        toggleActions: 'play none none reverse',
      },
    });
  }, [delay, direction]);

  return <div ref={ref} className={`will-change-[transform,opacity] ${className}`}>{children}</div>;
};

export default Reveal;