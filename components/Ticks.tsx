/**
 * Calibration-tick signature motif — a small cluster of thin gold vertical
 * ticks of varying height. The one recurring brand device; used beside section
 * eyebrows and at the closing. Styled via the global `.ticks` class.
 */
export default function Ticks({ className = '' }: { className?: string }) {
  return (
    <span className={`ticks ${className}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}
