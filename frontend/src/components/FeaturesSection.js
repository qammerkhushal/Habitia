import React from "react";
import { Card, CardContent } from "./ui/card";
import { 
  Zap, 
  Bell, 
  Palette, 
  TrendingUp, 
  Calendar,
  Target,
  BarChart3,
  Clock
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Streak Tracker",
      description: "Stay motivated by seeing how many days you've kept up your habits. Watch your streaks grow and feel the satisfaction of consistency.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss a habit with helpful notifications. Set custom reminder times that fit perfectly into your daily routine.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Palette,
      title: "Custom Themes",
      description: "Personalize the app to match your style. Choose from beautiful themes that make habit tracking a delightful experience.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Progress Charts",
      description: "Visualize your growth and track your journey. Beautiful charts show your improvement over days, weeks, and months.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Calendar,
      title: "Heatmap View",
      description: "See your consistency at a glance. The intuitive heatmap shows patterns and helps you identify your most productive periods.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Set meaningful goals and track your progress. Whether daily, weekly, or monthly - Habitia adapts to your timeline.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom-5 duration-700">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <BarChart3 className="w-4 h-4 mr-2" />
            Key Features
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to 
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Build Habits</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Habitia provides all the tools you need to create lasting positive changes in your life. 
            Simple, powerful, and designed with your success in mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-blue-50/50 hover:from-blue-50 hover:to-white transform hover:scale-105 animate-in slide-in-from-bottom-5"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardContent className="p-8">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Image */}
        <div className="mt-20 text-center animate-in slide-in-from-bottom-5 duration-700 delay-300">
          <div className="relative inline-block">
            <img 
              src="https://images.unsplash.com/photo-1671644315465-08aba45bc314?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxwcm9ncmVzcyUyMHRyYWNraW5nfGVufDB8fHx8MTc1NjU4ODQyNnww&ixlib=rb-4.1.0&q=85"
              alt="Habitia App Interface"
              className="rounded-3xl shadow-2xl max-w-2xl w-full h-auto transform hover:scale-105 transition-all duration-500"
            />
            
            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="text-sm font-bold text-gray-900">Daily Goal</div>
                  <div className="text-xs text-gray-600">85% Complete</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">All habits on track!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;