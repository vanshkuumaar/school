import React from 'react';
import { Eye, Target, Quote, Award, Heart, Shield } from 'lucide-react';
import Reveal from '../components/Reveal';

const About: React.FC = () => {
  return (
    <div className="bg-transparent">
      {/* Header */}
      <div className="relative py-24 px-4 overflow-hidden bg-slate-900 text-white rounded-b-[3rem] shadow-2xl mb-12">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b955?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30"></div>
         <div className="relative z-10 text-center max-w-4xl mx-auto">
            <Reveal direction="down">
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">About Us</h1>
              <p className="text-xl text-primary-100 font-light">Dedicated to excellence since 1995. Building character, one student at a time.</p>
            </Reveal>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        
        {/* History */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <h2 className="text-primary-600 font-bold uppercase tracking-widest mb-2">Our History</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">25 Years of Impact</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                What started as a small community initiative in 1995 has blossomed into one of the region's most respected educational institutions. 
              </p>
              <p>
                From our humble beginnings with just 50 students, Excellence Academy now serves a diverse body of over 1,200 scholars. Our growth is a testament to our unwavering commitment to quality education and moral values.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" className="relative">
             <div className="absolute top-0 right-0 w-full h-full bg-primary-100 rounded-3xl transform translate-x-6 translate-y-6"></div>
             <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="History" className="relative rounded-3xl shadow-xl w-full object-cover h-[400px]" />
          </Reveal>
        </section>

        {/* Vision & Mission Cards - Added Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal direction="up" delay={0.1} className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden group">
            <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Vision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10">
                <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center text-primary-600 mb-6 -mt-16 relative z-10 border-4 border-white">
                <Eye size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                To be the gold standard in holistic education, where academic rigor meets emotional intelligence, creating leaders who transform the world.
                </p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.2} className="bg-slate-900 rounded-3xl shadow-xl overflow-hidden group">
             <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Mission" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10">
                <div className="bg-primary-700 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 -mt-16 relative z-10 border-4 border-slate-900">
                <Target size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">Our Mission</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                Cultivating an environment of curiosity and integrity. We strive to empower every student with the tools to innovate, adapt, and succeed.
                </p>
            </div>
          </Reveal>
        </section>
        
        {/* Core Values - Added Background Image Effect */}
        <section className="relative py-12">
            <div className="absolute inset-0 bg-primary-50 rounded-[3rem] -z-10"></div>
            <div className="text-center mb-12">
                <Reveal direction="up">
                    <h2 className="text-4xl font-display font-bold text-slate-900">Core Values</h2>
                </Reveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                {[
                    { icon: Award, title: "Excellence", desc: "We strive for the highest standards in everything we do.", img: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                    { icon: Heart, title: "Integrity", desc: "We act with honesty and strong moral principles.", img: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                    { icon: Shield, title: "Respect", desc: "We value every individual and celebrate diversity.", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                ].map((val, i) => (
                    <Reveal key={i} delay={i * 0.1} className="bg-white rounded-2xl shadow-lg border border-slate-50 overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                        <div className="h-32 overflow-hidden">
                             <img src={val.img} alt={val.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-8 relative">
                            <div className="w-14 h-14 bg-white text-primary-600 rounded-full flex items-center justify-center absolute -top-7 right-6 shadow-md">
                                <val.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{val.title}</h3>
                            <p className="text-slate-600">{val.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>

        {/* Principal Message */}
        <Reveal direction="up" className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-[3rem] p-12 text-white relative overflow-hidden">
           <Quote size={200} className="absolute top-0 right-0 text-white/10 -rotate-12 transform translate-x-10 -translate-y-10" />
           <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
             <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Principal" className="w-48 h-48 rounded-full border-4 border-white/30 object-cover shadow-2xl" />
             <div className="flex-1 text-center md:text-left">
               <h3 className="text-3xl font-display font-bold mb-4">Principal's Message</h3>
               <p className="text-primary-100 text-lg italic mb-6">
                 "At Excellence Academy, we don't just prepare students for exams; we prepare them for life. Education is the kindling of a flame, not the filling of a vessel. Every child has a unique spark, and it is our privilege to help it grow into a roaring fire."
               </p>
               <div>
                 <p className="font-bold text-xl">Dr. Eleanor Sterling</p>
                 <p className="text-primary-200">Principal</p>
               </div>
             </div>
           </div>
        </Reveal>
      </div>
    </div>
  );
};

export default About;