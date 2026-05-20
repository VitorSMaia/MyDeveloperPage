"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { easeOut } from "@/app/lib/motion";
import { WordReveal } from "./animations/WordReveal";

const bioText =
  "Não entrego código. Entrego software que funciona de verdade — escalável, seguro e sem surpresas no deploy.";

export function HeroTerminal() {
  return (
    <motion.div
      className="w-full max-w-2xl rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      <div className="flex items-center gap-3 rounded-t-xl border-b border-[#E5E7EB] bg-[#F3F4F6] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-3 rounded-full bg-[#FF5F57]" />
          <span className="size-3 rounded-full bg-[#FEBC2E]" />
          <span className="size-3 rounded-full bg-[#28C840]" />
        </div>
        <p className="flex-1 text-center font-mono text-[11px] text-[#9CA3AF]">
          SESSION_MAIN: DASH --ZSH
        </p>
        <div className="w-[52px]" aria-hidden />
      </div>

      <div className="space-y-5 px-6 py-8 font-mono text-sm leading-relaxed text-[#374151] sm:px-8 sm:py-10">
        <motion.p
          className="min-h-[1.5em] text-[#6B7280]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <span className="text-[#10B981]">visitor</span>
          <span>@</span>
          <span className="text-[#3B82F6]">dv_portfolio</span>
          <span>:~$ </span>
          <TypeAnimation
            sequence={["./init_introduction.sh", 800, ""]}
            wrapper="span"
            speed={50}
            className="text-[#1A1A1A]"
            repeat={0}
            cursor
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.55, ease: easeOut }}
        >
          <h1 className="text-2xl font-bold tracking-tight text-[#1A1A1A] sm:text-3xl">
            <span className="text-[#2563EB]">&gt; </span>
            INICIANDO SISTEMA...
          </h1>
          <motion.p
            className="mt-2 text-xs font-medium text-[#6B7280]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            [Status: ONLINE]
          </motion.p>
        </motion.div>

        <motion.p
          className="text-[13px] leading-7 text-[#4B5563] sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          <WordReveal text={bioText} delay={0.65} />
          <span className="mt-3 block text-[#1A1A1A]">
            Stack principal: Laravel · Node.js · Cloud Architecture
          </span>
          <span className="mt-2 block">
            Obsessão atual: sistemas multi-tenant e pipelines CI/CD que não
            quebram às 23h de sexta.
          </span>
        </motion.p>
      </div>
    </motion.div>
  );
}
