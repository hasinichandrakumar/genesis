import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { GenesisLogoNavy } from "@/lib/logos";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

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

  const handleStartupShowdownClick = (e: React.MouseEvent) => {
    if (location === "/startup-showdown") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10">
              <GenesisLogoNavy />
            </div>
            <span className="text-xl font-bold text-genesis-navy">The Genesis Initiative</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/"
              className={`transition-colors font-medium ${
                isActive("/") ? "text-genesis-navy" : "text-gray-700 hover:text-genesis-navy"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about"
              className={`transition-colors font-medium ${
                isActive("/about") ? "text-genesis-navy" : "text-gray-700 hover:text-genesis-navy"
              }`}
            >
              About
            </Link>
            <Link 
              href="/team"
              className={`transition-colors font-medium ${
                isActive("/team") ? "text-genesis-navy" : "text-gray-700 hover:text-genesis-navy"
              }`}
            >
              Team
            </Link>
            <Link 
              href="/startup-showdown"
              onClick={handleStartupShowdownClick}
              className={`transition-colors font-medium ${
                isActive("/startup-showdown") ? "text-genesis-navy" : "text-gray-700 hover:text-genesis-navy"
              }`}
            >
              Start-Up Showdown
            </Link>
            <Link 
              href="/contact"
              className={`transition-colors font-medium ${
                isActive("/contact") ? "text-genesis-navy" : "text-gray-700 hover:text-genesis-navy"
              }`}
            >
              Contact
            </Link>
            <Link 
              href="/#donate"
              className="bg-genesis-yellow text-genesis-black px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors font-medium"
            >
              Donate
            </Link>
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
              <Link 
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 transition-colors font-medium ${
                  isActive("/") ? "text-genesis-navy" : "text-gray-700 hover:text-genesis-navy"
                }`}
              >
                Home
              </Link>
              <Link 
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 transition-colors font-medium ${
                  isActive("/about") ? "text-genesis-navy" : "text-gray-700 hover:text-genesis-navy"
                }`}
              >
                About
              </Link>
              <Link 
                href="/team"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 transition-colors font-medium ${
                  isActive("/team") ? "text-genesis-navy" : "text-gray-700 hover:text-genesis-navy"
                }`}
              >
                Team
              </Link>
              <Link 
                href="/startup-showdown"
                onClick={handleStartupShowdownClick}
                className={`block px-3 py-2 transition-colors font-medium ${
                  isActive("/startup-showdown") ? "text-genesis-navy" : "text-gray-700 hover:text-genesis-navy"
                }`}
              >
                Start-Up Showdown
              </Link>
              <Link 
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 transition-colors font-medium ${
                  isActive("/contact") ? "text-genesis-navy" : "text-gray-700 hover:text-genesis-navy"
                }`}
              >
                Contact
              </Link>
              <Link 
                href="/#donate"
                onClick={() => setIsMenuOpen(false)}
                className="block mx-3 mt-4 w-auto bg-genesis-yellow text-genesis-black px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors font-medium text-center"
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
