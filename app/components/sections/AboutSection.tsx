"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeInView } from "../animations/FadeInView";
import { clipReveal } from "@/app/lib/motion";

const paragraphs = [
  "Desenvolvedor full-stack com foco em backends que aguentam tráfego real — não só demos bonitos.",
  "Trabalho com arquitetura em nuvem, APIs resilientes e times que precisam de deploy sem drama.",
  "Fora do código: café forte, documentação clara e pipelines que passam no primeiro push.",
];

export function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-24 px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          className="relative aspect-[4/5] max-w-md overflow-hidden rounded-2xl bg-[#E5E7EB] lg:max-w-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={clipReveal}
        >
          <Image
            src="/perfil.jpg"
            alt="Foto de perfil"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </motion.div>

        <div>
          <FadeInView>
            <p className="font-mono text-xs tracking-widest text-[#6B7280] uppercase">
              // sobre
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Engenharia com propósito
            </h2>
          </FadeInView>

          <div className="mt-8 space-y-5">
            {paragraphs.map((text, i) => (
              <FadeInView key={text} delay={i * 0.1}>
                <p className="text-base leading-7 text-[#4B5563]">{text}</p>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
