import React from 'react';
import { motion } from 'framer-motion';
import { Figma, PenTool, Brain, Sparkles, Video } from 'lucide-react';

const skills = [
  { name: 'Figma', Icon: Figma, color: 'from-pink-500 to-purple-500' },
  { name: 'Illustration', Icon: PenTool, color: 'from-indigo-500 to-blue-500' },
  { name: 'Motion', Icon: Video, color: 'from-cyan-500 to-sky-500' },
  { name: 'AI Workflows', Icon: Brain, color: 'from-violet-500 to-fuchsia-500' },
  { name: 'Micro-interactions', Icon: Sparkles, color: 'from-emerald-500 to-teal-500' },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0b0c10] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,_rgba(129,140,248,0.08),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.08),_transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          className="bg-gradient-to-r from-indigo-300 via-sky-300 to-purple-300 bg-clip-text text-3xl font-bold text-transparent md:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          About Mukul
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <motion.div
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0e0f14] to-[#0b0c10] p-6 shadow-[0_0_40px_rgba(99,102,241,0.12)]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-300">
              I’m a UX designer and creative strategist with a mission to design meaningful
              digital experiences that spark emotion and drive value. At Gra-Freak Studio, I lead
              design thinking across product, service, and brand touchpoints — blending research,
              behavioral psychology, and future-facing tech like AI.
            </p>
            <p className="mt-4 text-slate-300">
              My approach combines clarity and craft: mapping journeys, prototyping rapidly,
              and iterating with motion to create interfaces that feel alive.
            </p>

            {/* Timeline */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-200">Journey</h3>
              <div className="mt-4 space-y-4">
                <div className="relative rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-indigo-300">Royal IT Services — UX Intern</div>
                  <div className="text-slate-400 text-sm">Shipped research-backed prototypes and usability improvements.</div>
                </div>
                <div className="relative rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-indigo-300">The Hustle House — Collaborator</div>
                  <div className="text-slate-400 text-sm">Co-created story-driven brand experiences with measurable impact.</div>
                </div>
                <div className="relative rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-indigo-300">Gra-Freak Studio — Co-founder</div>
                  <div className="text-slate-400 text-sm">Leading design strategy across multidisciplinary projects.</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
              {skills.map(({ name, Icon, color }) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.04 }}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${color} p-[1px]`}
                >
                  <div className="rounded-2xl bg-[#0b0c10] p-5 text-center">
                    <Icon className="mx-auto h-7 w-7 text-white/90 drop-shadow" />
                    <div className="mt-2 text-sm font-medium text-slate-200">{name}</div>
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-slate-200">What drives me</h3>
              <p className="mt-2 text-slate-300">
                Systems thinking, accessibility, motion as feedback, and the power of narrative. I’m passionate about
                designing with intention — making products feel both intuitive and extraordinary.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
