import { Users, Rocket, Heart, Target, Eye, Lightbulb, DollarSign } from "lucide-react";
import workshopCollage from "@assets/Untitled design-12_1754154967868.png";

export default function About() {
  return (
    <>
      {/* About Snapshot */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-genesis-navy mb-6">About The Genesis Initiative</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are the first fully youth-led nonprofit in the region, dedicated to empowering the next generation 
              through entrepreneurship and financial literacy education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-genesis-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-genesis-blue" />
              </div>
              <h3 className="text-xl font-semibold text-genesis-navy mb-4">Youth-Led</h3>
              <p className="text-gray-600">Fully organized and run by passionate young leaders who understand the needs of their peers.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-genesis-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-genesis-yellow" />
              </div>
              <h3 className="text-xl font-semibold text-genesis-navy mb-4">Entrepreneurship Focus</h3>
              <p className="text-gray-600">Teaching business skills, creativity, and innovation through hands-on workshops and competitions.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-genesis-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-genesis-navy" />
              </div>
              <h3 className="text-xl font-semibold text-genesis-navy mb-4">Inclusive & Accessible</h3>
              <p className="text-gray-600">Welcoming participants from all backgrounds with free or affordable programs designed for everyone.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-genesis-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-genesis-blue" />
              </div>
              <h3 className="text-xl font-semibold text-genesis-navy mb-4">Financial Literacy</h3>
              <p className="text-gray-600">Building essential money management skills, budgeting, and financial planning knowledge for lifelong success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-genesis-navy mb-8">Who We Are</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  The Genesis Initiative is the <strong>first fully youth-led nonprofit</strong> in the region 
                  focused on entrepreneurship and financial literacy for kids and teens. We believe that young 
                  people have the power to create meaningful change in their communities and the world.
                </p>
                <p>
                  Founded by passionate youth leaders, our organization understands the unique challenges and 
                  opportunities that face today's young entrepreneurs. We bridge the gap between traditional 
                  education and real-world business skills.
                </p>
              </div>
            </div>
            
            {/* Large workshop image */}
            <div className="relative max-w-6xl mx-auto">
              <img 
                src={workshopCollage} 
                alt="Genesis Initiative workshops and activities" 
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-genesis-yellow rounded-full flex items-center justify-center shadow-lg">
                <Lightbulb className="h-16 w-16 text-genesis-black" />
              </div>
            </div>
          </div>
          
          {/* Mission, Vision, What We Do */}
          <div className="grid md:grid-cols-3 gap-8 p-12 rounded-3xl bg-genesis-navy">
            <div className="text-center p-8 bg-white rounded-2xl">
              <div className="w-16 h-16 bg-genesis-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-genesis-navy mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Empower youth to gain business and financial skills through inclusive programs that encourage 
                creativity, confidence, and career readiness.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl">
              <div className="w-16 h-16 bg-genesis-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-genesis-black" />
              </div>
              <h3 className="text-2xl font-bold text-genesis-navy mb-4">What We Do</h3>
              <p className="text-gray-700 leading-relaxed">
                We run free mini Shark Tank competitions, youth camps, workshops, and mentorship programs 
                emphasizing inclusivity and accessibility for all backgrounds.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl">
              <div className="w-16 h-16 bg-genesis-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-genesis-navy mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To create a community where every young person has the opportunity and resources to thrive 
                as entrepreneurs and financially savvy adults.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
