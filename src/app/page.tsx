import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Timeline } from "@/components/sections/Timeline";
import { Projects } from "@/components/sections/Projects";
import { ExtraRoles } from "@/components/sections/ExtraRoles";
import { Languages } from "@/components/sections/Languages";
import { Interests } from "@/components/sections/Interests";
import { Contact } from "@/components/sections/Contact";
import { fetchPublicRepos } from "@/lib/github";

export default async function Home() {
  const githubRepos = await fetchPublicRepos("Kuber-code");

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <About />
        <Skills />
        <Certifications />
        <Timeline />
        <Projects githubRepos={githubRepos} />
        <ExtraRoles />
        <Languages />
        <Interests />
        <Contact />
      </main>
    </>
  );
}
