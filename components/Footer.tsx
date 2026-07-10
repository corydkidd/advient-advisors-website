'use client';

import Link from 'next/link';
import { Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-deep py-14 border-t border-white/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Branding */}
          <div className="footer-branding">
            <h3 className="font-display text-xl text-cream mb-2">Dr. Cory Kidd</h3>
            <p className="font-util text-sm tracking-[0.03em] text-cream/60">
              Advient Advisors LLC
            </p>
          </div>

          {/* Contact */}
          <div className="footer-contact space-y-2.5 md:text-right">
            <div className="flex items-center gap-2 md:justify-end font-util text-[13px] tracking-[0.03em] text-cream/60">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Berkeley, CA</span>
            </div>
            <div className="flex items-center gap-2 md:justify-end">
              <Mail className="w-4 h-4 text-gold" />
              <a
                href="mailto:cory@advientadvisors.com"
                className="font-util text-[13px] tracking-[0.03em] text-cream/80 hover:text-gold transition-colors duration-300"
              >
                cory@advientadvisors.com
              </a>
            </div>
            <div className="flex items-center gap-2 md:justify-end">
              <Linkedin className="w-4 h-4 text-gold" />
              <a
                href="https://www.linkedin.com/in/coryk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-util text-[13px] tracking-[0.03em] text-cream/80 hover:text-gold transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="font-util text-[12.5px] tracking-[0.03em] text-cream/50">
            &copy; 2026 Advient Advisors LLC. All rights reserved.
            {' '}&middot;{' '}
            <Link
              href="/privacy"
              className="text-cream/50 hover:text-gold transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
