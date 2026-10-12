import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'white' | 'with-pillars';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  const isWhite = variant === 'white';
  const navyColor = isWhite ? '#FFFFFF' : '#00204A';
  const navyDark = isWhite ? '#E2E8F0' : '#001737';
  const cyanTeal = '#00A8B5';
  const skyCyan = '#38BDF8';
  const metallicCharcoal = isWhite ? '#94A3B8' : '#334155';
  const slateText = isWhite ? '#E2E8F0' : '#00204A';

  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  }[size];

  // If only the circular mark is requested
  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClasses} w-auto aspect-square ${className}`}
        aria-label="Sutton Oasis Emblem"
      >
        <defs>
          <linearGradient id="markRibbonGrad" x1="16" y1="16" x2="144" y2="144" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00204A" />
            <stop offset="35%" stopColor="#003D73" />
            <stop offset="65%" stopColor="#00A8B5" />
            <stop offset="100%" stopColor="#00204A" />
          </linearGradient>
          <linearGradient id="markWaveGrad" x1="0" y1="0" x2="50" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#00A8B5" />
          </linearGradient>
          <linearGradient id="markTowerGrad" x1="55" y1="110" x2="75" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="60%" stopColor="#475569" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          <linearGradient id="markBarGrad" x1="0" y1="115" x2="0" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00A8B5" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>

        {/* Compass Outer Ring & Directional Arrow Darts */}
        <circle cx="80" cy="80" r="74" stroke={navyColor} strokeWidth="2.5" opacity={isWhite ? 0.8 : 0.95} />
        <polygon points="80,1 86,14 74,14" fill={navyColor} />
        <polygon points="80,159 86,146 74,146" fill={cyanTeal} />

        {/* Dynamic Airflow Waves on Left */}
        <path d="M8 64 C22 62, 34 70, 46 75" stroke="url(#markWaveGrad)" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M4 78 C20 75, 36 84, 48 88" stroke="url(#markWaveGrad)" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M8 92 C22 90, 36 96, 46 99" stroke="url(#markWaveGrad)" strokeWidth="3" strokeLinecap="round" />
        <path d="M18 104 C28 102, 38 106, 46 109" stroke="url(#markWaveGrad)" strokeWidth="2.5" strokeLinecap="round" />

        {/* 3 Performance Bar Chart Rectangles */}
        <rect x="42" y="106" width="5" height="10" rx="1.5" fill="url(#markBarGrad)" />
        <rect x="50" y="98" width="5.5" height="18" rx="1.5" fill="url(#markBarGrad)" />
        <rect x="59" y="88" width="6" height="28" rx="1.5" fill="url(#markBarGrad)" />

        {/* Chrome / Metallic Skyscraper Apex */}
        <polygon points="73,74 89,116 57,116" fill="url(#markTowerGrad)" />
        <polygon points="73,74 81,116 57,116" fill="#334155" opacity="0.5" />
        <line x1="65" y1="107" x2="81" y2="107" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="73" cy="95" r="2" fill="#FFFFFF" />

        {/* 3D Ribbon S */}
        <path
          d="M136 43 C136 30, 116 22, 88 22 C56 22, 36 37, 36 61 C36 75, 47 85, 74 93 C100 101, 111 109, 111 122 C111 136, 95 141, 76 141 C51 141, 33 131, 30 118 L13 118 C16 142, 41 157, 76 157 C113 157, 135 141, 135 117 C135 99, 120 88, 92 80 C68 73, 60 66, 60 56 C60 45, 73 39, 90 39 C107 39, 118 45, 120 54 Z"
          fill="url(#markRibbonGrad)"
        />
        <path
          d="M36 61 C36 37, 56 22, 88 22 C116 22, 136 30, 136 43 L120 54 C118 45, 107 39, 90 39 C73 39, 60 45, 60 56 Z"
          fill={navyDark}
          opacity="0.9"
        />
        <path
          d="M60 56 C60 66, 68 73, 92 80 C120 88, 135 99, 135 117 C135 125, 130 133, 122 139 C129 131, 132 123, 132 114 C132 100, 119 91, 94 83 C72 76, 62 67, 62 57 Z"
          fill={cyanTeal}
        />

        {/* Verification Checkmark Seal */}
        <g transform="translate(104, 74)">
          <circle cx="16" cy="16" r="15" fill="#FFFFFF" />
          <circle cx="16" cy="16" r="14" stroke={navyColor} strokeWidth="3" />
          <path d="M9 16 L14 21 L23 10" fill="none" stroke={cyanTeal} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    );
  }

  // Single unified, vector-accurate full logo matching the uploaded asset
  return (
    <svg
      viewBox="0 0 540 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${heightClasses} w-auto max-w-full select-none ${className}`}
      aria-label="Sutton Oasis Technical Services LLC Logo"
    >
      <defs>
        {/* Ribbon S Gradient */}
        <linearGradient id="fullRibbonGrad" x1="16" y1="16" x2="144" y2="144" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00204A" />
          <stop offset="35%" stopColor="#003D73" />
          <stop offset="65%" stopColor="#00A8B5" />
          <stop offset="100%" stopColor="#00204A" />
        </linearGradient>

        {/* Airflow Wave Gradient */}
        <linearGradient id="fullWaveGrad" x1="0" y1="0" x2="50" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#00A8B5" />
        </linearGradient>

        {/* Skyscraper Chrome Gradient */}
        <linearGradient id="fullTowerGrad" x1="55" y1="105" x2="75" y2="65" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="60%" stopColor="#475569" />
          <stop offset="100%" stopColor="#94A3B8" />
        </linearGradient>

        {/* Bar Chart Gradient */}
        <linearGradient id="fullBarGrad" x1="0" y1="110" x2="0" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00A8B5" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>

      {/* ========================================================= */}
      {/* 1. LEFT EMBLEM: COMPASS + RIBBON S + WAVES + BADGE        */}
      {/* ========================================================= */}
      <g transform="translate(0, 0)">
        {/* Compass Outer Ring (cx=72, cy=72, r=66) */}
        <circle cx="72" cy="72" r="66" stroke={navyColor} strokeWidth="2.5" opacity={isWhite ? 0.8 : 0.95} />
        {/* North Arrow Pointer (Navy) */}
        <polygon points="72,2 78,14 66,14" fill={navyColor} />
        {/* South Arrow Pointer (Cyan) */}
        <polygon points="72,142 78,130 66,130" fill={cyanTeal} />

        {/* 4 Airflow Wave Ribbons */}
        <path d="M8 58 C20 56, 32 64, 42 68" stroke="url(#fullWaveGrad)" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M4 71 C18 68, 32 77, 44 80" stroke="url(#fullWaveGrad)" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M8 84 C20 82, 32 88, 42 91" stroke="url(#fullWaveGrad)" strokeWidth="3" strokeLinecap="round" />
        <path d="M16 95 C26 93, 34 97, 42 99" stroke="url(#fullWaveGrad)" strokeWidth="2.5" strokeLinecap="round" />

        {/* 3 Growth Bar Chart Rectangles */}
        <rect x="38" y="96" width="4.5" height="9" rx="1.2" fill="url(#fullBarGrad)" />
        <rect x="45" y="89" width="5" height="16" rx="1.2" fill="url(#fullBarGrad)" />
        <rect x="53" y="80" width="5.5" height="25" rx="1.2" fill="url(#fullBarGrad)" />

        {/* Chrome Skyscraper Triangle */}
        <polygon points="66,66 81,105 51,105" fill="url(#fullTowerGrad)" />
        <polygon points="66,66 73,105 51,105" fill="#334155" opacity="0.5" />
        <line x1="58" y1="97" x2="73" y2="97" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="66" cy="86" r="1.8" fill="#FFFFFF" />

        {/* 3D Ribbon S */}
        <path
          d="M123 38 C123 27, 105 19, 79 19 C50 19, 32 32, 32 54 C32 67, 42 76, 66 83 C89 90, 99 97, 99 109 C99 121, 85 125, 68 125 C45 125, 29 116, 26 105 L11 105 C14 126, 36 140, 68 140 C101 140, 120 126, 120 104 C120 88, 107 78, 82 71 C61 65, 54 58, 54 49 C54 39, 65 34, 80 34 C95 34, 105 39, 107 48 Z"
          fill="url(#fullRibbonGrad)"
        />
        <path
          d="M32 54 C32 32, 50 19, 79 19 C105 19, 123 27, 123 38 L107 48 C105 39, 95 34, 80 34 C65 34, 54 39, 54 49 Z"
          fill={navyDark}
          opacity="0.9"
        />
        <path
          d="M54 49 C54 58, 61 65, 82 71 C107 78, 120 88, 120 104 C120 111, 116 118, 109 123 C115 116, 118 109, 118 101 C118 89, 106 81, 84 74 C64 68, 55 60, 55 51 Z"
          fill={cyanTeal}
        />

        {/* Verification Checkmark Seal */}
        <g transform="translate(94, 66)">
          <circle cx="14" cy="14" r="13.5" fill="#FFFFFF" />
          <circle cx="14" cy="14" r="12.5" stroke={navyColor} strokeWidth="2.8" />
          <path d="M8 14 L12 18 L20 9" fill="none" stroke={cyanTeal} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      {/* ========================================================= */}
      {/* 2. RIGHT TYPOGRAPHY: EXACT SUTTON + OΛSIS + LLC            */}
      {/* ========================================================= */}
      <g transform="translate(155, 0)">
        {/* Word 1: SUTTON in Bold Deep Navy */}
        <text
          x="0"
          y="50"
          fill={navyColor}
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="48"
          letterSpacing="2.5"
        >
          SUTTON
        </text>

        {/* Word 2: OΛSIS in Electric Cyan-Teal with Inverted Chevron Λ */}
        <g transform="translate(0, 60)">
          {/* O */}
          <path
            d="M 4 8 H 28 C 38 8, 44 14, 44 26 V 34 C 44 46, 38 52, 28 52 H 4 C -6 52, -12 46, -12 34 V 26 C -12 14, -6 8, 4 8 Z M 6 18 C 1 18, -1 21, -1 27 V 33 C -1 39, 1 42, 6 42 H 26 C 31 42, 33 39, 33 33 V 27 C 33 21, 31 18, 26 18 Z"
            fill={cyanTeal}
            transform="translate(14, 0)"
          />

          {/* Inverted Chevron Λ (A without crossbar) */}
          <polygon
            points="98,8 114,8 138,52 125,52 106,19 87,52 74,52"
            fill={cyanTeal}
          />

          {/* S */}
          <path
            d="M 198 19 C 198 12, 192 8, 180 8 H 158 C 148 8, 142 14, 142 24 C 142 32, 148 37, 160 40 L 178 44 C 185 45, 188 47, 188 51 C 188 56, 182 59, 172 59 H 148 C 142 59, 138 57, 137 52 L 126 52 C 127 61, 135 69, 148 69 H 172 C 188 69, 199 61, 199 50 C 199 41, 192 36, 180 33 L 162 29 C 156 28, 153 26, 153 22 C 153 18, 158 15, 166 15 H 180 C 187 15, 189 17, 190 20 Z"
            fill={cyanTeal}
            transform="scale(0.88) translate(30, -2)"
          />

          {/* I */}
          <rect x="220" y="8" width="11" height="44" rx="2" fill={cyanTeal} />

          {/* S */}
          <path
            d="M 198 19 C 198 12, 192 8, 180 8 H 158 C 148 8, 142 14, 142 24 C 142 32, 148 37, 160 40 L 178 44 C 185 45, 188 47, 188 51 C 188 56, 182 59, 172 59 H 148 C 142 59, 138 57, 137 52 L 126 52 C 127 61, 135 69, 148 69 H 172 C 188 69, 199 61, 199 50 C 199 41, 192 36, 180 33 L 162 29 C 156 28, 153 26, 153 22 C 153 18, 158 15, 166 15 H 180 C 187 15, 189 17, 190 20 Z"
            fill={cyanTeal}
            transform="scale(0.88) translate(120, -2)"
          />
        </g>

        {/* Word 3: — TECHNICAL SERVICES LLC — */}
        <g transform="translate(0, 130)">
          {/* Left Teal Dash */}
          <line x1="0" y1="-5" x2="22" y2="-5" stroke={cyanTeal} strokeWidth="2.5" strokeLinecap="round" />
          
          <text
            x="32"
            y="0"
            fill={slateText}
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="15"
            letterSpacing="3.5"
          >
            TECHNICAL SERVICES LLC
          </text>

          {/* Right Teal Dash */}
          <line x1="334" y1="-5" x2="356" y2="-5" stroke={cyanTeal} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
};
