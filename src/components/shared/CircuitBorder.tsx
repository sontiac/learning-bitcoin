export default function CircuitBorder({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Top-left corner */}
      <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path
            d="M0 32 L0 8 Q0 0 8 0 L32 0"
            stroke="#D4A843"
            strokeWidth="1"
            opacity="0.3"
          />
          <circle cx="32" cy="0" r="2" fill="#D4A843" opacity="0.5" />
          <circle cx="0" cy="32" r="2" fill="#D4A843" opacity="0.5" />
        </svg>
      </div>
      {/* Bottom-right corner */}
      <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none rotate-180">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path
            d="M0 32 L0 8 Q0 0 8 0 L32 0"
            stroke="#D4A843"
            strokeWidth="1"
            opacity="0.3"
          />
          <circle cx="32" cy="0" r="2" fill="#D4A843" opacity="0.5" />
          <circle cx="0" cy="32" r="2" fill="#D4A843" opacity="0.5" />
        </svg>
      </div>
      {children}
    </div>
  );
}
