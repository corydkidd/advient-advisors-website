'use client';

import { MotionConfig } from 'framer-motion';

/**
 * Wraps the app so all framer-motion animations honor the user's
 * prefers-reduced-motion setting (transforms are disabled, opacity only).
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
