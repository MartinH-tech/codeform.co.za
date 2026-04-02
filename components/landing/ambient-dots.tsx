"use client";

type Drop = {
  color: string;
  delay: string;
  duration: string;
  left: string;
  size: number;
  top: string;
};

const drops: Drop[] = [
  { left: "14%", top: "8%", size: 14, color: "#b8f10d", delay: "0.6s", duration: "5.2s" },
  { left: "38%", top: "10%", size: 12, color: "#153826", delay: "1.8s", duration: "6.1s" },
  { left: "62%", top: "7%", size: 15, color: "#c9f320", delay: "2.9s", duration: "5.6s" },
  { left: "86%", top: "11%", size: 13, color: "#163826", delay: "4.3s", duration: "6.4s" },
  { left: "8%", top: "14%", size: 18, color: "#d7ff28", delay: "0s", duration: "5.8s" },
  { left: "18%", top: "66%", size: 24, color: "#153826", delay: "1.3s", duration: "7s" },
  { left: "31%", top: "34%", size: 14, color: "#c9f320", delay: "2.2s", duration: "5.4s" },
  { left: "42%", top: "80%", size: 20, color: "#163826", delay: "0.9s", duration: "6.7s" },
  { left: "56%", top: "18%", size: 16, color: "#b8f10d", delay: "3.4s", duration: "6s" },
  { left: "67%", top: "54%", size: 26, color: "#0b1d14", delay: "1.8s", duration: "7.6s" },
  { left: "79%", top: "28%", size: 18, color: "#d7ff28", delay: "4.1s", duration: "6.3s" },
  { left: "89%", top: "72%", size: 22, color: "#c9f320", delay: "2.6s", duration: "7.2s" },
];

export function AmbientDots() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {drops.map((drop, index) => (
        <div
          key={`${drop.left}-${drop.top}-${index}`}
          className="absolute"
          style={{ left: drop.left, top: drop.top }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: `${drop.size}px`,
              height: `${drop.size}px`,
              marginLeft: `${drop.size / -2}px`,
              marginTop: `${drop.size / -2}px`,
              backgroundColor: drop.color,
              opacity: 0,
              animation: `dropDot ${drop.duration} ease-in-out ${drop.delay} infinite`,
              filter: "blur(0.2px)",
            }}
          />
          <div
            className="absolute rounded-full border"
            style={{
              width: `${drop.size * 2.6}px`,
              height: `${drop.size * 2.6}px`,
              marginLeft: `${drop.size * -1.3}px`,
              marginTop: `${drop.size * -1.3}px`,
              borderColor: `${drop.color}88`,
              borderWidth: "2px",
              opacity: 0,
              animation: `dropRing ${drop.duration} ease-out ${drop.delay} infinite`,
            }}
          />
          <div
            className="absolute rounded-full border"
            style={{
              width: `${drop.size * 4.2}px`,
              height: `${drop.size * 4.2}px`,
              marginLeft: `${drop.size * -2.1}px`,
              marginTop: `${drop.size * -2.1}px`,
              borderColor: `${drop.color}55`,
              borderWidth: "1px",
              opacity: 0,
              animation: `dropRingSoft ${drop.duration} ease-out ${drop.delay} infinite`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
