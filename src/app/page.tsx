import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafbfc] relative selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <TrustSection />
      <Projects />
      <Skills />
      <Services />
      <Process />
      <ContactSection />
      <Footer />
    </main>
  );
}
