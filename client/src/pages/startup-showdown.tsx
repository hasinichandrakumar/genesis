import { Trophy, Clock, Users, Award, Calendar, MapPin, DollarSign, Star, Target, Lightbulb } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function StartupShowdownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-genesis-navy to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-genesis-yellow rounded-full flex items-center justify-center">
                <Trophy className="h-10 w-10 text-genesis-black" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 tracking-tight">Start-Up Showdown</h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8">
              The ultimate entrepreneurial competition where young innovators pitch their groundbreaking ideas, 
              compete for prizes, and gain invaluable experience in the world of business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-genesis-yellow text-genesis-black hover:bg-yellow-500 text-lg px-8 py-3">
                Register Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-genesis-navy text-lg px-8 py-3">
                Learn More
              </Button>
            </div>
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
              <video 
                controls 
                className="w-full h-full object-cover"
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23003366'/%3E%3Ccircle cx='400' cy='225' r='60' fill='%23F4D03F'/%3E%3Cpolygon points='380,205 380,245 420,225' fill='%23003366'/%3E%3Ctext x='400' y='290' text-anchor='middle' fill='white' font-size='20' font-family='Arial'%3EStart-Up Showdown%3C/text%3E%3C/svg%3E"
              >
                <source src="/attached_assets/The GENESIS Initiative_1754156834935.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
                    <h4 className="font-semibold text-genesis-navy">Mentorship Sessions</h4>
                    <p className="text-gray-600 text-sm">One-on-one guidance from successful entrepreneurs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-5 w-5 text-genesis-yellow mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-genesis-navy">Networking Opportunities</h4>
                    <p className="text-gray-600 text-sm">Connect with fellow entrepreneurs and industry leaders</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-5 w-5 text-genesis-yellow mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-genesis-navy">Workshop Sessions</h4>
                    <p className="text-gray-600 text-sm">Learn key business skills from industry professionals</p>
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
              A structured, multi-round competition designed to showcase entrepreneurial talent
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-genesis-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-genesis-navy mb-3">Application Round</h3>
              <p className="text-gray-600">
                Submit your business idea, executive summary, and team information. Our panel reviews all applications.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-genesis-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-genesis-navy mb-3">Semi-Finals</h3>
              <p className="text-gray-600">
                Selected teams present 3-minute pitches to advance to the final round. Top 10 teams move forward.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-genesis-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-genesis-black font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-genesis-navy mb-3">Final Pitches</h3>
              <p className="text-gray-600">
                Finalists deliver comprehensive 7-minute presentations followed by Q&A with expert judges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Awards */}
      <section className="py-16 bg-gradient-to-br from-genesis-navy to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Recognition & Awards</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Outstanding participants receive valuable recognition and opportunities for growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <Trophy className="h-12 w-12 text-genesis-yellow mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-genesis-yellow mb-4">1st Place Winner</h3>
              <ul className="text-blue-100 space-y-2">
                <li>• Winner recognition</li>
                <li>• Mentorship program access</li>
                <li>• Business development resources</li>
                <li>• Media feature opportunities</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <Award className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-300 mb-4">Runner-Up</h3>
              <ul className="text-blue-100 space-y-2">
                <li>• Achievement recognition</li>
                <li>• Mentorship opportunities</li>
                <li>• Business toolkit access</li>
                <li>• Networking connections</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <Target className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-orange-400 mb-4">All Participants</h3>
              <ul className="text-blue-100 space-y-2">
                <li>• Certificate of participation</li>
                <li>• Workshop access</li>
                <li>• Networking opportunities</li>
                <li>• Feedback from judges</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-genesis-navy mb-8">Event Details</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Calendar className="h-6 w-6 text-genesis-orange mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-genesis-navy text-lg">Date & Time</h3>
                    <p className="text-gray-600">Saturday, March 15, 2025</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-genesis-orange mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-genesis-navy text-lg">Location</h3>
                    <p className="text-gray-600">Austin Convention Center</p>
                    <p className="text-gray-600">500 E Cesar Chavez St, Austin, TX 78701</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-genesis-orange mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-genesis-navy text-lg">Eligibility</h3>
                    <p className="text-gray-600">Ages 14-24</p>
                    <p className="text-gray-600">Individual or team participation (max 4 members)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="h-6 w-6 text-genesis-orange mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-genesis-navy text-lg">Registration</h3>
                    <p className="text-gray-600">Free to participate</p>
                    <p className="text-gray-600">Early bird deadline: February 15, 2025</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-genesis-blue/5 to-blue-100/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-genesis-navy mb-6">Event Schedule</h3>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-20 flex-shrink-0 text-sm font-medium text-genesis-navy">9:00 AM</div>
                  <div>
                    <h4 className="font-semibold text-genesis-navy">Registration & Check-in</h4>
                    <p className="text-gray-600 text-sm">Welcome breakfast and networking</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-20 flex-shrink-0 text-sm font-medium text-genesis-navy">10:00 AM</div>
                  <div>
                    <h4 className="font-semibold text-genesis-navy">Opening Ceremony</h4>
                    <p className="text-gray-600 text-sm">Keynote speaker and event overview</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-20 flex-shrink-0 text-sm font-medium text-genesis-navy">11:00 AM</div>
                  <div>
                    <h4 className="font-semibold text-genesis-navy">Workshop Sessions</h4>
                    <p className="text-gray-600 text-sm">Business skills development</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-20 flex-shrink-0 text-sm font-medium text-genesis-navy">1:00 PM</div>
                  <div>
                    <h4 className="font-semibold text-genesis-navy">Lunch & Networking</h4>
                    <p className="text-gray-600 text-sm">Connect with mentors and peers</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-20 flex-shrink-0 text-sm font-medium text-genesis-navy">2:30 PM</div>
                  <div>
                    <h4 className="font-semibold text-genesis-navy">Semi-Final Pitches</h4>
                    <p className="text-gray-600 text-sm">3-minute preliminary presentations</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-20 flex-shrink-0 text-sm font-medium text-genesis-navy">4:00 PM</div>
                  <div>
                    <h4 className="font-semibold text-genesis-navy">Final Competition</h4>
                    <p className="text-gray-600 text-sm">Top 10 teams compete</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-20 flex-shrink-0 text-sm font-medium text-genesis-navy">5:30 PM</div>
                  <div>
                    <h4 className="font-semibold text-genesis-navy">Awards Ceremony</h4>
                    <p className="text-gray-600 text-sm">Winners announced and celebrated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-genesis-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-genesis-black mb-6">Ready to Compete?</h2>
          <p className="text-xl text-genesis-black/80 mb-8 leading-relaxed">
            Join the most exciting entrepreneurial competition for young innovators in Austin. 
            Show the world your startup idea and compete for substantial prizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-genesis-navy text-white hover:bg-blue-800 text-lg px-8 py-3">
              Register for Start-Up Showdown
            </Button>
            <Button variant="outline" className="border-genesis-navy text-genesis-navy hover:bg-genesis-navy hover:text-white text-lg px-8 py-3">
              Download Information Packet
            </Button>
          </div>
          <p className="text-sm text-genesis-black/60 mt-6">
            Registration deadline: February 15, 2025 • Questions? Contact us at thegenesisinitiative.austin@gmail.com
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}