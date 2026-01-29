import React from 'react';
import Reveal from '../components/Reveal';
import { BookOpen, Cpu, Globe, PenTool, Calculator, FlaskConical, Languages, Binary } from 'lucide-react';

const Curriculum: React.FC = () => {
  return (
    <div className="bg-transparent">
      {/* Hero */}
      <div className="py-24 bg-primary-900 text-white text-center rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
            <Reveal direction="down">
              <h1 className="text-5xl font-display font-bold mb-4">Our Curriculum</h1>
              <p className="text-xl text-primary-200">A blend of tradition and innovation.</p>
            </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Core Subjects */}
        <section>
           <Reveal className="mb-12 text-center">
              <h2 className="text-3xl font-display font-bold text-primary-900">Academic Structure</h2>
              <p className="text-slate-600">Comprehensive subject offerings for every grade level.</p>
           </Reveal>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Primary */}
              <Reveal className="bg-white rounded-3xl shadow-lg border-t-4 border-accent-500 hover:shadow-2xl transition-all overflow-hidden">
                 <div className="h-40 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Primary" className="w-full h-full object-cover" />
                 </div>
                 <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary-900 mb-2">Primary (Grades 1-5)</h3>
                    <p className="text-slate-500 mb-6 text-sm">Foundational literacy & numeracy.</p>
                    <ul className="space-y-3">
                        {[
                        { icon: Languages, text: "English, Hindi, Regional Lang" },
                        { icon: Calculator, text: "Mathematics" },
                        { icon: Globe, text: "Environmental Studies" },
                        { icon: PenTool, text: "Arts & Crafts" },
                        { icon: Cpu, text: "Intro to Computers" },
                        ].map((sub, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                            <div className="text-accent-600"><sub.icon size={18} /></div>
                            <span className="font-medium">{sub.text}</span>
                        </li>
                        ))}
                    </ul>
                 </div>
              </Reveal>

              {/* Middle */}
              <Reveal delay={0.1} className="bg-white rounded-3xl shadow-lg border-t-4 border-primary-500 hover:shadow-2xl transition-all overflow-hidden">
                 <div className="h-40 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1510531704581-5b2870972060?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Middle" className="w-full h-full object-cover" />
                 </div>
                 <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary-900 mb-2">Middle (Grades 6-8)</h3>
                    <p className="text-slate-500 mb-6 text-sm">Exploration & critical thinking.</p>
                    <ul className="space-y-3">
                        {[
                        { icon: Languages, text: "English, Hindi, 3rd Lang" },
                        { icon: Calculator, text: "Algebra & Geometry" },
                        { icon: FlaskConical, text: "Physics, Chem, Biology" },
                        { icon: Globe, text: "History, Civics, Geography" },
                        { icon: Binary, text: "Coding (Python Basics)" },
                        ].map((sub, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                            <div className="text-primary-600"><sub.icon size={18} /></div>
                            <span className="font-medium">{sub.text}</span>
                        </li>
                        ))}
                    </ul>
                 </div>
              </Reveal>

              {/* Secondary */}
              <Reveal delay={0.2} className="bg-white rounded-3xl shadow-lg border-t-4 border-accent-500 hover:shadow-2xl transition-all overflow-hidden">
                 <div className="h-40 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Secondary" className="w-full h-full object-cover" />
                 </div>
                 <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary-900 mb-2">Secondary (Grades 9-12)</h3>
                    <p className="text-slate-500 mb-6 text-sm">Specialization & career readiness.</p>
                    <ul className="space-y-3">
                        {[
                        { icon: FlaskConical, text: "Science (PCM / PCB)" },
                        { icon: Calculator, text: "Commerce & Accounts" },
                        { icon: BookOpen, text: "Humanities & Arts" },
                        { icon: Cpu, text: "Computer Science / IP" },
                        { icon: Binary, text: "AI & Data Science" },
                        ].map((sub, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                            <div className="text-accent-600"><sub.icon size={18} /></div>
                            <span className="font-medium">{sub.text}</span>
                        </li>
                        ))}
                    </ul>
                 </div>
              </Reveal>
           </div>
        </section>

        {/* Future Ready Curriculum */}
        <section className="bg-primary-50 rounded-[3rem] p-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-accent-200/50 rounded-full blur-3xl"></div>
           <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
              <Reveal className="md:w-1/2">
                 <div className="inline-block px-4 py-1.5 bg-primary-900 text-white text-sm font-bold uppercase rounded-full mb-4">New for Grade 5+</div>
                 <h2 className="text-4xl font-display font-bold text-primary-900 mb-6">Future-Ready Skills</h2>
                 <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    We have integrated a cutting-edge technology curriculum starting from Grade 5. Students are not just consumers of technology but creators.
                 </p>
                 <ul className="space-y-4">
                    {[
                       { title: "Artificial Intelligence", desc: "Understanding machine learning basics and ethics." },
                       { title: "Robotics", desc: "Hands-on building and programming of automated bots." },
                       { title: "App Development", desc: "Creating functional mobile applications." },
                       { title: "Financial Literacy", desc: "Basics of saving, investing, and digital economy." }
                    ].map((item, i) => (
                       <li key={i} className="flex gap-4">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent-600 shadow-sm font-bold">{i+1}</div>
                          <div>
                             <h4 className="font-bold text-primary-900">{item.title}</h4>
                             <p className="text-sm text-slate-500">{item.desc}</p>
                          </div>
                       </li>
                    ))}
                 </ul>
              </Reveal>
              <Reveal direction="left" className="md:w-1/2">
                 <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Robotics" className="rounded-3xl shadow-2xl border-8 border-white" />
              </Reveal>
           </div>
        </section>

      </div>
    </div>
  );
};

export default Curriculum;