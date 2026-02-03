"use client";

interface LogoProps {
  className?: string;
}

export function AltamentisLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#44cce4" />
          <stop offset="100%" stopColor="#acf4f0" />
        </linearGradient>
        <linearGradient id="aGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#44cce4" />
          <stop offset="100%" stopColor="#2ab8d1" />
        </linearGradient>
      </defs>

      {/* Outer ring representing connectivity/enterprise */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />

      {/* Inner filled circle */}
      <circle
        cx="20"
        cy="20"
        r="16"
        fill="url(#logoGradient)"
        opacity="0.15"
      />

      {/* The "A" letter - modern geometric style */}
      <path
        d="M20 8L10 32H14.5L16.5 27H23.5L25.5 32H30L20 8Z"
        fill="url(#aGradient)"
      />

      {/* Horizontal bar of A (representing bridge/connection) */}
      <rect
        x="15"
        y="21"
        width="10"
        height="2.5"
        rx="1"
        fill="white"
      />

      {/* Inner triangle cutout effect */}
      <path
        d="M20 14L17 21H23L20 14Z"
        fill="white"
        opacity="0.9"
      />

      {/* Small nodes representing intelligence/AI */}
      <circle cx="8" cy="20" r="2" fill="#44cce4" />
      <circle cx="32" cy="20" r="2" fill="#44cce4" />
      <circle cx="20" cy="6" r="2" fill="#44cce4" />

      {/* Connection lines from nodes to A */}
      <line x1="10" y1="20" x2="14" y2="20" stroke="#44cce4" strokeWidth="1" opacity="0.6" />
      <line x1="26" y1="20" x2="30" y2="20" stroke="#44cce4" strokeWidth="1" opacity="0.6" />
      <line x1="20" y1="8" x2="20" y2="10" stroke="#44cce4" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

export function AltamentisLogoSimple({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="simpleGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#44cce4" />
          <stop offset="100%" stopColor="#acf4f0" />
        </linearGradient>
      </defs>

      {/* Hexagon shape representing enterprise/structure */}
      <path
        d="M20 2L36 11V29L20 38L4 29V11L20 2Z"
        fill="url(#simpleGradient)"
        opacity="0.2"
        stroke="#44cce4"
        strokeWidth="1.5"
      />

      {/* Bold A with upward arrow feel - representing elevation/growth */}
      <path
        d="M20 7L11 33H16L17.5 28H22.5L24 33H29L20 7Z"
        fill="#44cce4"
      />

      {/* Inner cutout */}
      <path
        d="M20 15L17.5 23H22.5L20 15Z"
        fill="white"
      />

      {/* Small dot at peak - representing intelligence/focus */}
      <circle cx="20" cy="5" r="1.5" fill="#44cce4" />
    </svg>
  );
}

export function AltamentisLogoWhite({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer ring representing connectivity/enterprise */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="white"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
      />

      {/* Inner filled circle */}
      <circle
        cx="20"
        cy="20"
        r="16"
        fill="white"
        opacity="0.15"
      />

      {/* The "A" letter - modern geometric style */}
      <path
        d="M20 8L10 32H14.5L16.5 27H23.5L25.5 32H30L20 8Z"
        fill="white"
      />

      {/* Inner triangle cutout effect */}
      <path
        d="M20 14L17 21H23L20 14Z"
        fill="#44cce4"
      />

      {/* Horizontal bar of A */}
      <rect
        x="15"
        y="21"
        width="10"
        height="2.5"
        rx="1"
        fill="#44cce4"
      />

      {/* Small nodes representing intelligence/AI */}
      <circle cx="8" cy="20" r="2" fill="white" />
      <circle cx="32" cy="20" r="2" fill="white" />
      <circle cx="20" cy="6" r="2" fill="white" />

      {/* Connection lines from nodes to A */}
      <line x1="10" y1="20" x2="14" y2="20" stroke="white" strokeWidth="1" opacity="0.6" />
      <line x1="26" y1="20" x2="30" y2="20" stroke="white" strokeWidth="1" opacity="0.6" />
      <line x1="20" y1="8" x2="20" y2="10" stroke="white" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}
