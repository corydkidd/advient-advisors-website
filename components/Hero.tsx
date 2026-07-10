'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Ticks from './Ticks';

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const credentials = [
  'MIT Media Lab PhD',
  '25+ Years in AI',
  'Founder & CEO',
  '3 AI Companies',
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/10 bg-hero-gradient"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center py-16 lg:py-24">
          {/* Left Column - Content */}
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex items-center gap-3.5 font-util text-xs font-semibold uppercase tracking-[0.22em] text-gold"
              variants={heroVariants}
            >
              <Ticks />
              Advient Advisors
            </motion.div>

            <motion.h1
              className="font-display font-normal text-cream mt-7 leading-[1.02] tracking-[-0.005em] text-[clamp(2.7rem,5.4vw,4.55rem)]"
              variants={heroVariants}
            >
              We turn AI ambition into <span className="text-gold">advantage.</span>
            </motion.h1>

            <motion.p
              className="font-body text-cream/80 max-w-[34ch] mt-6 leading-[1.5] text-[clamp(1.05rem,1.5vw,1.24rem)]"
              variants={heroVariants}
            >
              For companies that think big and have no patience for slideware. Twenty-five
              years turning bold ideas into systems that run.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3.5 mt-9"
              variants={heroVariants}
            >
              <a
                href="https://calendar.app.google/BrtTXrLKioutTtf77"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-4 bg-gold text-navy-deep font-util font-semibold text-sm tracking-[0.01em] rounded-sm transition-all duration-300 hover:bg-gold-soft hover:-translate-y-0.5"
              >
                Schedule a Consultation
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center px-7 py-4 bg-transparent text-cream font-util font-semibold text-sm tracking-[0.01em] border border-white/20 rounded-sm transition-all duration-300 hover:border-cream"
              >
                View Recent Work
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center mt-11 font-util text-[12.5px] font-medium uppercase tracking-[0.04em] text-cream-dim/70"
              variants={heroVariants}
            >
              {credentials.map((cred, i) => (
                <span key={cred} className="flex items-center">
                  {cred}
                  {i < credentials.length - 1 && (
                    <span
                      className="mx-4 inline-block w-1 h-1 rounded-full bg-gold/90"
                      aria-hidden="true"
                    />
                  )}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Portrait */}
          <motion.div
            className="hero-image order-first lg:order-last"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              {/* Frame with gold corner brackets */}
              <div className="relative p-2.5 border border-white/[0.12] rounded-[3px] bg-gradient-to-br from-white/[0.04] to-transparent">
                <Image
                  src="/images/cory-kidd-headshot.jpg"
                  alt="Dr. Cory Kidd"
                  width={500}
                  height={625}
                  className="w-full h-auto rounded-sm object-cover"
                  priority
                />

                {/* Gold corner brackets */}
                <div className="absolute -top-px -left-px w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-gold" />
                <div className="absolute -bottom-px -right-px w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-gold" />

                {/* Navy name plate */}
                <div className="absolute left-5 bottom-5 bg-navy-deep/85 backdrop-blur-[3px] border-l-2 border-gold px-[18px] py-3">
                  <div className="font-display text-lg text-cream leading-none">
                    Dr. Cory Kidd
                  </div>
                  <div className="font-util text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gold mt-1.5">
                    Founder &amp; CEO
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
