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
          {/* High School Head Start */}
          <div className="bg-gradient-to-br from-genesis-blue to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 mr-3" />
                <span className="text-blue-200 font-medium">SIGNATURE PROGRAM</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">High School Head Start</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                A comprehensive program designed to give high school students a competitive edge in entrepreneurship 
                and business fundamentals before college.
              </p>
              <div className="flex items-center mb-6">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Next Session: March 2024</span>
              </div>
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center bg-white text-genesis-blue px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          
          {/* Startup Showdown */}
          <div className="bg-gradient-to-br from-genesis-orange to-red-500 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 mr-3" />
                <span className="text-orange-200 font-medium">COMPETITION</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Startup Showdown</h3>
              <p className="text-orange-100 mb-6 leading-relaxed">
                Our signature mini Shark Tank competition where young entrepreneurs pitch their innovative 
                ideas to real business leaders and win exciting prizes.
              </p>
              <div className="flex items-center mb-6">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Next Event: April 2024</span>
              </div>
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center bg-white text-genesis-orange px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
              >
                Register Now <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Additional Programs */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <Lightbulb className="h-12 w-12 text-genesis-orange mx-auto mb-4" />
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
