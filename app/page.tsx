import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import Feeds from "@/components/Feeds";
import Projects from "@/components/Projects";
import Metrics from "@/components/Metrics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* Everything after the hero forms one stacking layer that scrolls up
            over the pinned hero, creating the sticky-reveal overlap. */}
        <div className="relative z-10">
          <About />
          <Services />
          <Tools />
          <Feeds />
          <Projects />
          <Metrics />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
