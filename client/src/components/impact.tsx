import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ruhaniImg from "@assets/17_1754163155725.png";
import pranavImg from "@assets/16_1754163155725.png";

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
                      src={ruhaniImg} 
                      alt="Ruhani Shah, Student" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-genesis-navy">Ruhani Shah</div>
                      <div className="text-gray-600 text-sm">Program Participant</div>
                    </div>
                  </div>
                  <div className="flex text-genesis-yellow mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">
                    "The Genesis Initiative gave me the confidence and skills to turn my business ideas into reality. The mentorship and workshops were incredibly valuable for my entrepreneurial journey. I learned how to develop a solid business plan and present my ideas professionally. The networking opportunities connected me with peers who share my passion for innovation and entrepreneurship."
                  </p>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="bg-white p-8 rounded-2xl shadow-lg mx-2">
                  <div className="flex items-center mb-6">
                    <img 
                      src={pranavImg} 
                      alt="Pranav Jaishankar, Student" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-genesis-navy">Pranav Jaishankar</div>
                      <div className="text-gray-600 text-sm">Program Participant</div>
                    </div>
                  </div>
                  <div className="flex text-genesis-yellow mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">
                    "What I appreciated most was how the program connected me with like-minded peers and experienced mentors. The financial literacy workshops were particularly helpful for understanding business fundamentals. The hands-on experience and real-world applications made complex business concepts easy to understand and apply."
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
