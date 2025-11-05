import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Link } from 'lucide-react';

const Assistant = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-full border border-indigo-500/40 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(79,70,229,0.35)] backdrop-blur hover:scale-[1.02]"
      >
        {open ? 'Close' : 'Ask Mukul'}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-3 w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0c10] p-4 text-sm text-slate-200 shadow-2xl"
          >
            <div className="text-slate-300">Hi! I’m Mukul’s AI companion. Ask about design approach:</div>
            <ul className="mt-3 space-y-2 text-slate-300/90">
              <li>• Research-first strategy powered by behavioral insights</li>
              <li>• Rapid prototyping with motion as feedback</li>
              <li>• AI-assisted workflows for exploration and efficiency</li>
              <li>• Accessibility and measurable outcomes by default</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-[#0b0c10] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(167,139,250,0.08),_transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          className="bg-gradient-to-r from-indigo-300 via-sky-300 to-purple-300 bg-clip-text text-3xl font-bold text-transparent md:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Connect
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(99,102,241,0.08)]"
          >
            <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.12),rgba(168,85,247,0.12),transparent_40%)] blur" />
            <div className="relative z-10 space-y-4">
              <div>
                <label className="text-xs text-slate-300">Name</label>
                <input className="mt-1 w-full rounded-lg border border-white/10 bg-[#0e0f14] px-3 py-2 text-slate-200 outline-none ring-0 focus:border-indigo-400/60" />
              </div>
              <div>
                <label className="text-xs text-slate-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-[#0e0f14] px-3 py-2 text-slate-200 outline-none ring-0 focus:border-indigo-400/60" />
              </div>
              <div>
                <label className="text-xs text-slate-300">Message</label>
                <textarea rows={4} className="mt-1 w-full resize-none rounded-lg border border-white/10 bg-[#0e0f14] px-3 py-2 text-slate-200 outline-none focus:border-indigo-400/60" />
              </div>
              <button className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-indigo-500/40 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 px-6 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(79,70,229,0.35)] backdrop-blur transition hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(129,140,248,0.55)]">
                Send Message
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-slate-300">Prefer quick links?</div>
            <div className="mt-4 grid grid-cols-1 gap-3">
              <a href="mailto:hello@example.com" className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0e0f14] p-4 text-slate-200 transition hover:border-indigo-400/50">
                <Mail className="h-5 w-5 text-indigo-300" /> Email
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0e0f14] p-4 text-slate-200 transition hover:border-indigo-400/50">
                <Linkedin className="h-5 w-5 text-indigo-300" /> LinkedIn
              </a>
              <a href="https://www.behance.net/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0e0f14] p-4 text-slate-200 transition hover:border-indigo-400/50">
                <Link className="h-5 w-5 text-indigo-300" /> Behance
              </a>
              <a href="https://dribbble.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0e0f14] p-4 text-slate-200 transition hover:border-indigo-400/50">
                <Link className="h-5 w-5 text-indigo-300" /> Dribbble
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Assistant />
    </section>
  );
};

export default Contact;
