import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
        
        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-genesis-navy mb-8">Student Reviews</h3>
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="bg-white p-8 rounded-2xl shadow-lg mx-2">
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
              </CarouselItem>
              
              <CarouselItem>
                <div className="bg-white p-8 rounded-2xl shadow-lg mx-2">
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
              </CarouselItem>
              
              <CarouselItem>
                <div className="bg-white p-8 rounded-2xl shadow-lg mx-2">
                  <div className="flex items-center mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                      alt="Emma L., Student" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-genesis-navy">Emma L.</div>
                      <div className="text-gray-600 text-sm">Camp Participant</div>
                    </div>
                  </div>
                  <div className="flex text-genesis-yellow mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">
                    "The mentorship program connected me with an amazing entrepreneur who helped me refine my tech startup idea. 
                    I learned practical skills like financial planning and marketing that I use every day in my business."
                  </p>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="bg-white p-8 rounded-2xl shadow-lg mx-2">
                  <div className="flex items-center mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                      alt="Alex R., Student" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-genesis-navy">Alex R.</div>
                      <div className="text-gray-600 text-sm">Workshop Graduate</div>
                    </div>
                  </div>
                  <div className="flex text-genesis-yellow mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">
                    "Before Genesis Initiative, I was shy about presenting ideas. The pitch training and supportive environment 
                    helped me gain confidence. Now I'm leading my school's entrepreneurship club and mentoring younger students!"
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
