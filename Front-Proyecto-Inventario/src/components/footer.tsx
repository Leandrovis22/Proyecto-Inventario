import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { 
    icon: Instagram, 
    url: "https://www.instagram.com/your_profile" 
  },
  { 
    icon: Facebook, 
    url: "https://www.facebook.com/your_profile" 
  },
  { 
    icon: Twitter, 
    url: "https://www.twitter.com/your_profile" 
  },
  { 
    icon: Linkedin, 
    url: "https://www.linkedin.com/in/your_profile" 
  },
  { 
    icon: Mail, 
    url: "mailto:your.email@example.com" 
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-4">
      <div className="container mx-auto flex justify-center space-x-6">
        {socialLinks.map(({ icon: Icon, url }, index) => (
          <a 
            key={index} 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <Icon size={24} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;