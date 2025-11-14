'use client';

import { motion } from 'framer-motion';

const caseStudies = [
  {
    category: 'PHARMACEUTICAL AI STRATEGY',
    company: 'Mid-Size Pharmaceutical Company',
    title: 'Comprehensive AI Strategy & Proof of Concept',
    description:
      'Built two parallel workstreams: organizational readiness assessment and predictive analytics proof of concept for market optimization.',
    deliverables: [
      'Benchmarking analysis across 8 readiness pillars vs. industry peers',
      'Strategic roadmap for enterprise-wide AI implementation',
      'Proof of concept: Predictive model achieving 8-10 week advance warning for market demand surges',
      'Successfully demonstrated ROI, leading to full-scale implementation contract',
    ],
    outcome: {
      label: 'Outcome:',
      text: 'Client moved from assessment to full deployment based on proven concept',
    },
  },
  {
    category: 'MARITIME ENTERPRISE AI TRAINING',
    company: '$1.5B Maritime & Energy Company',
    title: 'Executive Training & Organization-Wide AI Adoption',
    description:
      'Designed and delivered comprehensive AI training program for shore-based employees in organization transitioning to AI-augmented operations.',
    deliverables: [
      'Executive workshops for C-suite leadership',
      'Company-wide GenAI training for ~165 shore-based employees (100% voluntary participation rate)',
      'Department-specific tailored training programs',
      'AI analyst tool development for corporate development function',
      'Ongoing strategic advisory for AI implementation',
    ],
    focus: {
      label: 'Focus:',
      text: 'Practical AI implementation for workflow automation, competitive intelligence, and operational efficiency',
    },
  },
  {
    category: 'BIOTECHNOLOGY SALES TRANSFORMATION',
    company: 'Food Safety & Microbiology Company',
    title: 'AI Strategy Keynotes for Global Sales Organization',
    description:
      'Delivered keynote presentations at annual sales meetings for both US and EMEA divisions, focusing on practical AI applications for sales acceleration.',
    deliverables: [
      'AI-powered customer targeting and territory optimization',
      'LLM applications for technical sales communications',
      'Competitive intelligence automation',
      'Implementation framework for sales organizations',
    ],
    audience: {
      label: 'Audience:',
      text: '90+ sales representatives, software team, C-suite leadership',
    },
  },
  {
    category: 'HEALTHCARE AI COMMERCIALIZATION',
    company: 'Founded & Scaled Patient Engagement Platform (2014-2024)',
    title: 'Catalia Health - AI-Powered Chronic Disease Management',
    description:
      'Built hardware/software system (social robots + AI conversation engine) for patient engagement deployed by pharmaceutical leaders.',
    deliverables: [
      'Pharma customers: Pfizer, Novartis',
      '3 US patents in AI conversation systems',
      'Secured $10M+ in VC/PE funding',
      'Managed full product lifecycle: R&D → clinical validation → commercial deployment',
      'Integrated with major pharmacy chains (Walgreens, CVS)',
    ],
    demonstrates: {
      label: 'Demonstrates:',
      text: '10-year track record commercializing AI in regulated healthcare environments',
    },
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-navy-medium">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Results-driven AI implementation across regulated industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              className="bg-charcoal p-8 rounded-xl border border-border-subtle transition-all duration-300 hover:border-cyan-primary hover:shadow-cyan-glow flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-2">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold-accent px-3 py-2 bg-gold-accent bg-opacity-10 rounded">
                  {study.category}
                </span>
              </div>

              <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                {study.company}
              </h3>

              <h4 className="font-heading text-xl font-bold text-cyan-primary mb-3">
                {study.title}
              </h4>

              <p className="text-base text-text-secondary leading-relaxed mb-4">
                {study.description}
              </p>

              <div className="mt-4">
                <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-text-primary mb-3">
                  {study.deliverables[0].includes('Pharma') || study.deliverables[0].includes('Executive')
                    ? study.deliverables[0].includes('Pharma') ? 'Achievements:' : 'Deliverables:'
                    : study.deliverables[0].includes('AI-powered') ? 'Content:' : 'Deliverables:'}
                </h5>
                <ul className="space-y-2">
                  {study.deliverables.map((item, i) => (
                    <li
                      key={i}
                      className="relative pl-5 text-sm text-text-secondary leading-relaxed before:content-['→'] before:absolute before:left-0 before:text-cyan-primary before:font-bold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {study.outcome && (
                <div className="mt-4 p-3 bg-cyan-primary bg-opacity-5 border-l-4 border-cyan-primary rounded text-sm text-text-secondary leading-relaxed">
                  <span className="font-bold text-cyan-primary mr-2">
                    {study.outcome.label}
                  </span>
                  {study.outcome.text}
                </div>
              )}

              {study.focus && (
                <div className="mt-4 p-3 bg-cyan-primary bg-opacity-5 border-l-4 border-cyan-primary rounded text-sm text-text-secondary leading-relaxed">
                  <span className="font-bold text-cyan-primary mr-2">
                    {study.focus.label}
                  </span>
                  {study.focus.text}
                </div>
              )}

              {study.audience && (
                <div className="mt-4 p-3 bg-cyan-primary bg-opacity-5 border-l-4 border-cyan-primary rounded text-sm text-text-secondary leading-relaxed">
                  <span className="font-bold text-cyan-primary mr-2">
                    {study.audience.label}
                  </span>
                  {study.audience.text}
                </div>
              )}

              {study.demonstrates && (
                <div className="mt-4 p-3 bg-cyan-primary bg-opacity-5 border-l-4 border-cyan-primary rounded text-sm text-text-secondary leading-relaxed">
                  <span className="font-bold text-cyan-primary mr-2">
                    {study.demonstrates.label}
                  </span>
                  {study.demonstrates.text}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
