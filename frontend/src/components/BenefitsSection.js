import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Heart, 
  Brain, 
  Sparkles, 
  Users,
  Award,
  Lightbulb
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Simple & Clean",
      description: "Intuitive design that doesn't get in your way. Focus on building habits, not learning complex interfaces.",
      badge: "User-Friendly"
    },
    {
      icon: Brain,
      title: "Build Discipline",
      description: "Designed to help anyone develop self-control and discipline through consistent daily actions.",
      badge: "Psychology-Based"
    },
    {
      icon: Sparkles,
      title: "Stay Motivated",
      description: "Motivational approach that keeps you inspired every day with achievements, streaks, and progress rewards.",
      badge: "Gamified"
    }
  ];

  const useCases = [
    { icon: "💪", category: "Fitness", examples: ["Daily exercise", "10k steps", "Drink water", "Yoga practice"] },
    { icon: "📚", category: "Learning", examples: ["Read 30 minutes", "Practice language", "Online courses", "Skill development"] },
    { icon: "🧘", category: "Wellness", examples: ["Meditation", "Sleep 8 hours", "Healthy meals", "Mindfulness"] },
    { icon: "🎯", category: "Productivity", examples: ["Plan tomorrow", "Inbox zero", "No social media", "Deep work"] }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Why Choose Habitia */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom-5 duration-700">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            Why Choose Habitia?
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built for Your 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Success</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            More than just a habit tracker — Habitia is your personal growth companion designed 
            to make positive change feel natural and sustainable.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white transform hover:scale-105 animate-in slide-in-from-bottom-5"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <CardContent className="p-8 text-center">
                  {/* Badge */}
                  <Badge 
                    variant="secondary" 
                    className="mb-4 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-0"
                  >
                    {benefit.badge}
                  </Badge>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-5 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Use Cases Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Growth Image */}
          <div className="relative animate-in slide-in-from-left-5 duration-700">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1505816014357-96b5ff457e9a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGdyb3d0aHxlbnwwfHx8fDE3NTY1ODg0MzJ8MA&ixlib=rb-4.1.0&q=85"
                alt="Personal Growth and Habit Building"
                className="w-full h-96 object-cover transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              
              {/* Floating quote */}
              <div className="absolute top-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-700 font-medium">"Small daily improvements lead to staggering long-term results."</p>
                    <p className="text-xs text-gray-500 mt-1">- Habit Building Philosophy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Use Cases */}
          <div className="animate-in slide-in-from-right-5 duration-700 delay-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Perfect for Any
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Goal</span>
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              No matter what goals you have — fitness, study, productivity, or personal growth — 
              Habitia helps you stay consistent and disciplined, step by step.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border border-blue-100 hover:border-blue-200 bg-white/80 backdrop-blur-sm animate-in slide-in-from-bottom-5"
                  style={{animationDelay: `${400 + index * 100}ms`}}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">{useCase.icon}</span>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                        {useCase.category}
                      </h4>
                    </div>
                    
                    <div className="space-y-2">
                      {useCase.examples.map((example, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-600 transition-colors duration-300"></div>
                          {example}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white shadow-xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">21</div>
                  <div className="text-blue-100 text-sm">Days to Form a Habit</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-blue-100 text-sm">Success Rate with Tracking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;