'use client';

import { motion } from 'framer-motion';
import Ticks from './Ticks';

const industries = [
  {
    title: 'Pharmaceutical & Biotech',
    description:
      'AI strategy for regulated environments. Clinical trials, commercial operations, patient engagement.',
  },
  {
    title: 'Maritime & Industrial',
    description:
      'Operational AI for shipping, energy, and manufacturing. Safety, efficiency, automation.',
  },
  {
    title: 'Healthcare Technology',
    description:
      'Product innovation and go-to-market strategy for health tech companies.',
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-20 lg:py-24 bg-navy-deep border-t border-white/10"
    >
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
            <span className="font-util text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Where we focus
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-cream leading-[1.08]">
            Industry Focus
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              className="border-t-2 border-gold pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-display text-2xl text-cream mb-3 leading-[1.15]">
                {industry.title}
              </h3>
              <p className="font-body text-base text-cream/75 leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
