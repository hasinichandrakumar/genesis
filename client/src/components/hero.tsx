import { ArrowRight, ChevronDown } from "lucide-react";
import { GenesisLogoWhite } from "@/lib/logos";
import heroImage from "@assets/3_1754152930494.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${heroImage}')`,
          backgroundPosition: 'center 30%',
          backgroundSize: 'cover',
          transform: 'scale(1.05)'
        }}
      ></div>
      
      {/* Professional dark blue gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-genesis-navy/95 via-genesis-navy/90 to-genesis-blue/90"></div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Genesis Pegasus Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="w-16 h-16">
              <GenesisLogoWhite />
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-loose tracking-wide">
          Guiding Emerging <span className="text-genesis-yellow">Next-Gen</span><br />
          Entrepreneurial Success
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-white max-w-3xl mx-auto leading-relaxed">
          The first fully youth-led nonprofit empowering kids and teens with entrepreneurship and financial literacy through inclusive camps and workshops.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection("about")}
            className="bg-genesis-yellow text-genesis-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-colors inline-flex items-center"
          >
            Learn More <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button 
            onClick={() => scrollToSection("donate")}
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-genesis-navy transition-colors"
          >
            Support Our Mission
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
