import { GenesisLogoWhite } from "@/lib/logos";
import { FaInstagram, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";
import { Link } from "wouter";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12">
                <GenesisLogoWhite />
              </div>
              <div>
                <div className="text-xl font-bold">The Genesis Initiative</div>
                <div className="text-gray-400 text-sm">Youth-Led Entrepreneurship</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Empowering the next generation through entrepreneurship education, financial literacy, 
              and inclusive community programs designed by youth, for youth.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/thegenesisinitiative_austin/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-genesis-yellow rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors text-genesis-black">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/people/The-Genesis-Initiative-Austin/61556645001075/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/company/the-genesis-initiative-austin/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                <FaLinkedin />
              </a>
              <a href="mailto:thegenesisinitiative.austin@gmail.com" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/startup-showdown" className="text-gray-400 hover:text-white transition-colors">
                  Start-Up Showdown
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Programs</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Innovation Workshops</Link></li>
              <li><Link href="/startup-showdown" className="text-gray-400 hover:text-white transition-colors">Start-Up Showdown</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Financial Literacy</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Mentorship Program</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 The Genesis Initiative. All rights reserved. | 
            <a href="mailto:thegenesisinitiative.austin@gmail.com" className="hover:text-white transition-colors ml-1">
              thegenesisinitiative.austin@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
