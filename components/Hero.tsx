'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-navy-deep overflow-hidden py-16">
      <ParticleBackground />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={heroVariants}>
              <p className="font-heading text-sm font-semibold tracking-widest text-cyan-primary uppercase mb-3">
                Advient Advisors
              </p>
              <h1 className="font-heading text-5xl lg:text-6xl font-bold leading-tight text-text-primary mb-4">
                Dr. Cory Kidd
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-primary to-transparent mb-4"></div>
            </motion.div>

            <motion.p
              className="text-2xl lg:text-3xl font-semibold text-text-primary mb-6"
              variants={heroVariants}
            >
              Enterprise AI Strategy & Implementation
            </motion.p>

            <motion.p
              className="text-lg text-text-secondary max-w-2xl mb-8 leading-relaxed"
              variants={heroVariants}
            >
              I help pharmaceutical, maritime, and industrial companies implement AI strategies
              that generate measurable ROI—not decks, not roadmaps, working systems.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              variants={heroVariants}
            >
              <a
                href="https://calendar.app.google/BrtTXrLKioutTtf77"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-primary text-navy-deep font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-cyan-glow-lg hover:-translate-y-0.5 shadow-cyan-glow"
              >
                Schedule Consultation
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-text-primary font-semibold text-lg border-2 border-border-medium rounded-lg transition-all duration-300 hover:border-cyan-primary hover:text-cyan-primary hover:shadow-cyan-glow"
              >
                View Recent Work
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 items-center text-sm text-text-secondary"
              variants={heroVariants}
            >
              <span>MIT Media Lab PhD</span>
              <span className="text-text-muted">•</span>
              <span>25+ Years in AI</span>
              <span className="text-text-muted">•</span>
              <span>Former CEO</span>
              <span className="text-text-muted">•</span>
              <span>Enterprise Consultant</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="hero-image order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative z-10">
                <Image
                  src="/images/cory-kidd-headshot.jpg"
                  alt="Dr. Cory Kidd"
                  width={500}
                  height={625}
                  className="rounded-xl w-full h-auto"
                  priority
                />
              </div>

              {/* Cyan glow border */}
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 border-2 border-cyan-primary rounded-2xl shadow-cyan-glow-lg z-0 pointer-events-none"></div>

              {/* Corner decorations */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-2 border-cyan-primary border-r-0 border-b-0 z-20"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-2 border-cyan-primary border-l-0 border-t-0 z-20"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl text-cyan-primary animate-bounce">
        <span>↓</span>
      </div>
    </section>
  );
}
