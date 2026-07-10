'use client';

import { motion } from 'framer-motion';

const credentials = [
  {
    title: 'MIT MEDIA LAB',
    description: 'PhD in AI &\nPsychology (2007)',
  },
  {
    title: 'AI ENTREPRENEUR',
    description: '3 AI companies founded & led\n$10M+ in venture funding raised',
  },
  {
    title: '25 YEARS COMMERCIALIZING AI',
    description: 'From research to\nenterprise deployment',
  },
  {
    title: 'RESEARCHER & INVENTOR',
    description: '3 US Patents in AI systems\nPublished AI researcher in top journals',
  },
];

export default function CredentialsBar() {
  return (
    <section
      id="credentials"
      className="bg-navy-deep py-20 border-b border-white/10"
    >
      <div className="container">
        <div className="stat-grid">
          {credentials.map((credential, index) => (
            <motion.div
              key={credential.title}
              className="stat-cell"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <h3 className="font-display text-2xl lg:text-[1.75rem] leading-[1.1] text-gold">
                {credential.title}
              </h3>
              <p className="font-util text-[13px] leading-[1.45] tracking-[0.02em] text-cream-dim/80 mt-4 whitespace-pre-line">
                {credential.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
