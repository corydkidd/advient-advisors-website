'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Zap, Building2, FileText } from 'lucide-react';

const credentials = [
  {
    icon: GraduationCap,
    title: 'MIT MEDIA LAB',
    description: 'PhD in AI &\nPsychology (2007)',
  },
  {
    icon: Building2,
    title: 'AI ENTREPRENEUR',
    description: '3 AI companies founded & led\n$10M+ in venture funding raised',
  },
  {
    icon: Zap,
    title: '25 YEARS COMMERCIALIZING AI',
    description: 'From research to\nenterprise deployment',
  },
  {
    icon: FileText,
    title: 'RESEARCHER & INVENTOR',
    description: '3 US Patents in AI systems\nPublished AI researcher in top journals',
  },
];

export default function CredentialsBar() {
  return (
    <section
      id="credentials"
      className="bg-navy-medium py-16 border-t border-b border-border-subtle"
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((credential, index) => (
            <motion.div
              key={credential.title}
              className="text-center p-6 transition-all duration-300 hover:-translate-y-1 border-b lg:border-b-0 lg:border-r border-border-subtle last:border-r-0 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-cyan-primary bg-opacity-10 border-2 border-cyan-primary rounded-full transition-all duration-300 hover:bg-opacity-20 hover:shadow-cyan-glow">
                <credential.icon className="w-8 h-8 text-cyan-primary" />
              </div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-cyan-primary mb-2">
                {credential.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary whitespace-pre-line">
                {credential.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
