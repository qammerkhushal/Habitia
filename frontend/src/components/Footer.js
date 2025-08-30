import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { 
  Zap, 
  Github, 
  Twitter, 
  Instagram, 
  Mail,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Benefits", href: "#benefits" },
      { name: "Pricing", href: "#pricing" },
      { name: "Updates", href: "#updates" }
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" }
    ],
    Support: [
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "Status", href: "#status" },
      { name: "Feedback", href: "#feedback" }
    ]
  };

  const socialLinks = [
    { name: "Github", icon: Github, href: "#", color: "hover:text-gray-900" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-500" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { name: "Email", icon: Mail, href: "mailto:hello@habitia.com", color: "hover:text-green-500" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Zap className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Habitia
              </span>
            </Link>
            
            <p className="text-gray-600 leading-relaxed max-w-md">
              Transform your life one habit at a time. Habitia helps you build lasting positive changes 
              through consistent daily actions and smart tracking.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-gray-900 font-semibold mb-4 text-lg">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-600">
            <span>© {currentYear} Habitia. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>for habit builders worldwide.</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <span>Version 2.1.0</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600"></div>
    </footer>
  );
};

export default Footer;