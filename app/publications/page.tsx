'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Download,
  Mail,
  CheckCircle,
  AlertCircle,
  Loader2,
  // Topic-specific icons
  Brain,
  Lightbulb,
  Target,
  TrendingUp,
  Building2,
  Workflow,
  Cpu,
  Users,
  User,
  BookOpen,
  GraduationCap,
  Pill,
  Ship,
  Stethoscope,
  Shield,
  Scale,
  Cog,
  BarChart3,
  Rocket,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

// Icon mapping for auto-detection based on keywords
const iconKeywords: { keywords: string[]; icon: LucideIcon }[] = [
  { keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'neural', 'llm'], icon: Brain },
  { keywords: ['strategy', 'strategic', 'roadmap'], icon: Target },
  { keywords: ['roi', 'metrics', 'growth', 'revenue', 'profit', 'financial'], icon: TrendingUp },
  { keywords: ['implementation', 'deploy', 'integration', 'workflow', 'process'], icon: Workflow },
  { keywords: ['enterprise', 'corporate', 'business', 'organization'], icon: Building2 },
  { keywords: ['pharma', 'pharmaceutical', 'drug', 'medication', 'pill'], icon: Pill },
  { keywords: ['health', 'healthcare', 'medical', 'clinical', 'patient'], icon: Stethoscope },
  { keywords: ['maritime', 'shipping', 'vessel', 'port', 'ocean', 'ship'], icon: Ship },
  { keywords: ['insight', 'idea', 'innovation', 'creative'], icon: Lightbulb },
  { keywords: ['tech', 'technical', 'software', 'system', 'architecture'], icon: Cpu },
  { keywords: ['team', 'people', 'staff', 'workforce', 'employee'], icon: Users },
  { keywords: ['about', 'bio', 'profile', 'founder', 'author'], icon: User },
  { keywords: ['guide', 'handbook', 'manual', 'reference'], icon: BookOpen },
  { keywords: ['learn', 'education', 'training', 'course'], icon: GraduationCap },
  { keywords: ['security', 'privacy', 'compliance', 'protect'], icon: Shield },
  { keywords: ['regulation', 'legal', 'policy', 'governance'], icon: Scale },
  { keywords: ['automation', 'automate', 'efficiency', 'optimize'], icon: Cog },
  { keywords: ['data', 'analytics', 'dashboard', 'report'], icon: BarChart3 },
  { keywords: ['launch', 'startup', 'scale', 'accelerate'], icon: Rocket },
  { keywords: ['quick', 'fast', 'rapid', 'agile'], icon: Zap },
];

// Get icon based on title and description, or use explicit override
function getPublicationIcon(pub: Publication): LucideIcon {
  if (pub.icon) return pub.icon;

  const searchText = `${pub.title} ${pub.description}`.toLowerCase();

  for (const { keywords, icon } of iconKeywords) {
    if (keywords.some((keyword) => searchText.includes(keyword))) {
      return icon;
    }
  }

  return FileText; // Default fallback
}

// Publication type definition
interface Publication {
  id: string;
  title: string;
  description: string;
  filename: string;
  pages?: number;
  icon?: LucideIcon; // Optional override - auto-detected if not provided
}

// Publication data - add your PDFs here
// Icons are auto-detected from title/description keywords, or you can specify one explicitly
const publications: Publication[] = [
  {
    id: 'agentic-ai-playbook',
    title: 'The Agentic AI Playbook: Building Systems That Survive Production',
    description:
      'Most agentic AI projects fail not because the technology doesn\'t work, but because the architecture does. This guide covers the patterns, failure modes, and 90-day implementation path that separate the 11% getting real ROI from the 89% that aren\'t.',
    filename: 'Agentic-AI-Playbook.pdf',
    pages: 10,
  },
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

  const handleDownload = (pub: Publication) => {
    const subscriberEmail = sessionStorage.getItem('publication-email');

    // Fire tracking request (don't block the download)
    if (subscriberEmail) {
      fetch('/api/track-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: subscriberEmail, publicationId: pub.id }),
      }).catch(() => {}); // Silent fail — don't block download
    }

    // Trigger the download
    const link = document.createElement('a');
    link.href = `/publications/${pub.filename}`;
    link.download = pub.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

      // Success - unlock access and store email for download tracking
      sessionStorage.setItem('publication-access', 'true');
      sessionStorage.setItem('publication-email', email);
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
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-cream mb-6">
              Publications & Insights
            </h1>
            <p className="text-lg text-cream/80 leading-relaxed">
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
                <div className="bg-navy-soft p-8 rounded-sm border border-white/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gold bg-opacity-10 rounded-sm mb-6 mx-auto">
                    <Mail className="w-8 h-8 text-gold" />
                  </div>

                  <h2 className="font-heading text-2xl font-semibold text-cream text-center mb-4">
                    Get Access to Publications
                  </h2>
                  <p className="text-cream/80 text-center mb-6">
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
                        className="w-full px-4 py-3 bg-navy-deep border border-white/10 rounded-sm text-cream placeholder-cream/40 focus:outline-none focus:border-gold transition-colors duration-300"
                        disabled={isLoading || success}
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-white/10 bg-navy-deep text-gold focus:ring-gold focus:ring-offset-0"
                        disabled={isLoading || success}
                      />
                      <label htmlFor="consent" className="text-sm text-cream/80">
                        I agree to the{' '}
                        <Link
                          href="/privacy"
                          className="text-gold hover:underline"
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
                      className="w-full py-3 px-6 bg-gold text-navy-deep font-semibold rounded-sm hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                    {publications.map((pub, index) => {
                      const IconComponent = getPublicationIcon(pub);
                      return (
                        <motion.div
                          key={pub.id}
                          className="bg-navy-soft p-8 rounded-sm border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-gold "
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <div className="w-16 h-16 flex items-center justify-center bg-gold bg-opacity-10 rounded-sm mb-6">
                            <IconComponent className="w-8 h-8 text-gold" />
                          </div>

                        <h3 className="font-heading text-xl font-semibold text-cream mb-3">
                          {pub.title}
                        </h3>
                        <p className="text-cream/80 text-sm mb-4 leading-relaxed">
                          {pub.description}
                        </p>

                        {pub.pages && (
                          <p className="text-cream/50 text-xs mb-6">{pub.pages} pages • PDF</p>
                        )}

                        <button
                          onClick={() => handleDownload(pub)}
                          className="inline-flex items-center gap-2 text-gold hover:text-cream transition-colors duration-300 font-medium"
                        >
                          <Download className="w-4 h-4" />
                          Download PDF
                        </button>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 flex items-center justify-center bg-gold bg-opacity-10 rounded-sm mb-6 mx-auto">
                      <FileText className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-cream mb-3">
                      Publications Coming Soon
                    </h3>
                    <p className="text-cream/80">
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
