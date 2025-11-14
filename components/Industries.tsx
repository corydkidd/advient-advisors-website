'use client';

import { motion } from 'framer-motion';
import { Pill, Ship, HeartPulse } from 'lucide-react';

const industries = [
  {
    icon: Pill,
    title: 'Pharmaceutical & Biotech',
    description:
      'AI strategy for regulated environments. Clinical trials, commercial operations, patient engagement.',
  },
  {
    icon: Ship,
    title: 'Maritime & Industrial',
    description:
      'Operational AI for shipping, energy, and manufacturing. Safety, efficiency, automation.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare Technology',
    description:
      'Product innovation and go-to-market strategy for health tech companies.',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-navy-deep">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Industry Focus
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              className="text-center p-8 bg-charcoal rounded-xl border border-border-subtle transition-all duration-300 hover:-translate-y-1 hover:border-cyan-primary hover:shadow-cyan-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-cyan-primary bg-opacity-10 rounded-full transition-all duration-300 hover:bg-opacity-20 hover:shadow-cyan-glow">
                <industry.icon className="w-10 h-10 text-cyan-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-4">
                {industry.title}
              </h3>
              <p className="text-base text-text-secondary leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
