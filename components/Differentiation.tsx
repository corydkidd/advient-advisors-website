'use client';

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

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
    <section id="differentiation" className="py-24 bg-charcoal">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Why This Works Differently
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center mb-16">
          {/* Traditional Column */}
          <motion.div
            className="p-8 rounded-xl border-2 border-border-subtle"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-xl font-bold text-text-primary mb-6 text-center">
              Traditional Consulting
            </h3>
            <ul className="space-y-4">
              {traditional.map((item, index) => (
                <li
                  key={index}
                  className="relative pl-6 text-base text-text-secondary leading-relaxed"
                >
                  <X className="absolute left-0 top-0 w-4 h-4 text-text-muted" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* VS Divider */}
          <div className="hidden lg:flex items-center justify-center px-4">
            <span className="font-heading text-2xl font-bold text-text-muted">VS</span>
          </div>

          {/* Advient Column */}
          <motion.div
            className="p-8 rounded-xl border-2 border-cyan-primary bg-cyan-primary bg-opacity-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-xl font-bold text-text-primary mb-6 text-center">
              Advient Approach
            </h3>
            <ul className="space-y-4">
              {advient.map((item, index) => (
                <li
                  key={index}
                  className="relative pl-6 text-base text-text-secondary leading-relaxed"
                >
                  <Check className="absolute left-0 top-0 w-4 h-4 text-cyan-primary font-bold" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Pullquote */}
        <motion.div
          className="max-w-4xl mx-auto p-8 bg-navy-deep border-l-4 border-cyan-primary rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <blockquote className="text-xl lg:text-2xl text-text-primary italic leading-relaxed">
            <span className="text-4xl text-cyan-primary leading-none mr-2">&ldquo;</span>
            I don&apos;t hand clients a strategy and walk away. I&apos;ve spent 25 years building
            and shipping AI in the industries where it&apos;s hardest to get right, and I stay
            in it until the system is running.&rdquo;
            <footer className="mt-4 text-base not-italic text-text-secondary">
              — Cory Kidd, Ph.D.
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
