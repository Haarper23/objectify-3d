import About from "@/components/About";
import Works from "@/components/Works";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* About Me is the landing section and first screen. */}
      <About />
      <Works />
      <Services />
      <Process />
      <Contact />
    </main>
  );
}
