import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, BookOpen, PenTool, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';

const ScrollMorphIcon: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    // Continuous 3D Rotation
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        rotationY: 360,
        rotationX: 15, // Slight tilt for 3D effect
        duration: 15,
        repeat: -1,
        ease: "none"
      });
    }

    // Scroll Listener for Morphing
    const updateStage = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = window.scrollY / scrollHeight;
      
      // Calculate stage (0 to 3)
      // Cap -> Book -> Pen -> Growth
      let stage = 0;
      if (scrollPercent < 0.25) stage = 0;
      else if (scrollPercent < 0.50) stage = 1;
      else if (scrollPercent < 0.75) stage = 2;
      else stage = 3;

      setCurrentStage(stage);
    };

    window.addEventListener('scroll', updateStage, { passive: true });
    return () => window.removeEventListener('scroll', updateStage);
  }, []);

  const icons = [
    { Icon: GraduationCap, color: 'text-primary-900', label: 'Knowledge' },
    { Icon: BookOpen, color: 'text-primary-700', label: 'Learning' },
    { Icon: PenTool, color: 'text-accent-600', label: 'Creativity' },
    { Icon: TrendingUp, color: 'text-green-600', label: 'Growth' }
  ];

  const { Icon, color } = icons[currentStage];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
      <div 
        ref={containerRef} 
        className="opacity-[0.03] transform-style-3d will-change-transform"
      >
        <div className={`transition-all duration-700 transform ${color}`}>
           <Icon size={500} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

export default ScrollMorphIcon;