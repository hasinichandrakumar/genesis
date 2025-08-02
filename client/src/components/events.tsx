import { GraduationCap, Trophy, Lightbulb, Handshake, PiggyBank, ArrowRight, Calendar } from "lucide-react";

export default function Events() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-genesis-navy mb-6">Upcoming Events & Camps</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our signature programs designed to inspire and educate the next generation of entrepreneurs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Startup Showdown - Now First with Blue Highlight */}
          <div className="bg-gradient-to-br from-genesis-blue/10 to-blue-100 border-2 border-genesis-blue rounded-2xl p-8 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-genesis-blue/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 mr-3 text-genesis-blue" />
                <span className="text-genesis-blue font-medium">COMPETITION</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-genesis-navy">Startup Showdown</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our signature mini Shark Tank competition where young entrepreneurs pitch their innovative 
                ideas to real business leaders and win exciting prizes.
              </p>
              <div className="flex items-center mb-6 text-gray-600">
                <Calendar className="h-5 w-5 mr-2 text-genesis-blue" />
                <span>Next Event: April 2026</span>
              </div>
              <button 
                className="inline-flex items-center bg-gray-400 text-white px-6 py-3 rounded-full font-semibold cursor-not-allowed"
                disabled
              >
                Upcoming in 2026
              </button>
            </div>
          </div>
          
          {/* High School Head Start - Now Second */}
          <div className="bg-white border-2 border-genesis-blue rounded-2xl p-8 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-genesis-blue/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 mr-3 text-genesis-blue" />
                <span className="text-genesis-blue font-medium">SIGNATURE PROGRAM</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-genesis-navy">High School Head Start Camp</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                An intensive summer camp program that introduces high school students to entrepreneurship, financial literacy, 
                and business fundamentals through hands-on workshops, mini pitch competitions, and mentorship from young business leaders.
              </p>
              <div className="flex items-center mb-6 text-gray-600">
                <Calendar className="h-5 w-5 mr-2 text-genesis-blue" />
                <span>Next Session: Summer 2026</span>
              </div>
              <button 
                className="inline-flex items-center bg-gray-400 text-white px-6 py-3 rounded-full font-semibold cursor-not-allowed"
                disabled
              >
                Upcoming in 2026
              </button>
            </div>
          </div>
        </div>
        
        {/* Additional Programs */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <Lightbulb className="h-12 w-12 text-genesis-yellow mx-auto mb-4" />
            <h4 className="font-semibold text-genesis-navy mb-2">Innovation Workshops</h4>
            <p className="text-gray-600 text-sm">Monthly hands-on sessions covering business fundamentals and creative thinking.</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <Handshake className="h-12 w-12 text-genesis-blue mx-auto mb-4" />
            <h4 className="font-semibold text-genesis-navy mb-2">Mentorship Program</h4>
            <p className="text-gray-600 text-sm">Connect with experienced entrepreneurs and business professionals.</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <PiggyBank className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h4 className="font-semibold text-genesis-navy mb-2">Financial Literacy</h4>
            <p className="text-gray-600 text-sm">Essential money management skills for teenage entrepreneurs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
