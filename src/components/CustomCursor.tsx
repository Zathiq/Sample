import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position state with lerp interpolation
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Detect touch-only screen
    const checkTouch = () => {
      if (window.matchMedia('(pointer: coarse)').matches) {
        setIsTouchDevice(true);
      }
    };
    checkTouch();

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Instantly position the center precision dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering an interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, input, select, textarea, [role="button"], label, summary');
        setIsHovered(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Smooth animation loop for the outer precision ring
    const render = () => {
      // Easing / lerp interpolation
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  // Don't render on touch-only devices
  if (isTouchDevice) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* 1. Trailing Technical Precision Target Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -ml-4 -mt-4 pointer-events-none will-change-transform transition-[width,height,background-color,border-color,opacity] duration-150 ease-out"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      >
        <div
          className={`relative rounded-full border transition-all duration-200 ease-out flex items-center justify-center ${
            isHovered
              ? 'w-10 h-10 border-[#00A8B5] bg-[#00A8B5]/15 scale-125 shadow-xs shadow-[#00A8B5]/30'
              : isClicking
              ? 'w-6 h-6 border-[#38BDF8] bg-[#00A8B5]/30 scale-90'
              : 'w-8 h-8 border-[#00A8B5]/60 bg-transparent'
          }`}
        >
          {/* Subtle Compass / Engineering Crosshair Ticks */}
          <div
            className={`absolute top-0 w-1 h-1 -mt-0.5 rounded-full transition-colors ${
              isHovered ? 'bg-[#00A8B5]' : 'bg-[#00A8B5]/50'
            }`}
          />
          <div
            className={`absolute bottom-0 w-1 h-1 -mb-0.5 rounded-full transition-colors ${
              isHovered ? 'bg-[#38BDF8]' : 'bg-[#00A8B5]/50'
            }`}
          />
          <div
            className={`absolute left-0 w-1 h-1 -ml-0.5 rounded-full transition-colors ${
              isHovered ? 'bg-[#00A8B5]' : 'bg-[#00A8B5]/50'
            }`}
          />
          <div
            className={`absolute right-0 w-1 h-1 -mr-0.5 rounded-full transition-colors ${
              isHovered ? 'bg-[#00A8B5]' : 'bg-[#00A8B5]/50'
            }`}
          />
        </div>
      </div>

      {/* 2. Instant Center Precision Node Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 pointer-events-none will-change-transform"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      >
        <div
          className={`rounded-full transition-transform duration-100 ${
            isClicking
              ? 'w-2 h-2 bg-[#38BDF8] scale-150 shadow-xs shadow-[#38BDF8]'
              : isHovered
              ? 'w-2 h-2 bg-[#00A8B5] scale-125 shadow-xs shadow-[#00A8B5]'
              : 'w-2 h-2 bg-[#00A8B5] shadow-xs shadow-[#00A8B5]/40'
          }`}
        />
      </div>
    </div>
  );
};
