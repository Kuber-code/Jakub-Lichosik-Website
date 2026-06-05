import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { Projects } from "@/components/sections/Projects";
import { ExtraRoles } from "@/components/sections/ExtraRoles";
import { Languages } from "@/components/sections/Languages";
import { Interests } from "@/components/sections/Interests";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <ExtraRoles />
        <Languages />
        <Interests />
        <Contact />
      </main>
    </>
  );
}
