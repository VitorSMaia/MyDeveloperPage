export function HexBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 w-1/2 overflow-hidden opacity-40"
      aria-hidden
    >
      <svg
        className="absolute top-1/2 right-0 h-[140%] w-auto -translate-y-1/2 translate-x-1/4"
        viewBox="0 0 400 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[
          { cx: 280, cy: 120, r: 52 },
          { cx: 340, cy: 220, r: 48 },
          { cx: 300, cy: 340, r: 56 },
          { cx: 360, cy: 440, r: 44 },
          { cx: 250, cy: 480, r: 50 },
          { cx: 320, cy: 560, r: 46 },
          { cx: 200, cy: 280, r: 42 },
          { cx: 380, cy: 320, r: 38 },
        ].map((hex, i) => (
          <polygon
            key={i}
            points={hexPoints(hex.cx, hex.cy, hex.r)}
            stroke="#D1D5DB"
            strokeWidth="1.5"
            fill="none"
          />
        ))}
      </svg>
    </div>
  );
}

function hexPoints(cx: number, cy: number, r: number): string {
  const points: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    points.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return points.join(" ");
}
