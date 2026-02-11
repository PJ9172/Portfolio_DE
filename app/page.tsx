import { Navbar } from "@/app/components/navbar";
import { Hero } from "@/app/components/sections/hero";
import { About } from "@/app/components/sections/about";
import { Skills } from "@/app/components/sections/skills";
import { Experience } from "@/app/components/sections/experience";
import { Projects } from "@/app/components/sections/projects";
import { Contact } from "@/app/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-400 selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <footer className="py-8 bg-zinc-950 border-t border-zinc-900 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Prajwal Jagtap. All rights reserved.</p>
      </footer>
    </main>
  );
}
