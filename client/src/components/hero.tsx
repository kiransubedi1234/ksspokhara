import { useState, useEffect, useRef } from "react";
import { School, MapPin, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const heroSection = heroRef.current;
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      return () => heroSection.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="relative text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/attached_assets/505228401_3050423228451309_7048848431356142769_n_1752255741622.jpg)'
        }}
      ></div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-school-blue-900/90 via-school-blue-800/85 to-school-blue-700/80"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      {/* Mouse following effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.1) 0%, transparent 40%)`
        }}
      ></div>
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white bg-opacity-30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white bg-opacity-25 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white bg-opacity-20 rounded-full animate-ping"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-[#0079f2]">
        <div className="text-center">
          <div 
            className="mb-8"
            onMouseEnter={() => setHoveredElement('icon')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <School 
              className="text-6xl text-school-blue-200 mb-4 mx-auto transition-all duration-300" 
              size={96}
              style={{
                transform: hoveredElement === 'icon' 
                  ? `scale(1.1) rotate(5deg)` 
                  : 'scale(1) rotate(0deg)'
              }}
            />
          </div>
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-300 text-[#0079f2]"
            onMouseEnter={() => setHoveredElement('title')}
            onMouseLeave={() => setHoveredElement(null)}
            style={{
              transform: hoveredElement === 'title' 
                ? 'translateY(-10px) scale(1.05)' 
                : 'translateY(0px) scale(1)',
              textShadow: hoveredElement === 'title' 
                ? '0px 5px 15px rgba(0,0,0,0.5)' 
                : '0px 2px 5px rgba(0,0,0,0.2)'
            }}
          >
            Kalika Secondary School
          </h1>
          <p 
            className="text-xl md:text-2xl mb-4 text-school-blue-100 transition-all duration-300"
            onMouseEnter={() => setHoveredElement('location')}
            onMouseLeave={() => setHoveredElement(null)}
            style={{
              transform: hoveredElement === 'location' 
                ? 'translateY(-5px) scale(1.02)' 
                : 'translateY(0px) scale(1)',
              opacity: hoveredElement === 'location' ? 1 : 0.9
            }}
          >
            <MapPin className="inline mr-2" size={24} />
            Pokhara-10, Ram Bazar, Nepal
          </p>
          <p 
            className="text-lg md:text-xl mb-8 text-school-blue-200 max-w-3xl mx-auto transition-all duration-300"
            onMouseEnter={() => setHoveredElement('tagline')}
            onMouseLeave={() => setHoveredElement(null)}
            style={{
              transform: hoveredElement === 'tagline' 
                ? 'translateY(-8px) scale(1.03)' 
                : 'translateY(0px) scale(1)',
              opacity: hoveredElement === 'tagline' ? 1 : 0.9
            }}
          >
            Nurturing Excellence Through Quality Education Since 1995
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('about')}
              className="bg-white text-school-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-school-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Info className="mr-2" size={20} />
              Learn More
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-school-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-school-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="mr-2" size={20} />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
