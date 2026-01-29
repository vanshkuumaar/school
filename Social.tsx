import React from 'react';
import Reveal from '../components/Reveal';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Social: React.FC = () => {
  return (
    <div className="bg-transparent">
       <div className="py-24 bg-primary-900 text-white text-center rounded-b-[3rem] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10">
             <Reveal direction="down">
               <h1 className="text-5xl font-display font-bold mb-4">Connect With Us</h1>
               <p className="text-xl text-primary-200">Follow our journey on social media.</p>
             </Reveal>
          </div>
       </div>

       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
             {[
                { name: "Facebook", handle: "@ExcellenceAcademy", icon: Facebook, color: "bg-[#1877F2]", desc: "Daily updates & photos" },
                { name: "Instagram", handle: "@excellence_edu", icon: Instagram, color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]", desc: "Student life stories" },
                { name: "Twitter", handle: "@excellence_sch", icon: Twitter, color: "bg-[#1DA1F2]", desc: "News & announcements" },
                { name: "LinkedIn", handle: "Excellence Academy", icon: Linkedin, color: "bg-[#0A66C2]", desc: "Professional network" },
                { name: "YouTube", handle: "Excellence TV", icon: Youtube, color: "bg-[#FF0000]", desc: "Event videos & lectures" },
             ].map((social, i) => (
                <Reveal key={i} delay={i * 0.1} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform group cursor-pointer">
                   <div className={`w-16 h-16 ${social.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                      <social.icon size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900">{social.name}</h3>
                   <p className="text-primary-600 font-medium mb-2">{social.handle}</p>
                   <p className="text-slate-500 text-sm">{social.desc}</p>
                   <button className="mt-6 w-full py-2 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors">Follow</button>
                </Reveal>
             ))}
          </div>

          <Reveal className="mt-20 bg-primary-50 p-10 rounded-[3rem] text-center">
             <h2 className="text-3xl font-display font-bold text-primary-900 mb-4">Stay in the Loop</h2>
             <p className="text-slate-600 mb-8 max-w-lg mx-auto">Subscribe to our monthly newsletter for curated updates, achievements, and educational insights.</p>
             <form className="max-w-md mx-auto flex gap-4" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                <button className="px-8 py-3 bg-primary-900 text-white font-bold rounded-full hover:bg-accent-500 hover:text-primary-900 transition-colors shadow-lg">Subscribe</button>
             </form>
          </Reveal>
       </div>
    </div>
  );
};

export default Social;