'use client';

import { motion } from 'framer-motion';
import Ticks from './Ticks';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 lg:py-28 bg-cta-gradient text-center">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-7">
            <Ticks />
          </div>

          <h2 className="font-display text-4xl lg:text-5xl text-cream leading-[1.08] mb-8 max-w-[18ch] mx-auto">
            Ready to turn AI ambition into advantage?
          </h2>

          <motion.a
            href="https://calendar.app.google/BrtTXrLKioutTtf77"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-9 py-4 bg-gold text-navy-deep font-util font-semibold text-[15px] tracking-[0.01em] rounded-sm transition-all duration-300 hover:bg-gold-soft hover:-translate-y-0.5"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a Consultation
          </motion.a>

          <p className="font-body text-cream/70 mt-6 text-[1.02rem]">
            Let&apos;s talk about what to build first — your specific challenges and the
            systems that would move the needle for your organization.
          </p>

          <div className="mt-6 space-y-2">
            <p className="font-util text-sm text-cream/50">
              Typical first call: 30 minutes, no obligation.
            </p>
            <p className="font-util text-sm text-cream/50">
              We&apos;ll discuss your goals and whether there&apos;s a fit.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
