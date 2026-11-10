import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Venture } from "@/components/sections/Venture";
import { BuildingNow } from "@/components/sections/BuildingNow";
import { LeadershipInitiatives } from "@/components/sections/LeadershipInitiatives";
import { Skills } from "@/components/sections/Skills";
import { Vision } from "@/components/sections/Vision";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Journey />
      <Venture />
      <BuildingNow />
      <LeadershipInitiatives />
      <Skills />
      <Vision />
      <Contact />
    </main>
  );
}
