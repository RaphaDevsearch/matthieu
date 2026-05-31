import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Languages from "@/components/languages";
import Interests from "@/components/interests";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Languages />
        <Interests />
      </main>

      <Footer />
    </>
  );
}