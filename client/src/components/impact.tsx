import { Star } from "lucide-react";

export default function Impact() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-genesis-navy mb-6">Impact & Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from the young entrepreneurs whose lives have been transformed through our programs.
          </p>
        </div>
        
        {/* Impact Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-genesis-yellow mb-2">250</div>
            <div className="text-gray-600">Students Reached</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-genesis-blue mb-2">10+</div>
            <div className="text-gray-600">Programs Conducted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-genesis-yellow mb-2">100+</div>
            <div className="text-gray-600">Startup Ideas Pitched</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-genesis-navy mb-2">10+</div>
            <div className="text-gray-600">Sponsors</div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                alt="Sarah M., Student" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-semibold text-genesis-navy">Sarah M.</div>
                <div className="text-gray-600 text-sm">High School Senior</div>
              </div>
            </div>
            <div className="flex text-genesis-yellow mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic">
              "The Genesis Initiative completely changed my perspective on business. I went from having no idea 
              about entrepreneurship to winning second place in the Startup Showdown with my sustainable fashion idea!"
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                alt="Marcus T., Student" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-semibold text-genesis-navy">Marcus T.</div>
                <div className="text-gray-600 text-sm">Program Alumnus</div>
              </div>
            </div>
            <div className="flex text-genesis-yellow mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic">
              "What I loved most was that this program was run by people my age who really understood what we were going through. 
              The financial literacy workshop helped me start my first small business selling custom phone cases."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
