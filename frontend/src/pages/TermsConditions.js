import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, FileText, Scale, Users, AlertTriangle, Mail } from "lucide-react";

const TermsConditions = () => {
  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By downloading, accessing, or using Habitia, you agree to be bound by these Terms and Conditions",
        "These terms apply to all users, including visitors, registered users, and premium subscribers",
        "If you disagree with any part of these terms, you may not access the service",
        "We reserve the right to update these terms at any time with reasonable notice",
        "Continued use of the service after changes constitutes acceptance of new terms"
      ]
    },
    {
      icon: FileText,
      title: "Use of Service",
      content: [
        "Habitia is designed for personal habit tracking and self-improvement purposes",
        "You must be at least 13 years old to use this service",
        "You are responsible for maintaining the confidentiality of your account",
        "You agree to provide accurate and complete information when creating an account",
        "One account per person - sharing accounts is not permitted",
        "Commercial use of the service requires separate licensing agreement"
      ]
    },
    {
      icon: AlertTriangle,
      title: "User Responsibilities & Prohibited Use",
      content: [
        "Do not use the service for illegal activities or to harm others",
        "Do not attempt to hack, reverse engineer, or compromise the service",
        "Do not upload malicious content, spam, or inappropriate material",
        "Do not share your login credentials with others",
        "Do not create multiple accounts to circumvent restrictions",
        "Report any security vulnerabilities or bugs responsibly"
      ]
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: [
        "Habitia and all related trademarks are owned by our company",
        "The app design, features, and content are protected by copyright",
        "You retain ownership of your personal habit data and content",
        "You grant us license to use your data to provide and improve the service",
        "We respect your privacy and will not share your data without consent",
        "Third-party content and integrations are subject to their respective licenses"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <Link 
              to="/"
              className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Back to Home</span>
            </Link>
            
            <div className="text-sm text-gray-500">
              Effective: January 2025
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <div className="text-center mb-12 animate-in slide-in-from-bottom-5 duration-700">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
            <Scale className="w-4 h-4 mr-2" />
            Terms & Conditions
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Terms of
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Service</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Please read these Terms and Conditions carefully before using Habitia. 
            These terms govern your use of our habit tracking service.
          </p>
        </div>

        {/* Quick Summary Card */}
        <Card className="mb-12 border-0 shadow-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white animate-in slide-in-from-bottom-5 duration-700 delay-200">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Quick Summary</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-indigo-100">What you can do:</h4>
                <ul className="space-y-1 text-indigo-100 text-sm">
                  <li>• Track personal habits and goals</li>
                  <li>• Use all features for personal growth</li>
                  <li>• Export your data anytime</li>
                  <li>• Cancel subscription anytime</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-indigo-100">What you can't do:</h4>
                <ul className="space-y-1 text-indigo-100 text-sm">
                  <li>• Share accounts or credentials</li>
                  <li>• Use for commercial purposes</li>
                  <li>• Reverse engineer the app</li>
                  <li>• Upload harmful content</li>
                </ul>
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 p-3 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-900">{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Sections */}
        <div className="mt-12 space-y-8">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50 animate-in slide-in-from-bottom-5 duration-700 delay-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Habitia is provided "as is" without warranties of any kind. We make every effort to ensure 
                  the service is reliable and secure, but cannot guarantee uninterrupted access.
                </p>
                <p>
                  We are not liable for any indirect, incidental, or consequential damages arising from 
                  your use of the service. Our total liability is limited to the amount you paid for 
                  the service in the past 12 months.
                </p>
                <p>
                  This limitation does not apply to cases of gross negligence or intentional misconduct.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50 animate-in slide-in-from-bottom-5 duration-700 delay-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Account Termination</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">You may terminate:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Delete your account anytime</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Export your data before deletion</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Cancel subscriptions with no penalty</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">We may terminate for:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>Violation of these terms</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>Fraudulent activity</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>Extended inactivity (with notice)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-pink-50 animate-in slide-in-from-bottom-5 duration-700 delay-900">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact & Dispute Resolution</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Questions about these terms? Concerns about your account? We're committed to resolving 
                issues fairly and promptly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  legal@habitia.com
                </Button>
                <Button variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                  Support Center
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
            className="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
          >
            Back to Top
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;