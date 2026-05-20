"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { easeOut } from "@/app/lib/motion";

type FadeInViewProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function FadeInView({
  children,
  className,
  delay = 0,
  y = 28,
}: FadeInViewProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
    rootMargin: "-48px",
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}
