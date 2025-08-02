import { useState } from "react";
import { Heart, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");

  const suggestedAmounts = [25, 50, 100, 250];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-genesis-navy to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Support Our Mission</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Your donation helps keep our camps free and accessible, provides essential materials, 
            and expands our outreach to underserved youth across the community.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Donation Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Make a Donation</h3>
            
            {/* Suggested Amounts */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-blue-100 mb-3">Choose Amount</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {suggestedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`rounded-lg px-4 py-3 font-semibold transition-colors ${
                      selectedAmount === amount
                        ? "bg-genesis-yellow text-genesis-black border-genesis-yellow"
                        : "bg-white/10 border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <Input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:ring-2 focus:ring-genesis-orange focus:border-transparent"
              />
            </div>
            
            {/* Donation Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-blue-100 mb-3">Donation Type</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="donationType"
                    value="one-time"
                    checked={donationType === "one-time"}
                    onChange={(e) => setDonationType(e.target.value)}
                    className="mr-2 text-genesis-yellow"
                  />
                  <span>One-time</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="donationType"
                    value="monthly"
                    checked={donationType === "monthly"}
                    onChange={(e) => setDonationType(e.target.value)}
                    className="mr-2 text-genesis-yellow"
                  />
                  <span>Monthly</span>
                </label>
              </div>
            </div>
            
            {/* Donor Information */}
            <div className="space-y-4 mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:ring-2 focus:ring-genesis-yellow focus:border-transparent"
                />
                <Input
                  placeholder="Last Name"
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:ring-2 focus:ring-genesis-yellow focus:border-transparent"
                />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:ring-2 focus:ring-genesis-yellow focus:border-transparent"
              />
            </div>
            
            <Button 
              onClick={() => window.open('https://linktr.ee/thegenesisinitiative.austin', '_blank')}
              className="w-full bg-genesis-yellow text-genesis-black hover:bg-yellow-500 text-lg py-4"
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>
            
            {/* Security Note */}
            <p className="text-xs text-blue-200 mt-4 text-center">
              <Lock className="inline mr-1 h-3 w-3" />
              Secure donation processing powered by trusted payment providers
            </p>
          </div>
          
          {/* Impact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Your Impact</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-genesis-yellow/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-genesis-yellow font-bold">$25</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-100">Supplies Workshop Materials</h4>
                    <p className="text-blue-200 text-sm">Provides essential materials for one student's complete workshop experience</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-genesis-yellow/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-genesis-yellow font-bold">$50</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-100">Sponsors a Student</h4>
                    <p className="text-blue-200 text-sm">Covers full participation costs for one student in our signature programs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-genesis-yellow/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-genesis-yellow font-bold">$100</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-100">Funds Mentor Training</h4>
                    <p className="text-blue-200 text-sm">Supports professional development for our volunteer mentors</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-genesis-yellow/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-genesis-yellow font-bold">$250</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-100">Supports New Program</h4>
                    <p className="text-blue-200 text-sm">Helps launch new initiatives and expand our reach to more communities</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Transparency */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold mb-4">Transparency & Accountability</h4>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                We believe in complete transparency about how your donations are used. 
                Every dollar goes directly toward program materials, venue costs, and expanding our reach.
              </p>
              <div className="text-sm text-blue-200">
                <div className="flex justify-between mb-2">
                  <span>Programs & Materials</span>
                  <span className="font-semibold">75%</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Operations & Outreach</span>
                  <span className="font-semibold">20%</span>
                </div>
                <div className="flex justify-between">
                  <span>Administrative</span>
                  <span className="font-semibold">5%</span>
                </div>
              </div>
            </div>
            
            {/* Thank You */}
            <div className="text-center p-6 bg-gradient-to-br from-genesis-yellow/10 to-yellow-500/10 rounded-2xl border border-genesis-yellow/20">
              <Heart className="h-12 w-12 text-genesis-yellow mx-auto mb-4" />
              <h4 className="text-xl font-bold text-genesis-yellow mb-2">Thank You!</h4>
              <p className="text-blue-100 text-sm">
                Your support makes it possible for us to empower the next generation of entrepreneurs. 
                Together, we're building a community where every young person can thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
