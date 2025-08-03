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
                    <a href="https://www.linkedin.com/in/hasini-chandrakumar-33483b308/" target="_blank" rel="noopener noreferrer" className="text-genesis-blue hover:text-genesis-navy transition-colors">
                      <FaLinkedin className="text-lg" />
                    </a>
                    <a href="mailto:hasinic.222@gmail.com" className="text-black hover:text-genesis-navy transition-colors">
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
                  <p className="text-genesis-blue font-medium">Co-Founder & Executive Director</p>
                  <div className="flex space-x-3 mt-2">
                    <a href="https://www.linkedin.com/in/siddharth-kommuri-5698a32b7/" target="_blank" rel="noopener noreferrer" className="text-genesis-blue hover:text-genesis-navy transition-colors">
                      <FaLinkedin className="text-lg" />
                    </a>
                    <a href="mailto:siddu.kommuri9@gmail.com" className="text-black hover:text-genesis-navy transition-colors">
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
        

      </div>
    </section>
  );
}
