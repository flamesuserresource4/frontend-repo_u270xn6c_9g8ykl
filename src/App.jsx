import React, { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  // Custom cursor glow
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.transform = `translate3d(${targetX - 4}px, ${targetY - 4}px, 0)`;
    };

    const tick = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      cursor.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`;
      requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    tick();
    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0b0c10] text-white">
      {/* Top nav */}
      <div className="fixed top-0 z-40 w-full border-b border-white/10 bg-[#0b0c10]/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wide text-indigo-200">Mukul • Gra-Freak Studio</a>
          <div className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="text-slate-300 hover:text-white">About</a>
            <a href="#work" className="text-slate-300 hover:text-white">Work</a>
            <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
          </div>
        </div>
      </div>

      <Hero />
      <About />
      <Work />
      <Contact />

      {/* Custom cursor elements */}
      <div ref={cursorRef} className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500/40 to-fuchsia-500/40 blur-md md:block" />
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[61] hidden h-2 w-2 rounded-full bg-white md:block" />
    </div>
  );
}

export default App;
