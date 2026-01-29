import React from 'react';
import Reveal from '../components/Reveal';
import { Music, Code, Users, Award, Heart, Globe, Leaf, Sun } from 'lucide-react';

const StudentLife: React.FC = () => {
  return (
    <div className="bg-transparent">
       <div className="py-24 bg-slate-900 text-white text-center rounded-b-[3rem] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10">
             <Reveal direction="down">
               <h1 className="text-5xl font-display font-bold mb-4">Student Life</h1>
               <p className="text-xl text-primary-200">Beyond academics: Clubs, Culture, and Community.</p>
             </Reveal>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
          
          {/* Culture Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <Reveal direction="left">
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">A Vibrant Culture</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                   Life at Excellence Academy is a vibrant mix of academic pursuit and creative expression. We believe in fostering an inclusive environment where every student feels valued and inspired to explore their passions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-primary-50 p-4 rounded-xl">
                      <Heart className="text-primary-600 mb-2" />
                      <h4 className="font-bold text-slate-900">Inclusivity</h4>
                   </div>
                   <div className="bg-accent-50 p-4 rounded-xl">
                      <Globe className="text-accent-600 mb-2" />
                      <h4 className="font-bold text-slate-900">Global Outlook</h4>
                   </div>
                </div>
             </Reveal>
             <Reveal direction="right">
                <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Student Life" className="rounded-3xl shadow-2xl w-full h-[400px] object-cover" />
             </Reveal>
          </section>

          {/* Clubs Grid */}
          <section>
             <Reveal direction="up" className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-slate-900">Clubs & Societies</h2>
                <p className="text-slate-600 mt-2">Find your tribe and sharpen your skills.</p>
             </Reveal>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                   { icon: Code, title: "Robotics & AI", desc: "Building the future, one bot at a time.", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                   { icon: Music, title: "Music & Drama", desc: "Orchestra, choir, and theatre productions.", img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                   { icon: Users, title: "Debating Society", desc: "Fostering critical thinking and eloquence.", img: "https://images.unsplash.com/photo-1577985051167-0d49eec21977?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                   { icon: Award, title: "Model UN", desc: "Simulating global diplomacy.", img: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                   { icon: Heart, title: "Community Service", desc: "Giving back to society.", img: "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                   { icon: Leaf, title: "Eco Warriors", desc: "Sustainability and green initiatives.", img: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e10?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }, // Replaced Image
                ].map((club, i) => (
                   <Reveal key={i} delay={i * 0.1} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
                      <div className="h-48 overflow-hidden relative">
                         <img src={club.img} alt={club.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                         <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-xl text-primary-600 shadow-sm">
                            <club.icon size={24} />
                         </div>
                      </div>
                      <div className="p-6">
                         <h3 className="text-xl font-bold text-slate-900 mb-2">{club.title}</h3>
                         <p className="text-slate-500 text-sm">{club.desc}</p>
                      </div>
                   </Reveal>
                ))}
             </div>
          </section>

          {/* Traditions Section */}
          <section className="bg-primary-50 rounded-[3rem] p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-200/40 rounded-full blur-3xl"></div>
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                 <Reveal direction="up">
                    <Sun className="mx-auto text-accent-500 mb-6" size={48} />
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Annual Traditions</h2>
                    <p className="text-slate-600 mb-10 text-lg">
                       From the spirited <span className="font-bold text-primary-900">Sports Day</span> in winter to the vibrant <span className="font-bold text-primary-900">Annual Cultural Fest</span> in autumn, our calendar is packed with events that create lifelong memories. The <span className="font-bold text-primary-900">Graduation Ceremony</span> remains the highlight, celebrating the culmination of our students' journey.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                       {["Sports Day", "Annual Fest", "Science Fair", "Graduation"].map((event, i) => (
                          <div key={i} className="bg-white p-4 rounded-xl font-bold text-primary-800 shadow-sm border border-primary-100">
                             {event}
                          </div>
                       ))}
                    </div>
                 </Reveal>
              </div>
          </section>

       </div>
    </div>
  );
};

export default StudentLife;