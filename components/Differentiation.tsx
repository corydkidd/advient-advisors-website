'use client';

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import Ticks from './Ticks';

const traditional = [
  'Strategy firms hand over a deck and leave',
  'Junior analysts research best practices',
  '"Digital transformation" frameworks',
  'You implement (or it dies)',
];

const advient = [
  "I've been a CEO, built products at scale, and understand both the boardroom and the codebase",
  'Direct engagement with your team - no intermediaries',
  'Working AI systems, built and measured against your own targets',
  'Partnership through deployment',
];

export default function Differentiation() {
  return (
    <section id="differentiation" className="py-20 lg:py-24 bg-cream text-ink">
      <div className="container">
        <motion.div
          className="max-w-3xl mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3.5 mb-5">
            <Ticks />
            <span className="font-util text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-kicker)]">
              Why it works
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-navy leading-[1.08]">
            Why This Works Differently
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-20">
          {/* Traditional Column — flat & muted, no gold */}
          <motion.div
            className="p-8 border border-navy/10 rounded-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-util text-xs font-semibold uppercase tracking-[0.16em] text-ink/40 mb-6">
              Traditional Consulting
            </h3>
            <ul className="space-y-4">
              {traditional.map((item, index) => (
                <li
                  key={index}
                  className="relative pl-7 font-body text-base text-ink/45 leading-relaxed"
                >
                  <X className="absolute left-0 top-1 w-4 h-4 text-ink/30" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Advient Column — lit, gold left-border + tick */}
          <motion.div
            className="p-8 border-l-2 border-gold bg-cream-dim/40 rounded-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3.5 mb-6">
              <Ticks />
              <h3 className="font-util text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                Advient Approach
              </h3>
            </div>
            <ul className="space-y-4">
              {advient.map((item, index) => (
                <li
                  key={index}
                  className="relative pl-7 font-body text-base text-ink leading-relaxed"
                >
                  <Check className="absolute left-0 top-1 w-4 h-4 text-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Pull-quote — cream breather */}
        <motion.figure
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-12 h-px bg-gold mx-auto mb-8" aria-hidden="true" />
          <blockquote className="font-body italic text-navy text-2xl lg:text-[2rem] leading-[1.4]">
            &ldquo;I don&apos;t hand clients a strategy and walk away. I&apos;ve spent 25 years
            building and shipping AI in the industries where it&apos;s hardest to get right, and
            I stay in it until the system is running.&rdquo;
          </blockquote>
          <figcaption className="font-util text-sm font-medium uppercase tracking-[0.14em] text-[color:var(--gold-hl)] mt-8">
            — Cory Kidd, Ph.D.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
