import { MapPin, Phone, Mail } from "lucide-react";
import logoUrl from "@/assets/logo.svg";

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
          {/* Branding */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <img
                src={logoUrl}
                alt="Kalika Logo"
                className="h-12 w-auto mr-3"
              />
              <span className="text-2xl font-bold">
                Kalika Model Secondary School
              </span>
            </div>
            <p className="text-school-blue-700 mb-4">
              Nurturing Excellence Through Quality Education Since 1995. Committed to developing future leaders with strong academic foundation and moral values.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/kalika.pokhara.5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-school-blue-600 hover:text-school-blue-900 transition-colors"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
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
                Pokhara-10, Rambazar
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" size={16} />
                061-434836, 434141
              </li>
              <li className="flex items-center">
                <Mail className="mr-2" size={16} />
                kalika977061431141@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <div className="border-t border-school-blue-200 mt-8 pt-8 text-center text-school-blue-600">
          <p>
            &copy; 2025 Kalika Model Secondary School. All Rights Reserved. | Designed with Excellence
          </p>
          <p>
            &copy; Developed by{" "}
            <a href="mailto:subedikiran105@gmail.com">subedikiran105@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}