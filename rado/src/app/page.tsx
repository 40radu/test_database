
import About from "@/Components/Sections/About/About";
import Contact from "@/Components/Sections/Contact/Contact";
import Dashboard from "@/Components/Sections/Dashboard/Dashboard";
import Project from "@/Components/Sections/Project/Project";
import Skills from "@/Components/Sections/Skills/Skills";
import AnimationFirst from "@/Components/Specifies/AnimationFirst/AnimationFirst";

export default function Home() {

  return (
    <main >
      <AnimationFirst/>
      <Dashboard/>
      <About/>
      <Skills/>
      {/* <Project/> */}
      <Contact/>
    </main>
  );
}
