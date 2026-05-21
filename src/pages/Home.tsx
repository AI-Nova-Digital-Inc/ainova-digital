import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Industries from "@/sections/Industries";
import Portfolio from "@/sections/Portfolio";
import Process from "@/sections/Process";
import WhyUs from "@/sections/WhyUs";
import Pricing from "@/sections/Pricing";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0b1220" }}>
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <Portfolio />
        <Process />
        <WhyUs />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
