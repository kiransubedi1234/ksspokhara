import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-school-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <GraduationCap className="text-3xl text-school-blue-300 mr-3" size={32} />
              <span className="text-2xl font-bold">Kalika Secondary School</span>
            </div>
            <p className="text-school-blue-200 mb-4">
              Nurturing Excellence Through Quality Education Since 1995. 
              Committed to developing future leaders with strong academic foundation and moral values.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-school-blue-300 hover:text-white transition-colors">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-school-blue-300 hover:text-white transition-colors">
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a href="#" className="text-school-blue-300 hover:text-white transition-colors">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-school-blue-200">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('courses')}
                  className="hover:text-white transition-colors"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-school-blue-200">
              <li className="flex items-center">
                <MapPin className="mr-2" size={16} />
                Pokhara-10, Ram Bazar
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" size={16} />
                +977-61-525-XXX
              </li>
              <li className="flex items-center">
                <Mail className="mr-2" size={16} />
                info@kalikasecondary.edu.np
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-school-blue-800 mt-8 pt-8 text-center text-school-blue-200">
          <p>&copy; 2025 Kalika Secondary School. All Rights Reserved. | Designed with Excellence</p>
        </div>
      </div>
    </footer>
  );
}
