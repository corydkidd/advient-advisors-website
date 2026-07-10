'use client';

import { motion } from 'framer-motion';
import { Target, FlaskConical, Workflow } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'AI Strategy',
    description:
      "Not decks that gather dust. A clear roadmap you can act on — then the system built to match. We've run companies and know what works in the real world.",
  },
  {
    icon: FlaskConical,
    title: 'Proof of Concept',
    description:
      'Validate AI use cases before committing to full deployment. Real prototypes, real data, real results. Reduce risk and prove it works before you scale.',
  },
  {
    icon: Workflow,
    title: 'Enterprise Integration',
    description:
      'Make AI work in your existing tech stack and workflows. Integration, deployment, training. We understand both the technology and the organizational change required.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-navy-deep">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            What We Do Differently
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Most AI consultants are either strategists who can&apos;t implement, or developers
            who don&apos;t understand business. We bridge both worlds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-charcoal p-8 rounded-xl border border-border-subtle transition-all duration-300 hover:-translate-y-1 hover:border-cyan-primary hover:shadow-cyan-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-cyan-primary bg-opacity-10 rounded-xl mb-6 transition-all duration-300 group-hover:bg-opacity-20 group-hover:shadow-cyan-glow">
                <service.icon className="w-8 h-8 text-cyan-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-base text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
