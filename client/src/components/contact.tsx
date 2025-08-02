import { useState } from "react";
import { Send, Mail, MapPin, CircleOff, Heart } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(formData.subject || "General Inquiry");
    const body = encodeURIComponent(`
Hello Genesis Initiative Team,

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

Best regards,
${formData.firstName} ${formData.lastName}
    `);
    
    window.location.href = `mailto:thegenesisinitiative.austin@gmail.com?subject=${subject}&body=${body}`;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-genesis-navy mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our programs? Interested in partnerships? We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-genesis-navy mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    placeholder="Your first name"
                    className="focus:ring-2 focus:ring-genesis-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    placeholder="Your last name"
                    className="focus:ring-2 focus:ring-genesis-blue focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your.email@example.com"
                  className="focus:ring-2 focus:ring-genesis-blue focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                  <SelectTrigger className="focus:ring-2 focus:ring-genesis-blue focus:border-transparent">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    <SelectItem value="Program Information">Program Information</SelectItem>
                    <SelectItem value="Partnership Opportunity">Partnership Opportunity</SelectItem>
                    <SelectItem value="Volunteer Interest">Volunteer Interest</SelectItem>
                    <SelectItem value="Mentorship">Mentorship</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  placeholder="Tell us more about your inquiry..."
                  className="focus:ring-2 focus:ring-genesis-blue focus:border-transparent"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-genesis-yellow text-genesis-black hover:bg-yellow-500 text-lg py-4"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-genesis-navy mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-genesis-blue/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-genesis-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-genesis-navy">Email</h4>
                    <p className="text-gray-600">thegenesisinitiative.austin@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-genesis-blue/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-genesis-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-genesis-navy">Location</h4>
                    <p className="text-gray-600">Austin, Texas</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold text-genesis-navy mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/thegenesisinitiative_austin/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-genesis-navy rounded-lg flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="https://www.facebook.com/people/The-Genesis-Initiative-Austin/61556645001075/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-genesis-blue rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="https://www.linkedin.com/company/the-genesis-initiative-austin/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-genesis-orange rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="bg-gradient-to-br from-genesis-blue/5 to-blue-100/30 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-genesis-navy mb-4">Quick Actions</h4>
              <div className="space-y-4">
                <button 
                  onClick={() => window.open('https://linktr.ee/thegenesisinitiative.austin', '_blank')}
                  className="block w-full bg-genesis-yellow text-genesis-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-center"
                >
                  <Heart className="inline mr-2 h-5 w-5" /> Support Our Mission
                </button>
                
                <div className="text-sm text-gray-600 text-center leading-relaxed">
                  <p className="font-medium text-genesis-navy mb-2">Your donation directly empowers youth:</p>
                  <p>• Provides free workshops and camp materials</p>
                  <p>• Supports mentorship and career guidance</p>
                  <p>• Creates opportunities in underserved communities</p>
                  <p className="mt-2 text-xs text-gray-500">Every dollar helps a young entrepreneur thrive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
