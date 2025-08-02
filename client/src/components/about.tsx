import { Users, Rocket, Heart, Target, Eye, Lightbulb } from "lucide-react";

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
          
          <div className="grid md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* Detailed About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-genesis-navy mb-8">Who We Are</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
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
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Youth collaboration and teamwork" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-genesis-yellow rounded-full flex items-center justify-center">
                <Lightbulb className="h-12 w-12 text-genesis-black" />
              </div>
            </div>
          </div>
          
          {/* Mission, Vision, What We Do */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-genesis-blue/5 to-blue-100/30 rounded-2xl">
              <div className="w-16 h-16 bg-genesis-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-genesis-navy mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Empower youth to gain business and financial skills through inclusive programs that encourage 
                creativity, confidence, and career readiness.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-genesis-yellow/5 to-yellow-100/30 rounded-2xl">
              <div className="w-16 h-16 bg-genesis-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-genesis-black" />
              </div>
              <h3 className="text-2xl font-bold text-genesis-navy mb-4">What We Do</h3>
              <p className="text-gray-700 leading-relaxed">
                We run free mini Shark Tank competitions, youth camps, workshops, and mentorship programs 
                emphasizing inclusivity and accessibility for all backgrounds.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-genesis-navy/5 to-genesis-navy/10 rounded-2xl">
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
