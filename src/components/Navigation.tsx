import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.svg";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setShowCoursesDropdown(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Why Choose Us", id: "why-choose" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ];

  const courseList = [
    "Science",
    "Hotel Management",
    "Management",
    "Education",
    "Humanities",
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Branding */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Kalika Model Secondary School Logo"
              className="h-10 w-auto mr-3"
            />
            <span className="text-xl font-bold text-school-blue-900">
              Kalika Model Secondary School
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-600 hover:text-school-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}

            {/* Courses Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setShowCoursesDropdown(true)}
              onMouseLeave={() => setShowCoursesDropdown(false)}
            >
              <button
                onClick={() => scrollToSection("courses")}
                className="text-slate-600 hover:text-school-blue-600 transition-colors"
              >
                Courses ▾
              </button>
              <div
                className={`absolute top-full left-0 mt-2 bg-white border rounded shadow-lg w-48 z-50 ${
                  showCoursesDropdown ? "block" : "hidden"
                }`}
              >
                {courseList.map((course) => (
                  <div
                    key={course}
                    onClick={() => scrollToSection("courses")}
                    className="px-4 py-2 text-sm text-slate-700 hover:bg-school-blue-50 hover:text-school-blue-900 cursor-pointer"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-slate-600 hover:text-school-blue-600 transition-colors py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                  {/* Mobile Courses dropdown */}
                  <div className="mt-4">
                    <span className="text-school-blue-800 font-semibold mb-2 block">
                      Courses
                    </span>
                    <div className="space-y-2">
                      {courseList.map((course) => (
                        <button
                          key={course}
                          onClick={() => scrollToSection("courses")}
                          className="text-left text-slate-600 hover:text-school-blue-600 transition-colors block"
                        >
                          {course}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}