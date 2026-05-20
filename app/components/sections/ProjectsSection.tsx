"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { getProjects } from "@/app/lib/projects";
import { staggerContainer, staggerItem } from "@/app/lib/motion";
import { FadeInView } from "../animations/FadeInView";

const projects = getProjects();

export function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-60px",
  });

  return (
    <section id="projetos" className="scroll-mt-24 bg-white px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <FadeInView className="mb-14 text-center">
          <p className="font-mono text-xs tracking-widest text-[#6B7280] uppercase">
            // projetos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A]">
            Software em produção
          </h2>
        </FadeInView>

        <motion.div
          ref={ref}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={staggerItem}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
            >
              <div className="relative h-44 overflow-hidden bg-[#F8F9FA]">
                <Image
                  src={project.image_url}
                  alt={project.title}
                  fill
                  className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-semibold text-[#1A1A1A]">{project.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#4B5563]">
                  {project.description_pt}
                </p>

                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.techList.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-[#F3F4F6] px-2 py-0.5 font-mono text-[10px] text-[#4B5563]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {(project.demo_url || project.github_url) && (
                  <div className="mt-4 flex gap-3 border-t border-[#E5E7EB] pt-4">
                    {project.demo_url && (
                      <a
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#2563EB] hover:underline"
                      >
                        Demo →
                      </a>
                    )}
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#2563EB] hover:underline"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
