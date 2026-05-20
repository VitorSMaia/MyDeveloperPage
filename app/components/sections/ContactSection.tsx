"use client";

import { FadeInView } from "../animations/FadeInView";
import { MagneticButton } from "../animations/MagneticButton";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="scroll-mt-24 bg-[#1A1A1A] px-6 py-28 text-white lg:px-10"
    >
      <div className="mx-auto max-w-2xl text-center">
        <FadeInView>
          <p className="font-mono text-xs tracking-widest text-[#9CA3AF] uppercase">
            // contato
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Vamos construir algo sólido?
          </h2>
          <p className="mt-4 text-[#D1D5DB]">
            Disponível para projetos, consultoria e parcerias técnicas.
          </p>
        </FadeInView>

        <FadeInView delay={0.15} className="mt-10">
          <MagneticButton
            href="mailto:contato@exemplo.com"
            pulse
            className="rounded-xl bg-white px-8 py-4 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#F3F4F6]"
          >
            ENVIAR MENSAGEM →
          </MagneticButton>
        </FadeInView>
      </div>
    </section>
  );
}
