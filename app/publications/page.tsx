'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

// Publication data - add your PDFs here
const publications = [
  {
    id: 'linkedin-profile',
    title: 'About Dr. Cory Kidd',
    description:
      'Background and experience of Dr. Cory Kidd, founder of Advient Advisors. More publications coming soon.',
    filename: 'Cory Kidd LinkedIn Profile.pdf',
    pages: 4,
  },
  // Add more publications as needed
];

export default function PublicationPage() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Check session storage on mount
  useEffect(() => {
    const unlocked = sessionStorage.getItem('publication-access');
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    if (!consent) {
      setError('Please agree to the privacy policy to continue');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      // Success - unlock access
      sessionStorage.setItem('publication-access', 'true');
      setSuccess(true);

      // Brief delay to show success state before revealing publications
      setTimeout(() => {
        setIsUnlocked(true);
      }, 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-navy-deep py-24">
        <div className="container">
          {/* Hero Section */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Publications & Insights
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Access practical guides and frameworks developed from 25+ years of AI implementation
              experience. Download resources to help you navigate your AI journey.
            </p>
          </motion.div>

          {/* Email Gate or Publications Grid */}
          <AnimatePresence mode="wait">
            {!isUnlocked ? (
              <motion.div
                key="email-gate"
                className="max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-charcoal p-8 rounded-xl border border-border-subtle">
                  <div className="flex items-center justify-center w-16 h-16 bg-cyan-primary bg-opacity-10 rounded-xl mb-6 mx-auto">
                    <Mail className="w-8 h-8 text-cyan-primary" />
                  </div>

                  <h2 className="font-heading text-2xl font-semibold text-text-primary text-center mb-4">
                    Get Access to Publications
                  </h2>
                  <p className="text-text-secondary text-center mb-6">
                    Enter your email to unlock all publications. We&apos;ll occasionally send
                    updates on new AI insights.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-navy-deep border border-border-subtle rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-cyan-primary transition-colors duration-300"
                        disabled={isLoading || success}
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-border-subtle bg-navy-deep text-cyan-primary focus:ring-cyan-primary focus:ring-offset-0"
                        disabled={isLoading || success}
                      />
                      <label htmlFor="consent" className="text-sm text-text-secondary">
                        I agree to the{' '}
                        <Link
                          href="/privacy"
                          className="text-cyan-primary hover:underline"
                          target="_blank"
                        >
                          Privacy Policy
                        </Link>{' '}
                        and consent to receive occasional updates.
                      </label>
                    </div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-red-400 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {error}
                      </motion.div>
                    )}

                    {success && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-green-400 text-sm"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Success! Unlocking publications...
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading || success}
                      className="w-full py-3 px-6 bg-cyan-primary text-navy-deep font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Subscribing...
                        </>
                      ) : success ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Subscribed!
                        </>
                      ) : (
                        'Unlock Publications'
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="publications-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {publications.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {publications.map((pub, index) => (
                      <motion.div
                        key={pub.id}
                        className="bg-charcoal p-8 rounded-xl border border-border-subtle transition-all duration-300 hover:-translate-y-1 hover:border-cyan-primary hover:shadow-cyan-glow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <div className="w-16 h-16 flex items-center justify-center bg-cyan-primary bg-opacity-10 rounded-xl mb-6">
                          <FileText className="w-8 h-8 text-cyan-primary" />
                        </div>

                        <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                          {pub.title}
                        </h3>
                        <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                          {pub.description}
                        </p>

                        {pub.pages && (
                          <p className="text-text-muted text-xs mb-6">{pub.pages} pages • PDF</p>
                        )}

                        <a
                          href={`/publications/${pub.filename}`}
                          download
                          className="inline-flex items-center gap-2 text-cyan-primary hover:text-text-primary transition-colors duration-300 font-medium"
                        >
                          <Download className="w-4 h-4" />
                          Download PDF
                        </a>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 flex items-center justify-center bg-cyan-primary bg-opacity-10 rounded-xl mb-6 mx-auto">
                      <FileText className="w-8 h-8 text-cyan-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                      Publications Coming Soon
                    </h3>
                    <p className="text-text-secondary">
                      We&apos;re preparing new resources. Check back soon or watch your inbox for
                      updates.
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <Footer />
    </>
  );
}
