import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 'treasure-hearts',
    title: 'Treasure Hearts',
    tag: 'Market Gap Project',
    summary:
      'Exploring unmet needs and crafting a human-centered product strategy with prototype flows and motion cues.',
  },
  {
    id: 'buildconnect',
    title: 'BuildConnect',
    tag: 'Service Design Project',
    summary:
      'Orchestrated seamless experiences across stakeholders with a service blueprint and interaction patterns.',
  },
  {
    id: 'apple-crypto-wallet',
    title: 'Apple Crypto Wallet UX Redesign',
    tag: 'Concept UI/UX',
    summary:
      'Reimagined wallet flows with progressive disclosure, safety-first patterns, and premium motion design.',
  },
  {
    id: 'indore-311-audit',
    title: 'Indore 311 UX Audit',
    tag: 'Audit + Redesign',
    summary:
      'Identified friction points and proposed an accessibility-forward redesign with measurable success metrics.',
  },
];

const Card = ({ item, onOpen }) => (
  <motion.button
    onClick={() => onOpen(item)}
    whileHover={{ y: -4 }}
    className="group relative flex h-64 w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-0 text-left"
  >
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-fuchsia-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    <div className="relative z-10 flex flex-1 flex-col p-5">
      <div className="text-xs uppercase tracking-wider text-indigo-300/90">{item.tag}</div>
      <div className="mt-2 text-xl font-semibold text-slate-100">{item.title}</div>
      <div className="mt-auto text-sm text-slate-300/90">Click to view process →</div>
    </div>

    {/* Visual placeholder */}
    <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_30%_30%,rgba(167,139,250,0.35),transparent_60%)]" />
  </motion.button>
);

const Modal = ({ open, onClose, project }) => (
  <AnimatePresence>
    {open && project && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0c10] shadow-2xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 16 }}
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.12),_transparent_50%)]" />
          <div className="relative z-10 p-6 md:p-8">
            <div className="text-sm uppercase tracking-wider text-indigo-300/90">{project.tag}</div>
            <h3 className="mt-1 text-2xl font-bold text-slate-100">{project.title}</h3>
            <p className="mt-3 text-slate-300">{project.summary}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300/90">
              <li>Discovery → Research → Insights</li>
              <li>Flows and wireframes with interaction principles</li>
              <li>High-fidelity UI with micro-interactions</li>
              <li>Outcomes and next steps</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs text-indigo-200">UX Strategy</span>
              <span className="rounded-full bg-fuchsia-500/20 px-3 py-1 text-xs text-fuchsia-200">Motion</span>
              <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs text-sky-200">Prototype</span>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Work = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (item) => {
    setSelected(item);
    setOpen(true);
  };

  return (
    <section id="work" className="relative w-full bg-[#0b0c10] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,_rgba(56,189,248,0.07),_transparent_35%),radial-gradient(circle_at_20%_80%,_rgba(168,85,247,0.07),_transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          className="bg-gradient-to-r from-indigo-300 via-sky-300 to-purple-300 bg-clip-text text-3xl font-bold text-transparent md:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Selected Work
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.id} item={p} onOpen={handleOpen} />)
          )}
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} project={selected} />
    </section>
  );
};

export default Work;
