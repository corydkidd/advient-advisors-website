'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 bg-navy-medium text-center">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Ready to Implement AI That Delivers Results?
          </h2>

          <p className="text-xl text-text-secondary leading-relaxed mb-10">
            Let&apos;s discuss your specific challenges and how AI can drive measurable
            outcomes for your organization.
          </p>

          <motion.a
            href="https://calendar.app.google/BrtTXrLKioutTtf77"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-6 bg-cyan-primary text-navy-deep font-semibold text-xl rounded-lg transition-all duration-300 hover:shadow-cyan-glow-lg hover:-translate-y-0.5 shadow-cyan-glow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a Consultation
          </motion.a>

          <div className="mt-8 space-y-2">
            <p className="text-sm text-text-muted">
              Typical first call: 30 minutes, no obligation.
            </p>
            <p className="text-sm text-text-muted">
              We&apos;ll discuss your goals and whether there&apos;s a fit.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
