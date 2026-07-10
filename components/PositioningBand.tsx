'use client';

import { motion } from 'framer-motion';

export default function PositioningBand() {
  return (
    <section
      id="positioning"
      className="py-24 bg-charcoal border-t border-b border-border-subtle"
    >
      <div className="container">
        <motion.p
          className="max-w-3xl mx-auto text-center text-lg lg:text-xl text-text-secondary leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Most AI advisors hand you a strategy and step back. Advient is led by an operator
          who has founded and run three AI companies, so the person who assesses where
          you&apos;re ready is the same one who architects and ships the system. Senior judgment
          from boardroom to production, in the industries where the stakes are highest and
          compliance is hardest, from pharma and maritime to healthcare and beyond. The
          deliverable isn&apos;t a deck. It&apos;s a working capability your competitors don&apos;t have.
        </motion.p>
      </div>
    </section>
  );
}
