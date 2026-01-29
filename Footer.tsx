import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, GraduationCap, ChevronRight } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-primary-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* School Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <GraduationCap size={40} className="text-primary-400" />
               <div>
                  <h3 className="font-display text-2xl font-bold">Excellence</h3>
                  <p className="text-xs tracking-[0.2em] uppercase text-primary-300 font-semibold">Academy</p>
               </div>
            </div>
            <p className="text-primary-100 text-sm leading-relaxed max-w-xs">
              Empowering students to become future leaders through holistic education, innovation, and character building since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-primary-300 hover:bg-primary-600 hover:text-white transition-all"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-primary-300 hover:bg-primary-600 hover:text-white transition-all"><Twitter size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-primary-300 hover:bg-primary-600 hover:text-white transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-primary-300 hover:bg-primary-600 hover:text-white transition-all"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { l: 'About Us', p: Page.ABOUT },
                { l: 'Admissions', p: Page.ADMISSIONS },
                { l: 'Facilities', p: Page.FACILITIES },
                { l: 'Faculty', p: Page.FACULTY },
                { l: 'Student Life', p: Page.STUDENT_LIFE },
                { l: 'Contact', p: Page.CONTACT },
              ].map((item, i) => (
                <li key={i}>
                  <button onClick={() => onNavigate(item.p)} className="flex items-center text-primary-200 hover:text-white hover:translate-x-1 transition-all group">
                    <ChevronRight size={14} className="mr-2 text-primary-500 group-hover:text-white" /> {item.l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white">Resources</h4>
             <ul className="space-y-3 text-sm">
              {[
                { l: 'News & Events', p: Page.NEWS },
                { l: 'Notices', p: Page.NOTICES },
                { l: 'Downloads', p: Page.DOWNLOADS },
                { l: 'Careers', p: Page.CAREERS },
                { l: 'FAQ', p: Page.FAQ },
                { l: 'Privacy Policy', p: Page.PRIVACY },
              ].map((item, i) => (
                <li key={i}>
                  <button onClick={() => onNavigate(item.p)} className="flex items-center text-primary-200 hover:text-white hover:translate-x-1 transition-all group">
                    <ChevronRight size={14} className="mr-2 text-primary-500 group-hover:text-white" /> {item.l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-primary-100">123 Education Lane,<br/>Knowledge Park, Cityville, ST 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-primary-400 flex-shrink-0" />
                <span className="text-primary-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-primary-400 flex-shrink-0" />
                <span className="text-primary-100">info@excellence.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-400 text-sm">
            &copy; {new Date().getFullYear()} Excellence Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-400">
             <button onClick={() => onNavigate(Page.PRIVACY)} className="hover:text-white">Privacy Policy</button>
             <button onClick={() => onNavigate(Page.TERMS)} className="hover:text-white">Terms & Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;