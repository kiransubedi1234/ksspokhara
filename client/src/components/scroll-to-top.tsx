import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 bg-school-blue-600 text-white rounded-full shadow-lg hover:bg-school-blue-700 transition-all duration-300 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      size="icon"
    >
      <ArrowUp size={20} />
    </Button>
  );
}
