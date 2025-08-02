import { UserPlus, Handshake } from "lucide-react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import hasiniPhoto from "@assets/HasiniChandrakumarHeadshot_1754155576626.jpeg";
import siddharthPhoto from "@assets/1728016660784_1754155622849.jpeg";

export default function Team() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-genesis-navy mb-6">Our Youth Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the passionate young leaders driving change in entrepreneurship education across our community.
          </p>
        </div>
        
        {/* Featured Leaders */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Hasini Chandrakumar */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <img 
                  src={hasiniPhoto} 
                  alt="Hasini Chandrakumar" 
                  className="w-20 h-20 rounded-full object-cover mr-6"
                />
                <div>
                  <h3 className="text-2xl font-bold text-genesis-navy">Hasini Chandrakumar</h3>
                  <p className="text-genesis-blue font-medium">Co-Founder & Executive Director</p>
                  <div className="flex space-x-3 mt-2">
                    <a href="#" className="text-genesis-blue hover:text-genesis-navy transition-colors">
                      <FaLinkedin className="text-lg" />
                    </a>
                    <a href="#" className="text-genesis-blue hover:text-genesis-navy transition-colors">
                      <FaEnvelope className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A passionate advocate for youth entrepreneurship, Hasini brings innovative thinking and 
                strong leadership to The Genesis Initiative. She oversees program development and 
                community outreach, ensuring our mission reaches diverse communities across the region.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-genesis-blue/10 text-genesis-blue rounded-full text-sm font-medium">Leadership</span>
                <span className="px-3 py-1 bg-genesis-yellow/10 text-genesis-yellow rounded-full text-sm font-medium">Program Development</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Community Outreach</span>
              </div>
            </div>
          </div>
          
          {/* Siddharth Kommuri */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <img 
                  src={siddharthPhoto} 
                  alt="Siddharth Kommuri" 
                  className="w-20 h-20 rounded-full object-cover mr-6"
                />
                <div>
                  <h3 className="text-2xl font-bold text-genesis-navy">Siddharth Kommuri</h3>
                  <p className="text-genesis-blue font-medium">Co-Founder & Operations Director</p>
                  <div className="flex space-x-3 mt-2">
                    <a href="#" className="text-genesis-blue hover:text-genesis-navy transition-colors">
                      <FaLinkedin className="text-lg" />
                    </a>
                    <a href="#" className="text-genesis-blue hover:text-genesis-navy transition-colors">
                      <FaEnvelope className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                With a keen eye for operations and strategic planning, Siddharth ensures our programs 
                run smoothly and efficiently. He leads our mentorship initiatives and works to create 
                sustainable growth for the organization.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-genesis-blue/10 text-genesis-blue rounded-full text-sm font-medium">Operations</span>
                <span className="px-3 py-1 bg-genesis-yellow/10 text-genesis-yellow rounded-full text-sm font-medium">Strategic Planning</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Mentorship</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Stats & Join CTA */}
        <div className="bg-gradient-to-br from-genesis-navy to-blue-900 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Join Our Growing Team</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate volunteers, youth leaders, and mentors to help expand our impact. 
            Together, we can empower more young entrepreneurs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-2xl font-bold text-genesis-yellow mb-2">15+</div>
              <div className="text-blue-200">Active Youth Leaders</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-genesis-yellow mb-2">25+</div>
              <div className="text-blue-200">Volunteer Mentors</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-genesis-yellow mb-2">8+</div>
              <div className="text-blue-200">Partner Organizations</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-genesis-yellow text-genesis-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-colors inline-flex items-center justify-center"
            >
              <UserPlus className="mr-2 h-5 w-5" /> Volunteer With Us
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-genesis-navy transition-colors inline-flex items-center justify-center"
            >
              <Handshake className="mr-2 h-5 w-5" /> Become a Mentor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
