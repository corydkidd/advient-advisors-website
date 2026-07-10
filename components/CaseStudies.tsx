'use client';

import { motion } from 'framer-motion';

const caseStudies = [
  {
    category: 'PHARMACEUTICAL AI STRATEGY',
    company: 'Mid-Size Pharma — Commercial',
    title: 'From Readiness Assessment to Shipped Forecasting Engine',
    description:
      'A mid-size pharma commercial team had executive appetite for AI but no path from experimentation to production.',
    deliverables: [
      'Benchmarked readiness',
      'Facilitated a leadership workshop to prioritize use cases',
      'Delivered a phased roadmap',
      'Architected and shipped the top-priority system: a market-optimization and demand-forecasting engine integrating structured and unstructured data',
      'Interactive geographic dashboard and automated alerts — surfacing demand shifts weeks earlier than traditional market signals',
    ],
    outcome: {
      label: 'Outcome:',
      text: 'Assessment converted into a build engagement, then ongoing operational support.',
    },
  },
  {
    category: 'MARITIME ENTERPRISE AI',
    company: '~$1.5B Maritime Shipping',
    title: 'Executive Training & Organization-Wide AI Adoption',
    description:
      'A ~$1.5B maritime shipping company (roughly 1,800 employees, most at sea) wanted to stay lean by using AI instead of adding headcount — but no one in leadership had used it.',
    deliverables: [
      'Trained the senior leadership team directly',
      'Ran a workshop to surface high-value use cases',
      'Deployed an enterprise-grade AI platform for a security-sensitive industry',
      'Stood up the governance layer and built the adoption engine',
      '~165 shore-based employees onboarded at 100% voluntary participation',
    ],
    outcome: {
      label: 'Outcome:',
      text: 'The fixed-fee program converted into an ongoing advisory retainer and a materially expanded mandate the following year.',
    },
  },
  {
    category: 'PHARMA AI GO-TO-MARKET',
    company: 'Pharma Market Research',
    title: 'Scaling an Early AI Head Start into Commercial Growth',
    description:
      'A pharma market research firm was an early mover on AI, with a proprietary, differentiated capability in daily use ahead of its peers. The priority was converting that head start into commercial scale.',
    deliverables: [
      'Ran a focused six-week assessment across the leadership team',
      'Delivered a prioritized plan to scale adoption',
      'Sharpened the go-to-market model for its AI-enabled products',
      "Put a shared measurement framework in place tied to the company's own targets",
      'Packaged the work as a 30/60/90-day roadmap the CEO could act on immediately',
    ],
    outcome: {
      label: 'Outcome:',
      text: 'The CEO extended the work into an ongoing monthly advisory engagement.',
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
