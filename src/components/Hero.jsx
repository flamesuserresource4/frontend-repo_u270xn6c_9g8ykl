import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative h-[100vh] w-full overflow-hidden bg-[#0b0c10]">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlay (non-blocking for pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(88,28,135,0.18),_transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          className="bg-gradient-to-r from-indigo-300 via-sky-300 to-purple-300 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          Hey, I’m Mukul —
          <br className="hidden md:block" />
          UX Designer, Creative Strategist,
          <br className="hidden md:block" />
          and Co-founder at Gra-Freak Studio.
        </motion.h1>

        <motion.p
          className="mt-5 max-w-2xl text-balance text-base text-slate-300 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          I blend psychology, AI, and expressive storytelling to craft meaningful, future-forward digital experiences.
        </motion.p>

        <motion.div
          className="mt-10 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.35 }}
        >
          <a
            href="#work"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-indigo-500/40 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(79,70,229,0.35)] backdrop-blur transition hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(129,140,248,0.55)]"
          >
            <span className="relative z-10">View My Work</span>
            <span className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,_rgba(167,139,250,0.45),_transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 h-12 w-6 -translate-x-1/2 rounded-full border border-slate-600/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.span
            className="absolute left-1/2 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-slate-300"
            animate={{ y: [0, 28, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
