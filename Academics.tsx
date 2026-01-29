import React from 'react';
import { Book, Microscope, Monitor, Palette, Dumbbell, Music, Check, Brain, ClipboardList } from 'lucide-react';
import Reveal from '../components/Reveal';

const Academics: React.FC = () => {
  return (
    <div className="bg-transparent">
       <div className="relative py-20 bg-slate-900 text-white overflow-hidden mb-12 rounded-b-[3rem]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <Reveal direction="down">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Academic Programs</h1>
            <p className="text-xl text-primary-200">Curiosity. Critical Thinking. Creativity.</p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Curriculum Sections */}
        <div className="space-y-24 mb-32">
          {/* Primary */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <Reveal direction="left" className="md:w-1/2">
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Primary" className="w-full h-[400px] object-cover" />
              </div>
            </Reveal>
            <Reveal direction="right" className="md:w-1/2 space-y-6">
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-bold text-sm uppercase tracking-wide">Grades 1-5</div>
              <h2 className="text-4xl font-display font-bold text-slate-900">Primary Years</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                We lay the groundwork for lifelong learning through a blend of inquiry-based projects and foundational skill building. Children learn to ask "Why?" and "How?".
              </p>
              <h4 className="font-bold text-slate-900">Key Subjects:</h4>
              <ul className="grid grid-cols-2 gap-3">
                {['English & Language Arts', 'Mathematics', 'General Science', 'Social Studies'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                     <span className="bg-green-100 text-green-600 rounded-full p-1"><Check size={14} /></span> {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Secondary */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
             <Reveal direction="right" className="md:w-1/2">
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1427504743055-b72976e718eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Secondary" className="w-full h-[400px] object-cover" />
              </div>
            </Reveal>
            <Reveal direction="left" className="md:w-1/2 space-y-6">
              <div className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full font-bold text-sm uppercase tracking-wide">Grades 6-12</div>
              <h2 className="text-4xl font-display font-bold text-slate-900">Secondary & Higher</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                As intellectual capacity expands, so does our curriculum. We introduce specialized subjects and rigorous analytical frameworks, preparing students for board exams and university.
              </p>
              <h4 className="font-bold text-slate-900">Streams Offered (Grade 11-12):</h4>
              <ul className="grid grid-cols-2 gap-3">
                {['Science (PCM/PCB)', 'Commerce', 'Humanities', 'Computer Science'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                     <span className="bg-green-100 text-green-600 rounded-full p-1"><Check size={14} /></span> {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Methodology & Evaluation */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
           <Reveal className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
              <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
                 <Brain size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Teaching Methodology</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                 We move beyond rote learning. Our approach includes:
              </p>
              <ul className="space-y-2">
                 {['Project-Based Learning', 'Flipped Classrooms', 'Experiential Field Trips', 'Collaborative Group Work'].map(item => (
                    <li className="flex items-center gap-2 text-slate-700"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div> {item}</li>
                 ))}
              </ul>
           </Reveal>

           <Reveal delay={0.1} className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
              <div className="bg-accent-50 w-16 h-16 rounded-2xl flex items-center justify-center text-accent-600 mb-6">
                 <ClipboardList size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Evaluation System</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                 Our continuous assessment model ensures steady progress:
              </p>
              <ul className="space-y-2">
                 {['Formative Assessments (Weekly)', 'Summative Term Exams', 'Portfolio Reviews', 'Practical Lab Tests'].map(item => (
                    <li className="flex items-center gap-2 text-slate-700"><div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div> {item}</li>
                 ))}
              </ul>
           </Reveal>
        </section>

        {/* Co-Curricular Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900">Co-Curricular Activities</h2>
            <p className="text-slate-600 mt-4 text-lg">Developing skills beyond textbooks.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: Monitor, title: 'Coding Club', desc: 'Python, Web Dev, & Robotics', color: 'text-purple-500 bg-purple-50' },
                { icon: Dumbbell, title: 'Sports', desc: 'Football, Swimming, Basketball', color: 'text-orange-500 bg-orange-50' },
                { icon: Palette, title: 'Fine Arts', desc: 'Painting, Sculpture, Craft', color: 'text-pink-500 bg-pink-50' },
                { icon: Music, title: 'Music & Dance', desc: 'Classical & Contemporary', color: 'text-yellow-500 bg-yellow-50' },
                { icon: Book, title: 'Literary Society', desc: 'Debate, Poetry, Journalism', color: 'text-blue-500 bg-blue-50' },
                { icon: Microscope, title: 'Science Club', desc: 'Experiments & Innovation', color: 'text-green-500 bg-green-50' },
            ].map((fac, i) => (
                <Reveal key={i} delay={i * 0.1} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
                   <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${fac.color} group-hover:scale-110 transition-transform`}>
                     <fac.icon size={28} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">{fac.title}</h3>
                   <p className="text-slate-500">{fac.desc}</p>
                </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;