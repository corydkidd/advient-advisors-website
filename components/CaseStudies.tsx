'use client';

import { motion } from 'framer-motion';
import Ticks from './Ticks';

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

function deliverablesLabel(deliverables: string[]) {
  const first = deliverables[0];
  if (first.includes('Pharma')) return 'Achievements:';
  if (first.includes('Executive')) return 'Deliverables:';
  if (first.includes('AI-powered')) return 'Content:';
  return 'Deliverables:';
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 lg:py-24 bg-navy">
      <div className="container">
        <motion.div
          className="max-w-3xl mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3.5 mb-5">
            <Ticks />
            <span className="font-util text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Recent work
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-cream leading-[1.08] mb-4">
            Recent Projects
          </h2>
          <p className="font-body text-lg text-cream/80 leading-relaxed">
            Results-driven AI implementation across regulated industries
          </p>
        </motion.div>

        <div>
          {caseStudies.map((study, index) => {
            const accent = study.outcome ?? study.demonstrates;
            return (
              <motion.article
                key={study.title}
                className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-4 lg:gap-10 py-8 border-t border-white/[0.14] last:border-b last:border-white/[0.14]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="font-util text-[11.5px] font-semibold uppercase tracking-[0.14em] text-gold lg:pt-1.5">
                  {study.category}
                </div>

                <div>
                  <h3 className="font-display text-2xl text-cream leading-[1.15] mb-2">
                    {study.title}
                  </h3>
                  <div className="font-util text-[11.5px] font-medium uppercase tracking-[0.1em] text-cream/55 mb-4">
                    {study.company}
                  </div>

                  <p className="font-body text-[1.02rem] text-cream/90 leading-relaxed max-w-[64ch] mb-5">
                    {study.description}
                  </p>

                  <div className="mb-5">
                    <h4 className="font-util text-[11px] font-semibold uppercase tracking-[0.14em] text-cream/50 mb-3">
                      {deliverablesLabel(study.deliverables)}
                    </h4>
                    <ul className="space-y-2 max-w-[64ch]">
                      {study.deliverables.map((item, i) => (
                        <li
                          key={i}
                          className="relative pl-5 font-body text-[0.95rem] text-cream/85 leading-relaxed before:content-['→'] before:absolute before:left-0 before:text-gold"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {accent && (
                    <span className="inline-block font-util text-[13px] font-medium tracking-[0.01em] text-gold before:content-['→_']">
                      {accent.text}
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
