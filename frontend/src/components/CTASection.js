import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Download, Star, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-in slide-in-from-bottom-5 duration-700">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Join Thousands of Happy Users
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Your Life?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Start building better habits today. Join thousands of users who have already transformed 
            their lives with Habitia's simple yet powerful habit tracking system.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group text-lg font-semibold"
            >
              <Download className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              Download Free
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg font-semibold"
            >
              Learn More
            </Button>
          </div>

          {/* Social Proof */}
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center items-center space-x-1 mb-2">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-2xl font-bold text-white">4.9/5</div>
              <div className="text-blue-200 text-sm">Average Rating</div>
            </div>
            
            <div className="space-y-2">
              <Users className="w-10 h-10 text-blue-300 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">50,000+</div>
              <div className="text-blue-200 text-sm">Active Users</div>
            </div>
            
            <div className="space-y-2">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-green-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              <div className="text-2xl font-bold text-white">1M+</div>
              <div className="text-blue-200 text-sm">Habits Tracked</div>
            </div>
          </div>

          {/* App Store Badges Mock */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center space-x-3 hover:bg-gray-800 transition-colors duration-300 cursor-pointer group">
              <div className="text-2xl">📱</div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-lg font-semibold group-hover:text-blue-300 transition-colors duration-300">App Store</div>
              </div>
            </div>
            
            <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center space-x-3 hover:bg-gray-800 transition-colors duration-300 cursor-pointer group">
              <div className="text-2xl">🤖</div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Get it on</div>
                <div className="text-lg font-semibold group-hover:text-green-300 transition-colors duration-300">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;