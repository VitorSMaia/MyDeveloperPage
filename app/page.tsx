import { Header } from "./components/Header";
import { HeroTerminal } from "./components/HeroTerminal";
import { HexBackground } from "./components/HexBackground";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SkillsSection } from "./components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F8F9FA] font-sans text-[#1A1A1A]">
      <HexBackground />
      <Header />

      <main>
        <section
          id="hero"
          className="relative flex min-h-screen items-center justify-center px-6 pt-16"
        >
          <HeroTerminal />
        </section>

        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
