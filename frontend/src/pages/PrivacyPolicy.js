import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, Shield, Eye, Lock, Database, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Account information (email, username, profile preferences)",
        "Habit tracking data (habits created, completion status, streaks)",
        "Usage analytics (app interactions, feature usage, performance metrics)",
        "Device information (device type, operating system, app version)",
        "Optional data (profile photo, personal goals, notes)"
      ]
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        "Provide and maintain the Habitia service",
        "Track your habit progress and generate personalized insights",
        "Send notifications and reminders based on your preferences",
        "Improve our app features and user experience",
        "Provide customer support and respond to your inquiries",
        "Ensure security and prevent fraudulent activities"
      ]
    },
    {
      icon: Shield,
      title: "Data Protection & Security",
      content: [
        "All data is encrypted in transit using TLS 1.2+ encryption",
        "Stored data is encrypted using AES-256 encryption standards",
        "Regular security audits and penetration testing",
        "Access controls and authentication for all system components",
        "Automatic backups with encrypted storage",
        "GDPR and CCPA compliance measures implemented"
      ]
    },
    {
      icon: Lock,
      title: "Your Privacy Rights",
      content: [
        "Access your personal data and download a copy",
        "Correct inaccurate or incomplete information",
        "Delete your account and associated data",
        "Opt-out of marketing communications",
        "Request data portability to other services",
        "Object to processing of your personal data"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <Link 
              to="/"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Back to Home</span>
            </Link>
            
            <div className="text-sm text-gray-500">
              Last updated: January 2025
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <div className="text-center mb-12 animate-in slide-in-from-bottom-5 duration-700">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Privacy Policy
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Privacy
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Matters</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Habitia, we're committed to protecting your privacy and being transparent about how we 
            collect, use, and protect your personal information.
          </p>
        </div>

        {/* Overview Card */}
        <Card className="mb-12 border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white animate-in slide-in-from-bottom-5 duration-700 delay-200">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">256-bit</div>
                <div className="text-blue-100">Encryption</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">GDPR</div>
                <div className="text-blue-100">Compliant</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">0</div>
                <div className="text-blue-100">Data Breaches</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card 
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-in slide-in-from-bottom-5"
                style={{animationDelay: `${300 + index * 100}ms`}}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-3 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-900">{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-12 space-y-8">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50 animate-in slide-in-from-bottom-5 duration-700 delay-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Habitia integrates with select third-party services to enhance your experience. These include:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>Analytics services (anonymized usage data only)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>Push notification services (device tokens only)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>Cloud backup services (encrypted data only)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-50 to-red-50 animate-in slide-in-from-bottom-5 duration-700 delay-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Have questions about your privacy or this policy? We're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  privacy@habitia.com
                </Button>
                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  Privacy Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="border-blue-200 text-blue-700 hover:bg-blue-50"
          >
            Back to Top
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;