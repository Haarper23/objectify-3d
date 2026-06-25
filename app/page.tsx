import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWorks from "@/components/FeaturedWorks";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Process from "@/components/Process";
import TrustSection from "@/components/TrustSection";
import PrinterSection from "@/components/PrinterSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <FeaturedWorks />
      <Gallery />
      <Services />
      <Process />
      <TrustSection />
      <PrinterSection />
      <Contact />
      <Footer />
    </main>
  );
}
