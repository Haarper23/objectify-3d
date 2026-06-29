import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWorks from "@/components/FeaturedWorks";
import Gallery from "@/components/Gallery";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Studio from "@/components/Studio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <FeaturedWorks />
      <Gallery />
      <Manifesto />
      <Services />
      <Process />
      <Studio />
      <Contact />
    </main>
  );
}
