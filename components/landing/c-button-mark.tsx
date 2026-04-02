"use client";

import { useState } from "react";

type Segment = {
  id: string;
  label: string;
  points: string;
  seam?: string;
};

const segments: Segment[] = [
  {
    id: "top-left",
    label: "Top left facet",
    points: "64,446 390,208 534,446",
    seam: "390,208 230,640",
  },
  {
    id: "top-mid",
    label: "Top middle facet",
    points: "390,208 702,208 548,446 534,446",
  },
  {
    id: "top-right",
    label: "Top right facet",
    points: "732,224 968,446 578,446",
  },
  {
    id: "mid-left",
    label: "Middle left facet",
    points: "48,452 208,628 48,816",
  },
  {
    id: "mid-mid",
    label: "Middle middle facet",
    points: "78,452 438,452 208,628",
  },
  {
    id: "lower-mid",
    label: "Lower middle facet",
    points: "78,836 462,904 212,654",
  },
  {
    id: "bottom-left",
    label: "Bottom left facet",
    points: "72,852 462,904 672,1114 384,1114",
    seam: "462,904 384,1114",
  },
  {
    id: "bottom-right",
    label: "Bottom right facet",
    points: "520,908 972,908 758,1112",
  },
];

function Facet({
  active,
  onActivate,
  segment,
}: {
  active: boolean;
  onActivate: (id: string) => void;
  segment: Segment;
}) {
  return (
    <g
      aria-label={segment.label}
      className="cursor-pointer outline-none"
      onClick={() => onActivate(segment.id)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onActivate(segment.id);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <polygon
        fill={active ? "url(#facetFillActive)" : "url(#facetFill)"}
        filter={active ? "url(#facetGlowStrong)" : "url(#facetGlow)"}
        points={segment.points}
        stroke="rgba(244,255,199,0.98)"
        strokeLinejoin="round"
        strokeWidth="6"
        style={{
          transition: "filter 160ms ease, fill 160ms ease",
        }}
      />
      {segment.seam ? (
        <polyline
          fill="none"
          opacity="0.92"
          points={segment.seam}
          stroke="rgba(244,255,199,0.9)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
        />
      ) : null}
      <title>{segment.label}</title>
    </g>
  );
}

export function CButtonMark() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-[38rem]">
      <div className="absolute inset-x-[18%] bottom-[6%] h-14 rounded-full bg-emerald-400/22 blur-3xl" />
      <svg
        aria-label="codeform geometric C"
        className="relative z-10 h-auto w-full"
        viewBox="0 0 1000 1220"
      >
        <defs>
          <linearGradient id="facetFill" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#72ef63" />
            <stop offset="100%" stopColor="#2ca845" />
          </linearGradient>
          <linearGradient id="facetFillActive" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#b8ff78" />
            <stop offset="100%" stopColor="#44d85e" />
          </linearGradient>
          <filter
            colorInterpolationFilters="sRGB"
            height="170%"
            id="facetGlow"
            width="170%"
            x="-35%"
            y="-35%"
          >
            <feDropShadow
              dx="0"
              dy="0"
              floodColor="rgba(214,255,145,0.95)"
              stdDeviation="4"
            />
            <feDropShadow
              dx="0"
              dy="0"
              floodColor="rgba(34,197,94,0.52)"
              stdDeviation="18"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            height="180%"
            id="facetGlowStrong"
            width="180%"
            x="-40%"
            y="-40%"
          >
            <feDropShadow
              dx="0"
              dy="0"
              floodColor="rgba(236,255,190,1)"
              stdDeviation="5"
            />
            <feDropShadow
              dx="0"
              dy="0"
              floodColor="rgba(74,222,128,0.68)"
              stdDeviation="22"
            />
          </filter>
          <radialGradient id="centerGlow" cx="48%" cy="52%" r="42%">
            <stop offset="0%" stopColor="rgba(16,185,129,0.14)" />
            <stop offset="100%" stopColor="rgba(16,185,129,0)" />
          </radialGradient>
        </defs>

        <ellipse cx="470" cy="650" fill="url(#centerGlow)" rx="250" ry="250" />

        {segments.map((segment) => (
          <Facet
            key={segment.id}
            active={segment.id === activeId}
            onActivate={setActiveId}
            segment={segment}
          />
        ))}
      </svg>
    </div>
  );
}
