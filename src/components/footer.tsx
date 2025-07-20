import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.svg"; // Replace with your actual logo path

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-school-blue-50 text-school-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* School Branding */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Kalika Model Secondary School Logo"
                className="h-12 w-auto mr-3"
              />
              <span className="text-2xl font-bold leading-tight">
                Kalika Model Secondary School
              </span>
            </div>
            <p className="text-school-blue-700 mb-4">
              Nurturing Excellence Through Quality Education Since 1995. We are committed to developing future leaders with a strong academic foundation and moral values.
            </p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.facebook.com/kalika.pokhara.5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-school-blue-600 hover:text-school-blue-900 transition"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              {/* Add other social icons here if needed */}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-school-blue-700">
              {["about", "courses", "gallery", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="hover:text-school-blue-900 transition-colors"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-school-blue-700">
              <li className="flex items-center">
                <MapPin className="mr-2" size={16} />
                <span>Pokhara-10, Rambazar</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" size={16} />
                <span>061-434836, 434141</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2" size={16} />
                <span>kalika977061431141@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-school-blue-200 mt-8 pt-6 text-center text-school-blue-600 text-sm">
          <p>
            &copy; 2025 Kalika Model Secondary School. All Rights Reserved. Designed with Excellence.
          </p>
          <p>
            Developed by <a href="mailto:subedikiran105@gmail.com" className="underline hover:text-school-blue-900">subedikiran105@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}