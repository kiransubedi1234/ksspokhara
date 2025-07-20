import Navigation from "@/components/Navigation";
import Admissionpopup from "@/components/AdmissionPopup";
import Footer from "@/components/footer";

// Imported from `src/components.tsx`
import Hero from "@/components/hero";
import About from "@/components/about";
import Courses from "@/components/courses";
import Gallery from "@/components/gallery";
import PrincipalMessage from "@/components/principal-message";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <Admissionpopup />
      <main className="space-y-24 pt-20 bg-white">
        <Hero />
        <About />
        <Courses />
        <Gallery />
        <PrincipalMessage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}