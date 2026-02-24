'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <section className="min-h-screen bg-navy-deep py-24">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Privacy Policy
            </h1>
            <p className="text-text-muted mb-12">Last updated: February 2025</p>

            <div className="prose prose-invert max-w-none space-y-8">
              {/* Introduction */}
              <section>
                <p className="text-text-secondary leading-relaxed">
                  Advient Advisors LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
                  committed to protecting your privacy. This Privacy Policy explains how we
                  collect, use, and safeguard your information when you visit our website at
                  advientadvisors.com.
                </p>
              </section>

              {/* Data Collection */}
              <section>
                <h2 className="font-heading text-2xl font-semibold text-text-primary mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">
                      Information You Provide
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Email addresses:</strong> When you sign up to access publications or
                        subscribe to updates, we collect your email address.
                      </li>
                      <li>
                        <strong>Contact information:</strong> When you reach out via email, we
                        collect the information you provide in your correspondence.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">
                      Information Collected Automatically
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Analytics data:</strong> We use Google Analytics to collect
                        information about how visitors use our website, including pages visited,
                        time spent on site, and referring sources.
                      </li>
                      <li>
                        <strong>Device information:</strong> Browser type, operating system, and
                        device type for optimizing your experience.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Data */}
              <section>
                <h2 className="font-heading text-2xl font-semibold text-text-primary mb-4">
                  How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary leading-relaxed">
                  <li>
                    To provide access to publications and downloadable resources you request
                  </li>
                  <li>To send occasional updates about new AI insights and publications</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To improve our website and services based on usage patterns</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              {/* Third Party Services */}
              <section>
                <h2 className="font-heading text-2xl font-semibold text-text-primary mb-4">
                  Third-Party Services
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We use the following third-party services to operate our website:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary leading-relaxed">
                  <li>
                    <strong>Buttondown:</strong> Email newsletter service for storing subscriber
                    email addresses and sending updates. View their{' '}
                    <a
                      href="https://buttondown.email/legal/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-primary hover:underline"
                    >
                      privacy policy
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Google Analytics:</strong> Website analytics service. View their{' '}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-primary hover:underline"
                    >
                      privacy policy
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Vercel:</strong> Website hosting service. View their{' '}
                    <a
                      href="https://vercel.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-primary hover:underline"
                    >
                      privacy policy
                    </a>
                    .
                  </li>
                </ul>
              </section>

              {/* GDPR Rights */}
              <section>
                <h2 className="font-heading text-2xl font-semibold text-text-primary mb-4">
                  Your Rights (GDPR)
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  If you are located in the European Economic Area (EEA) or UK, you have the
                  following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary leading-relaxed">
                  <li>
                    <strong>Right to access:</strong> Request a copy of the personal data we hold
                    about you.
                  </li>
                  <li>
                    <strong>Right to rectification:</strong> Request correction of inaccurate
                    personal data.
                  </li>
                  <li>
                    <strong>Right to erasure:</strong> Request deletion of your personal data
                    (&quot;right to be forgotten&quot;).
                  </li>
                  <li>
                    <strong>Right to restrict processing:</strong> Request that we limit how we use
                    your data.
                  </li>
                  <li>
                    <strong>Right to data portability:</strong> Request your data in a
                    machine-readable format.
                  </li>
                  <li>
                    <strong>Right to withdraw consent:</strong> Withdraw your consent at any time
                    where we rely on consent to process your data.
                  </li>
                </ul>
                <p className="text-text-secondary leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at{' '}
                  <a
                    href="mailto:cory@advientadvisors.com"
                    className="text-cyan-primary hover:underline"
                  >
                    cory@advientadvisors.com
                  </a>
                  .
                </p>
              </section>

              {/* CAN-SPAM Compliance */}
              <section>
                <h2 className="font-heading text-2xl font-semibold text-text-primary mb-4">
                  Email Communications (CAN-SPAM Compliance)
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We comply with the CAN-SPAM Act. When you subscribe to our email list:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary leading-relaxed">
                  <li>Every email includes a clear unsubscribe link</li>
                  <li>Unsubscribe requests are honored within 10 business days</li>
                  <li>We will never sell or rent your email address to third parties</li>
                  <li>Our emails include our physical mailing address</li>
                </ul>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="font-heading text-2xl font-semibold text-text-primary mb-4">
                  Data Retention
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  We retain your email address for as long as you remain subscribed to our mailing
                  list. If you unsubscribe, your email will be removed from our active list within
                  10 business days. Analytics data is retained according to Google Analytics&apos;
                  default retention settings (26 months).
                </p>
              </section>

              {/* Security */}
              <section>
                <h2 className="font-heading text-2xl font-semibold text-text-primary mb-4">
                  Data Security
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your
                  personal data against unauthorized access, alteration, disclosure, or destruction.
                  This includes using HTTPS encryption for all data transmission and working only
                  with reputable third-party service providers.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="font-heading text-2xl font-semibold text-text-primary mb-4">
                  Contact Us
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your data
                  rights, please contact us:
                </p>
                <div className="text-text-secondary space-y-1">
                  <p>
                    <strong className="text-text-primary">Advient Advisors LLC</strong>
                  </p>
                  <p>Dr. Cory Kidd</p>
                  <p>Berkeley, CA 94702</p>
                  <p>
                    Email:{' '}
                    <a
                      href="mailto:cory@advientadvisors.com"
                      className="text-cyan-primary hover:underline"
                    >
                      cory@advientadvisors.com
                    </a>
                  </p>
                </div>
              </section>

              {/* Changes */}
              <section>
                <h2 className="font-heading text-2xl font-semibold text-text-primary mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on
                  this page with an updated &quot;Last updated&quot; date. We encourage you to
                  review this Privacy Policy periodically.
                </p>
              </section>

              {/* Back Link */}
              <div className="pt-8 border-t border-border-subtle">
                <Link
                  href="/"
                  className="text-cyan-primary hover:text-text-primary transition-colors duration-300"
                >
                  &larr; Back to Home
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
