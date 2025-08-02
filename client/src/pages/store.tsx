import { useEffect } from "react";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Store() {
  useEffect(() => {
    // Load Ecwid script if not already loaded
    const existingScript = document.getElementById('ecwid-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'ecwid-script';
      script.src = 'https://app.ecwid.com/script.js?98503363&data_platform=code&data_date=2025-08-02';
      script.charset = 'utf-8';
      script.setAttribute('data-cfasync', 'false');
      document.head.appendChild(script);

      script.onload = () => {
        // Initialize Ecwid after script loads
        if (window.xProductBrowser) {
          window.xProductBrowser(
            "categoriesPerRow=3",
            "views=grid(20,3) list(60) table(60)",
            "categoryView=grid",
            "searchView=list",
            "id=my-store-98503363"
          );
        }
      };
    } else {
      // Script already loaded, just initialize
      if (window.xProductBrowser) {
        window.xProductBrowser(
          "categoriesPerRow=3",
          "views=grid(20,3) list(60) table(60)",
          "categoryView=grid",
          "searchView=list",
          "id=my-store-98503363"
        );
      }
    }

    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-genesis-navy to-genesis-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/" className="flex items-center text-white hover:text-gray-200 transition-colors mr-6">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <ShoppingBag className="h-12 w-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Genesis Store</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Support The Genesis Initiative by purchasing branded merchandise and educational materials. 
              Every purchase helps fund youth entrepreneurship programs.
            </p>
          </div>
        </div>
      </div>

      {/* Store Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-genesis-navy mb-4">Browse Our Products</h2>
            <p className="text-gray-600">
              Find Genesis Initiative merchandise, educational resources, and materials to support young entrepreneurs.
            </p>
          </div>

          {/* Ecwid Store Integration */}
          <div className="min-h-[600px]">
            <div id="my-store-98503363"></div>
          </div>

          {/* Support Message */}
          <div className="mt-12 bg-gradient-to-r from-genesis-blue/10 to-blue-100/30 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-genesis-navy mb-4">Thank You for Your Support!</h3>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Your purchases directly support our mission to empower youth through entrepreneurship education. 
              Every item you buy helps us provide free workshops, mentorship programs, and resources to young entrepreneurs in our community.
            </p>
            <div className="mt-6">
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-genesis-yellow text-genesis-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
              >
                Questions? Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    xProductBrowser: (...args: string[]) => void;
  }
}