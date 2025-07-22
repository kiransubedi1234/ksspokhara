import Navigation from "@/components/Navigation";
import Admissionpopup from "@/components/AdmissionPopup";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import About from "@/components/about";
import Courses from "@/components/courses";
import Gallery from "@/components/gallery";
import PrincipalMessage from "@/components/principal-message";
import Contact from "@/components/contact";
import WhyChoose from "@/components/why-choose";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Admissionpopup />
      <Navigation />
      <Hero />
      <About />
      <WhyChoose />
      <PrincipalMessage />
      <Courses />
      <Gallery />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}