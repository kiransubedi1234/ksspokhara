import AdmissionPopup from "@/components/AdmissionPopup";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import WhyChoose from "@/components/why-choose";
import PrincipalMessage from "@/components/principal-message";
import Courses from "@/components/courses";
import Gallery from "@/components/gallery";
import NoticeBoard from "@/components/notice-board";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen">
      <AdmissionPopup />
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
