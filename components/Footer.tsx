'use client';

import Link from 'next/link';
import { Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal py-16 border-t border-border-subtle">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Branding */}
          <div className="footer-branding">
            <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
              Dr. Cory Kidd
            </h3>
            <p className="text-base text-text-secondary">Advient Advisors LLC</p>
          </div>

          {/* Contact */}
          <div className="footer-contact space-y-2">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <MapPin className="w-4 h-4" />
              <span>Berkeley, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-text-secondary" />
              <a
                href="mailto:cory@advientadvisors.com"
                className="text-sm text-cyan-primary hover:text-text-primary transition-colors duration-300 hover:underline"
              >
                cory@advientadvisors.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-text-secondary" />
              <a
                href="https://www.linkedin.com/in/coryk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cyan-primary hover:text-text-primary transition-colors duration-300 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border-subtle text-center">
          <p className="text-sm text-text-muted">
            &copy; 2025 Advient Advisors LLC. All rights reserved.
            {' '}&middot;{' '}
            <Link
              href="/privacy"
              className="text-text-muted hover:text-text-secondary transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
