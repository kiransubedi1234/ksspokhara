import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.svg"; // Vite-compatible import

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Why Choose Us", id: "why-choose" },
    {
      label: "Courses",
      id: "courses",
      dropdown: [
        { label: "Science", id: "science" },
        { label: "Management", id: "management" },
        { label: "Hotel Management", id: "hm" },
        { label: "Humanities", id: "humanities" },
        { label: "Education", id: "Education" },
      ]
    },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Title */}
          <div className="flex items-center">
            <img src={logo} alt="Kalika School Logo" className="h-10 w-auto mr-3" />
            <span className="text-xl font-bold text-school-blue-900">
              Kalika Model Secondary School
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className="flex items-center text-slate-600 hover:text-school-blue-600 transition-colors"
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-40">
                      {item.dropdown.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => scrollToSection(sub.id)}
                          className="block w-full text-left px-4 py-2 text-slate-600 hover:text-school-blue-600 hover:bg-school-blue-50 transition-colors"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-600 hover:text-school-blue-600 transition-colors"
                >
                  {item.label}
                </button>
              )
            )}
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
                  {navItems.map((item) =>
                    item.dropdown ? (
                      <div key={item.id} className="space-y-2">
                        <p className="text-slate-600 font-semibold">{item.label}</p>
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => scrollToSection(sub.id)}
                            className="text-left text-slate-600 hover:text-school-blue-600 transition-colors pl-4"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left text-slate-600 hover:text-school-blue-600 transition-colors py-2"
                      >
                        {item.label}
                      </button>
                    )
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}