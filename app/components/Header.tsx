"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { MagneticButton } from "./animations/MagneticButton";

const navLinks = [
  { label: "SOBRE", href: "#sobre" },
  { label: "PROJETOS", href: "#projetos" },
  { label: "HABILIDADES", href: "#habilidades" },
  { label: "CONTATO", href: "#contato" },
] as const;

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastY, setLastY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
    const diff = latest - lastY;
    if (latest < 80) {
      setHidden(false);
    } else if (diff > 4) {
      setHidden(true);
    } else if (diff < -4) {
      setHidden(false);
    }
    setLastY(latest);
  });

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#E8EAED] transition-[backdrop-filter,background-color] duration-300 ${
        scrolled ? "bg-[#F8F9FA]/95 backdrop-blur-md" : "bg-[#F8F9FA]/85 backdrop-blur-sm"
      }`}
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <a href="#" className="flex shrink-0 items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded bg-[#1A1A1A] font-mono text-xs font-bold text-white">
            &gt;_
          </span>
          <span className="text-sm font-bold tracking-tight text-[#1A1A1A]">
            PORTFOLIO_V2.0
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-widest text-[#4B5563] transition-colors duration-200 hover:text-[#1A1A1A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <motion.div className="flex items-center gap-4">
<MagneticButton
            href="#contato"
            className="rounded-lg bg-[#1A1A1A] px-4 py-2.5 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-[#333]"
          >
            QUER CONVERSAR? →
          </MagneticButton>
        </motion.div>
      </div>
    </motion.header>
  );
}
