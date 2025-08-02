import { Trophy, Clock, Users, Award, Calendar, MapPin, DollarSign, Star, Target, Lightbulb } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import division1WinnerImg from "@assets/7_1754162715001.png";
import division2WinnerImg from "@assets/8_1754162715001.png";

export default function StartupShowdownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-genesis-yellow rounded-full flex items-center justify-center">
                <Trophy className="h-10 w-10 text-genesis-black" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 tracking-tight text-black">Start-Up Showdown</h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              The ultimate entrepreneurial competition where young innovators pitch their groundbreaking ideas, 
              compete for prizes, and gain invaluable experience in the world of business.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-genesis-navy mb-4">Experience Start-Up Showdown</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch highlights from previous events and see the innovation, energy, and entrepreneurial spirit that defines our competition.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-genesis-navy/5 to-blue-100/30 rounded-2xl p-8">
            <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.youtube.com/embed/XTUIaSqbJBQ"
                title="The Genesis Initiative - Start-Up Showdown"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                See how young entrepreneurs showcase their innovative ideas and compete for life-changing opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-genesis-navy mb-6">What is Start-Up Showdown?</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Start-Up Showdown is Genesis Initiative's flagship entrepreneurial competition that brings together 
                young innovators from across the region to showcase their business ideas, compete for substantial prizes, 
                and connect with industry mentors and investors.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                This high-energy event combines the excitement of competition with valuable learning opportunities, 
                creating an environment where the next generation of entrepreneurs can thrive and make their mark.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-genesis-orange mr-3" />
                  <span className="font-semibold text-genesis-navy">100+ Participants</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-genesis-orange mr-3" />
                  <span className="font-semibold text-genesis-navy">Recognition & Awards</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-genesis-orange mr-3" />
                  <span className="font-semibold text-genesis-navy">Full Day Event</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-genesis-orange mr-3" />
                  <span className="font-semibold text-genesis-navy">Expert Judges</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-genesis-blue/10 to-blue-100/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-genesis-navy mb-6">Event Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Star className="h-5 w-5 text-genesis-yellow mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-genesis-navy">Pitch Competition</h4>
                    <p className="text-gray-600 text-sm">Present your startup idea to a panel of industry experts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-5 w-5 text-genesis-yellow mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-genesis-navy">Networking Opportunities</h4>
                    <p className="text-gray-600 text-sm">Connect with fellow entrepreneurs and industry leaders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Format */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-genesis-navy mb-4">Competition Format</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured 3-step process designed to develop and showcase entrepreneurial ideas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-genesis-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-genesis-navy mb-3">Brainstorming</h3>
              <p className="text-gray-600">
                Develop innovative business ideas, identify target markets, and refine your concept through creative ideation sessions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-genesis-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-genesis-navy mb-3">Creating a Presentation</h3>
              <p className="text-gray-600">
                Build compelling presentations that showcase your business model, market opportunity, and implementation strategy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-genesis-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-genesis-black font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-genesis-navy mb-3">Pitching</h3>
              <p className="text-gray-600">
                Present your startup idea to a panel of expert judges and compete for recognition and awards.
              </p>
            </div>
          </div>
        </div>
      </section>







      {/* Past Winners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-genesis-navy mb-4">Past Winners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating the innovative young entrepreneurs who have excelled in our competition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-br from-genesis-navy/5 to-blue-100/30 rounded-2xl p-8 mb-6">
                <img 
                  src={division1WinnerImg} 
                  alt="Division 1 Winners - Start-Up Showdown Competition"
                  className="w-48 h-48 mx-auto rounded-lg mb-4 object-cover shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-genesis-navy mb-2">Division 1 Winner</h3>
              <p className="text-genesis-blue font-semibold mb-2">Grades 8-9</p>
              <p className="text-gray-600">
                Outstanding innovation and entrepreneurial excellence in the upper division
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-genesis-navy/5 to-blue-100/30 rounded-2xl p-8 mb-6">
                <img 
                  src={division2WinnerImg} 
                  alt="Division 2 Winners - Start-Up Showdown Competition"
                  className="w-48 h-48 mx-auto rounded-lg mb-4 object-cover shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-genesis-navy mb-2">Division 2 Winner</h3>
              <p className="text-genesis-blue font-semibold mb-2">Grades 6-7</p>
              <p className="text-gray-600">
                Remarkable creativity and business acumen in the younger division
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Event */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-genesis-navy mb-4">Upcoming in 2026</h2>
          <p className="text-xl text-gray-600">
            Stay tuned for more details about our next Start-Up Showdown competition.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}