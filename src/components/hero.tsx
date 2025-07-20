import { useState, useEffect, useRef } from "react";
import { GraduationCap, MapPin, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

import imgA from "@/assets/505228401_3050423228451309_7048848431356142769_n_1752255741622.jpg";
import imgB from "@/assets/16.jpg";
import imgC from "@/assets/15.jpg";
import imgD from "@/assets/1.jpg";
import imgE from "@/assets/3.jpg";

const images = [imgA, imgB, imgC, imgD, imgE];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    const section = heroRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={heroRef} className="relative text-white overflow-hidden h-[85vh] sm:h-[90vh]">
      {/* Slideshow */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-school-blue-900/50 via-school-blue-800/40 to-school-blue-700/50" />
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 40%)`,
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white bg-opacity-20 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white bg-opacity-30 rounded-full animate-ping" />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white bg-opacity-25 rounded-full animate-pulse" />
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white bg-opacity-20 rounded-full animate-ping" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
        <div
          className="mb-8"
          onMouseEnter={() => setHoveredElement("icon")}
          onMouseLeave={() => setHoveredElement(null)}
        >
          <GraduationCap
            className="text-6xl text-school-blue-200 mb-4 mx-auto transition-all duration-300"
            size={96}
            style={{
              transform:
                hoveredElement === "icon" ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0)",
            }}
          />
        </div>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-300"
          onMouseEnter={() => setHoveredElement("title")}
          onMouseLeave={() => setHoveredElement(null)}
          style={{
            transform:
              hoveredElement === "title" ? "translateY(-10px) scale(1.05)" : "translateY(0) scale(1)",
            textShadow:
              hoveredElement === "title"
                ? "0px 5px 15px rgba(0,0,0,0.5)"
                : "0px 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          Kalika Model Secondary School
        </h1>
        <p
          className="text-xl md:text-2xl mb-4 text-school-blue-100 transition-all duration-300"
          onMouseEnter={() => setHoveredElement("location")}
          onMouseLeave={() => setHoveredElement(null)}
          style={{
            transform:
              hoveredElement === "location" ? "translateY(-5px) scale(1.02)" : "translateY(0) scale(1)",
            opacity: hoveredElement === "location" ? 1 : 0.9,
          }}
        >
          <MapPin className="inline mr-2" size={24} />
          Pokhara-10, Ram Bazar, Nepal
        </p>
        <p
          className="text-lg md:text-xl mb-8 text-school-blue-200 max-w-3xl mx-auto transition-all duration-300"
          onMouseEnter={() => setHoveredElement("tagline")}
          onMouseLeave={() => setHoveredElement(null)}
          style={{
            transform:
              hoveredElement === "tagline" ? "translateY(-8px) scale(1.03)" : "translateY(0) scale(1)",
            opacity: hoveredElement === "tagline" ? 1 : 0.9,
          }}
        >
          Nurturing Excellence Through Quality Education Since 1995
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("about")}
            className="px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-white text-[#0079f2] bg-white hover:bg-transparent hover:text-white"
          >
            <Info className="mr-2" size={20} />
            Learn More
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-white text-[#0079f2] bg-white hover:bg-transparent hover:text-white"
          >
            <Phone className="mr-2" size={20} />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}