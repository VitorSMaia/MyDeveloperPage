"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef } from "react";

type MagneticButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  pulse?: boolean;
  onClick?: () => void;
};

export function MagneticButton({
  children,
  href,
  className = "",
  pulse = false,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const transform = useMotionTemplate`translate(${x}px, ${y}px)`;

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.18);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const shared = {
    ref,
    "data-cursor": "magnetic" as const,
    style: { transform },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    whileTap: { scale: 0.97 },
    className: `inline-flex items-center justify-center ${className}`,
  };

  const pulseAnim = pulse
    ? {
        animate: { scale: [1, 1.03, 1] },
        transition: {
          scale: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        },
      }
    : {};

  if (href) {
    return (
      <motion.a href={href} {...shared} {...pulseAnim}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} {...shared} {...pulseAnim}>
      {children}
    </motion.button>
  );
}
