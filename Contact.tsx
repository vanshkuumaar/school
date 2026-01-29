import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Reveal from '../components/Reveal';

const Contact: React.FC = () => {
  return (
    <div className="bg-transparent">
       <div className="bg-slate-900 py-24 px-4 text-center relative overflow-hidden rounded-b-[3rem]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10">
             <Reveal direction="down">
                <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">Get in Touch</h1>
                <p className="text-xl text-primary-200">We are here to help you.</p>
             </Reveal>
          </div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Info Card */}
          <Reveal direction="left" className="bg-white p-10 rounded-3xl shadow-xl h-full flex flex-col justify-between border border-slate-100">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                   <div className="bg-primary-50 p-4 rounded-2xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                     <MapPin size={28} />
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-900 text-lg">Visit Us</h3>
                     <p className="text-slate-600 mt-1">123 Education Lane,<br/>Knowledge Park, Cityville</p>
                   </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                   <div className="bg-primary-50 p-4 rounded-2xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                     <Phone size={28} />
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-900 text-lg">Call Us</h3>
                     <p className="text-slate-600 mt-1">+1 (555) 123-4567</p>
                   </div>
                </div>

                <div className="flex items-start gap-6 group">
                   <div className="bg-primary-50 p-4 rounded-2xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                     <Mail size={28} />
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-900 text-lg">Email Us</h3>
                     <p className="text-slate-600 mt-1">info@excellence.edu</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="mt-12 h-64 rounded-2xl overflow-hidden shadow-inner bg-slate-100">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1560412335496!5m2!1sen!2sus" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen={true} 
                 loading="lazy"
               ></iframe>
            </div>
          </Reveal>

          {/* Form Card */}
          <Reveal direction="right" className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl h-full">
             <h2 className="text-3xl font-display font-bold mb-2">Send a Message</h2>
             <p className="text-slate-400 mb-8">We usually respond within 24 hours.</p>
             
             <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">First Name</label>
                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                  <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all">
                    <option>Admissions Inquiry</option>
                    <option>General Support</option>
                    <option>Careers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="How can we help?"></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold py-4 rounded-xl shadow-lg transform transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                   <Send size={20} /> Send Message
                </button>
             </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;