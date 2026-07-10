'use client';

import { motion } from 'framer-motion';
import Ticks from './Ticks';

export default function PositioningBand() {
  return (
    <section id="positioning" className="bg-cream text-ink py-20 lg:py-24">
      <div className="container">
        <div className="max-w-[880px]">
          <motion.div
            className="flex items-center gap-3.5 mb-7"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Ticks />
            <span className="font-util text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-kicker)]">
              The difference
            </span>
          </motion.div>

          <motion.p
            className="font-body font-normal text-ink leading-[1.42] text-[clamp(1.35rem,2.5vw,1.92rem)]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Most AI advisors hand you a strategy and step back. Advient is led by an
            operator who has{' '}
            <span className="italic font-medium text-[color:var(--gold-hl)]">
              founded and run three AI companies
            </span>
            , so the person who assesses where you&apos;re ready is the same one who
            architects and ships the system. Senior judgment from boardroom to production,
            in the industries where the stakes are highest and compliance is hardest, from
            pharma and maritime to healthcare and beyond.
          </motion.p>

          <motion.div
            className="flex items-baseline gap-3.5 mt-8 font-display text-lg lg:text-xl text-navy before:content-[''] before:w-9 before:h-px before:bg-gold before:self-center before:shrink-0"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            The deliverable isn&apos;t a deck. It&apos;s a working capability your
            competitors don&apos;t have.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
