"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerContainer, staggerItem } from "@/app/lib/motion";
import { FadeInView } from "../animations/FadeInView";
import type { IconType } from "react-icons";
import {
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiReact,
  SiLivewire,
  SiAlpinedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiVuedotjs,
  SiFlutter,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiTerraform,
  SiGithubactions,
} from "react-icons/si";
import {
  FaAws,
  FaServer,
  FaLink,
  FaUsers,
  FaShieldHalved,
  FaCloud,
} from "react-icons/fa6";

type StackItem = { label: string; Icon: IconType; color: string };

const stackCategories: { title: string; items: StackItem[] }[] = [
  {
    title: "Backend",
    items: [
      { label: "PHP", Icon: SiPhp, color: "#8892BF" },
      { label: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
      { label: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { label: "Microserviços", Icon: FaServer, color: "#9CA3AF" },
      { label: "REST APIs", Icon: FaLink, color: "#9CA3AF" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { label: "React", Icon: SiReact, color: "#61DAFB" },
      { label: "Vue", Icon: SiVuedotjs, color: "#4FC08D" },
      { label: "Livewire", Icon: SiLivewire, color: "#FB70A9" },
      { label: "Alpine.js", Icon: SiAlpinedotjs, color: "#77C1D2" },
      { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { label: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Mobile",
    items: [{ label: "Flutter", Icon: SiFlutter, color: "#02569B" }],
  },
  {
    title: "Banco de Dados",
    items: [
      { label: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    title: "Ferramentas",
    items: [
      { label: "Git", Icon: SiGit, color: "#F05032" },
      { label: "GitHub", Icon: SiGithub, color: "#181717" },
      { label: "Docker", Icon: SiDocker, color: "#2496ED" },
      { label: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
      { label: "Multi-tenancy", Icon: FaUsers, color: "#9CA3AF" },
      { label: "Spatie", Icon: FaShieldHalved, color: "#9CA3AF" },
    ],
  },
  {
    title: "Cloud & Infraestrutura",
    items: [
      { label: "AWS", Icon: FaAws, color: "#FF9900" },
      { label: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
      { label: "Docker", Icon: SiDocker, color: "#2496ED" },
      { label: "LocalStack", Icon: FaCloud, color: "#9CA3AF" },
    ],
  },
];

export function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-60px",
  });

  return (
    <section id="habilidades" className="scroll-mt-24 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <FadeInView className="mb-14 text-center">
          <p className="font-mono text-xs tracking-widest text-[#6B7280] uppercase">
            // habilidades
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A]">
            Stack & ferramentas
          </h2>
        </FadeInView>

        <motion.div
          ref={ref}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stackCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={staggerItem}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-[#E5E7EB] bg-white p-5 transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <h3 className="mb-3 font-semibold text-[#1A1A1A]">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map(({ label, Icon, color }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 rounded-md bg-[#F3F4F6] px-2.5 py-1.5 text-xs font-medium text-[#374151]"
                  >
                    <Icon size={14} color={color} aria-hidden />
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
