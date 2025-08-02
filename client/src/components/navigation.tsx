import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GenesisLogoNavy } from "@/lib/logos";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm border-b border-gray-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10">
              <GenesisLogoNavy />
            </div>
            <span className="text-xl font-bold text-genesis-navy">The Genesis Initiative</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-genesis-navy transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-genesis-navy transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("team")}
              className="text-gray-700 hover:text-genesis-navy transition-colors font-medium"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-genesis-navy transition-colors font-medium"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection("donate")}
              className="bg-genesis-yellow text-genesis-black px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors font-medium"
            >
              Donate
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-genesis-navy"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-genesis-navy transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-genesis-navy transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("team")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-genesis-navy transition-colors font-medium"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-genesis-navy transition-colors font-medium"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection("donate")}
                className="block mx-3 mt-4 w-auto bg-genesis-yellow text-genesis-black px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors font-medium text-center"
              >
                Donate
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
