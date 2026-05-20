"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/app/lib/motion";

type WordRevealProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function WordReveal({ text, className, delay = 0 }: WordRevealProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={staggerItem}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
