import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import Tools from "@/components/Tools";
import Feeds from "@/components/Feeds";
import Projects from "@/components/Projects";
import Metrics from "@/components/Metrics";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Scroll anchor for the logo/"back to top". Kept above the sticky
            hero because a sticky element is always pinned to the viewport top,
            so anchoring to it wouldn't scroll the page back up. */}
        <div id="top" aria-hidden />
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
          <CallToAction />
        </div>
      </main>
      <Footer />
    </>
  );
}
