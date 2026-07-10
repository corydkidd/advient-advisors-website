'use client';

import { motion } from 'framer-motion';
import Ticks from './Ticks';

const services = [
  {
    title: 'AI Strategy',
    description:
      "Not decks that gather dust. A clear roadmap you can act on — then the system built to match. We've run companies and know what works in the real world.",
  },
  {
    title: 'Proof of Concept',
    description:
      'Validate AI use cases before committing to full deployment. Real prototypes, real data, real results. Reduce risk and prove it works before you scale.',
  },
  {
    title: 'Enterprise Integration',
    description:
      'Make AI work in your existing tech stack and workflows. Integration, deployment, training. We understand both the technology and the organizational change required.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-24 bg-cream text-ink">
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
              Our approach
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-navy leading-[1.08] mb-5">
            What We Do Differently
          </h2>
          <p className="font-body text-lg text-ink/80 leading-relaxed">
            Most AI consultants are either strategists who can&apos;t implement, or developers
            who don&apos;t understand business. We bridge both worlds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-cream p-8 rounded-sm border border-navy/[0.15] transition-all duration-300 hover:-translate-y-1 hover:border-gold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-10 h-px bg-gold mb-6" aria-hidden="true" />
              <h3 className="font-display text-xl lg:text-2xl text-navy mb-4">
                {service.title}
              </h3>
              <p className="font-body text-base text-ink/80 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
