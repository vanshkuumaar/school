import React, { useRef, useLayoutEffect } from 'react';
import { Page } from '../types';
import { BookOpen, Users, Trophy, ArrowRight, Star, Target, Shield, Zap, Quote, ChevronRight, Heart, TrendingUp } from 'lucide-react';
import Reveal from '../components/Reveal';
import { gsap } from 'gsap';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text-item", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.2
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-primary-900">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/50 to-transparent"></div>
           {/* Animated Circles */}
           <div className="absolute top-20 left-20 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
           <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
          <div className="hero-text-item inline-flex items-center gap-2 px-6 py-2 rounded-full border border-accent-500/30 bg-primary-900/50 backdrop-blur-md text-accent-400 font-semibold tracking-wide text-sm uppercase shadow-lg">
            <Star size={14} fill="currentColor" /> Admissions Open for 2024-2025
          </div>
          <h1 className="hero-text-item text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] tracking-tight">
            Excellence in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-accent-500 to-accent-300">Education</span>
          </h1>
          <p className="hero-text-item text-lg md:text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed font-light">
            Nurturing global leaders through a blend of academic rigor, innovative technology, and strong moral values.
          </p>
          <div className="hero-text-item pt-6 flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              onClick={() => onNavigate(Page.ADMISSIONS)}
              className="px-10 py-4 bg-accent-500 hover:bg-white text-primary-900 font-bold text-lg rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              Apply for Admission <ChevronRight size={20} />
            </button>
            <button 
              onClick={() => onNavigate(Page.ACADEMICS)}
              className="px-10 py-4 bg-white/5 hover:bg-primary-800 text-white backdrop-blur-md border border-white/10 text-lg font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Academics
            </button>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <Reveal direction="left">
               <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50 group">
                 <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-lg max-w-xs">
                    <p className="text-5xl font-display font-bold text-primary-900 mb-1">25+</p>
                    <p className="text-slate-600 font-medium uppercase tracking-wider text-sm">Years of Educational Excellence</p>
                 </div>
               </div>
             </Reveal>
             <Reveal direction="right">
               <div className="inline-block p-3 bg-accent-100 rounded-2xl mb-6">
                 <Target className="text-accent-600" size={32} />
               </div>
               <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-6 leading-tight">Empowering Minds, <br/>Shaping Futures.</h2>
               <p className="text-slate-600 text-lg leading-relaxed mb-8">
                 Established in 1995, Excellence Academy has evolved into a premier institution. We integrate traditional values with modern pedagogy, ensuring every student is prepared for the challenges of the 21st century.
               </p>
               <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                    <span className="font-bold text-primary-900">Holistic Curriculum</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                    <span className="font-bold text-primary-900">Global Perspective</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                    <span className="font-bold text-primary-900">Expert Faculty</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                    <span className="font-bold text-primary-900">State-of-art Campus</span>
                  </div>
               </div>
               <button 
                 onClick={() => onNavigate(Page.ABOUT)}
                 className="group inline-flex items-center gap-3 font-bold text-primary-900 border-b-2 border-accent-500 pb-1 hover:text-accent-600 transition-colors"
               >
                 Read Our Story <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
               </button>
             </Reveal>
          </div>
        </div>
      </section>

      {/* 3. ACADEMICS OVERVIEW */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <Reveal direction="up" className="text-center mb-16">
             <span className="text-accent-600 font-bold uppercase tracking-widest text-sm">Academic Pathways</span>
             <h2 className="text-4xl font-display font-bold text-primary-900 mt-2 mb-4">Learning at Every Stage</h2>
             <p className="text-slate-600 max-w-2xl mx-auto">From foundation years to university preparation, our curriculum is tailored for growth.</p>
           </Reveal>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Primary School', range: 'Grades 1-5', desc: 'Focus on literacy, numeracy, and discovery through play-based learning.', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
                { title: 'Middle School', range: 'Grades 6-8', desc: 'Introducing subject specialization and critical thinking skills.', img: 'https://images.unsplash.com/photo-1427504743055-b72976e718eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }, // Replaced Image
                { title: 'Senior School', range: 'Grades 9-12', desc: 'Rigorous preparation for board exams and competitive entrance tests.', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
              ].map((prog, i) => (
                <Reveal key={i} delay={i * 0.1} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                   <div className="h-60 overflow-hidden relative">
                     <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-primary-900/0 transition-colors z-10"></div>
                     <img src={prog.img} alt={prog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   </div>
                   <div className="p-8">
                     <div className="inline-block px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-xs font-bold uppercase tracking-wide mb-3">{prog.range}</div>
                     <h3 className="text-2xl font-bold text-primary-900 mb-3">{prog.title}</h3>
                     <p className="text-slate-600 mb-6 text-sm leading-relaxed">{prog.desc}</p>
                     <button onClick={() => onNavigate(Page.ACADEMICS)} className="text-primary-900 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                       Learn More <ArrowRight size={16} className="text-accent-500" />
                     </button>
                   </div>
                </Reveal>
              ))}
           </div>
        </div>
      </section>

      {/* 4. FACILITIES OVERVIEW */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="absolute right-0 top-0 w-1/3 h-full bg-primary-50 skew-x-12 translate-x-32 z-0"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
               <Reveal>
                  <h2 className="text-4xl font-display font-bold text-primary-900 mb-4">World-Class Infrastructure</h2>
                  <p className="text-slate-600 max-w-lg">Designed to inspire, our campus features state-of-the-art labs, libraries, and sports arenas.</p>
               </Reveal>
               <Reveal delay={0.2}>
                  <button onClick={() => onNavigate(Page.FACILITIES)} className="mt-4 md:mt-0 px-8 py-3 bg-white border-2 border-primary-100 text-primary-900 font-bold rounded-full hover:border-primary-900 hover:bg-primary-900 hover:text-white transition-all shadow-lg">View All Facilities</button>
               </Reveal>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {[
                 { icon: BookOpen, label: "Digital Library" },
                 { icon: Zap, label: "Robotics Lab" },
                 { icon: Trophy, label: "Sports Complex" },
                 { icon: Users, label: "Smart Classes" },
               ].map((item, i) => (
                 <Reveal key={i} delay={i * 0.1} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm text-center hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl group">
                    <div className="w-20 h-20 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-900 group-hover:text-accent-400 transition-colors duration-300">
                       <item.icon size={36} />
                    </div>
                    <h3 className="font-bold text-primary-900 text-lg">{item.label}</h3>
                 </Reveal>
               ))}
            </div>
         </div>
      </section>

      {/* 5. WHY CHOOSE OUR SCHOOL */}
      <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Reveal direction="down" className="text-center mb-16">
               <h2 className="text-4xl font-display font-bold mb-4">Why Choose Excellence?</h2>
               <p className="text-primary-200">Beyond academics, we focus on building character and competence.</p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { icon: Users, title: "Expert Faculty", desc: "Learned mentors with years of experience and passion for teaching." },
                 { icon: Target, title: "Digital Campus", desc: "Smart classrooms, LMS, and advanced computer labs for tech-savvy learning." },
                 { icon: Star, title: "Personalized Care", desc: "Low student-teacher ratio ensuring individual attention for every child." },
                 { icon: Shield, title: "Safety First", desc: "24/7 CCTV surveillance and GPS-enabled transport for complete security." },
                 { icon: Heart, title: "Holistic Growth", desc: "Equal emphasis on sports, arts, music, and emotional intelligence." },
                 { icon: TrendingUp, title: "Proven Results", desc: "Consistent top rankings in board exams and olympiads year after year." },
               ].map((feat, i) => (
                 <Reveal key={i} delay={i * 0.05} className="flex gap-5 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent-400 group-hover:bg-accent-500 group-hover:text-primary-900 transition-colors duration-300">
                       <feat.icon size={28} />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold mb-2 group-hover:text-accent-400 transition-colors">{feat.title}</h3>
                       <p className="text-primary-200 text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                 </Reveal>
               ))}
            </div>
         </div>
      </section>

      {/* 6. STATS PREVIEW */}
      <section className="py-20 bg-accent-500">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary-900/20">
               {[
                 { num: "100%", label: "Result Success" },
                 { num: "50+", label: "Awards Won" },
                 { num: "25:1", label: "Student Ratio" },
                 { num: "1200+", label: "Happy Students" },
               ].map((stat, i) => (
                 <Reveal key={i} delay={i * 0.1} className="p-4">
                    <div className="text-5xl md:text-6xl font-display font-bold text-primary-900 mb-2">{stat.num}</div>
                    <div className="text-primary-900/80 uppercase tracking-widest text-sm font-bold">{stat.label}</div>
                 </Reveal>
               ))}
            </div>
         </div>
      </section>

      {/* 7. NEWS PREVIEW */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900">Latest Updates</h2>
               <button onClick={() => onNavigate(Page.NEWS)} className="text-primary-900 font-bold border-b-2 border-accent-500 hover:text-accent-600 transition-colors">View All News</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { date: "15 Oct", title: "Annual Science Exhibition 2024", desc: "Students showcased innovative AI & Robotics projects." },
                 { date: "22 Oct", title: "Inter-School Football Championship", desc: "Our U-16 team secures the regional trophy." },
                 { date: "05 Nov", title: "Cultural Fest: 'Harmony'", desc: "A week-long celebration of music, dance, and art." }
               ].map((news, i) => (
                 <Reveal key={i} delay={i * 0.1} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="flex gap-4">
                       <div className="flex-shrink-0 w-16 h-16 bg-primary-50 rounded-2xl flex flex-col items-center justify-center text-primary-900">
                          <span className="font-bold text-xl">{news.date.split(' ')[0]}</span>
                          <span className="text-xs uppercase font-bold text-accent-600">{news.date.split(' ')[1]}</span>
                       </div>
                       <div>
                          <h3 className="font-bold text-lg text-primary-900 mb-2 leading-tight">{news.title}</h3>
                          <p className="text-slate-500 text-sm">{news.desc}</p>
                       </div>
                    </div>
                 </Reveal>
               ))}
            </div>
         </div>
      </section>

      {/* 8. TESTIMONIALS PREVIEW */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal direction="up" className="text-center mb-16">
               <h2 className="text-4xl font-display font-bold text-primary-900">Community Voices</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <Reveal className="bg-primary-50 p-10 rounded-[2rem] relative">
                  <Quote className="text-primary-200 absolute top-8 right-8" size={60} />
                  <div className="flex gap-1 text-accent-500 mb-6">
                     {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-700 italic text-lg mb-8 relative z-10">"The holistic environment at Excellence Academy has transformed my child into a confident and curious learner. The focus on values alongside academics is commendable."</p>
                  <div className="flex items-center gap-4">
                     <div className="w-14 h-14 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl">SJ</div>
                     <div>
                        <p className="font-bold text-primary-900 text-lg">Mrs. Sarah Johnson</p>
                        <p className="text-sm text-primary-600">Parent of Grade 5 Student</p>
                     </div>
                  </div>
               </Reveal>
               <Reveal delay={0.1} className="bg-primary-50 p-10 rounded-[2rem] relative">
                  <Quote className="text-primary-200 absolute top-8 right-8" size={60} />
                  <div className="flex gap-1 text-accent-500 mb-6">
                     {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-700 italic text-lg mb-8 relative z-10">"The teachers here are mentors for life. The rigorous academic training combined with the sports facilities helped me secure admission in a top university."</p>
                  <div className="flex items-center gap-4">
                     <div className="w-14 h-14 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl">MC</div>
                     <div>
                        <p className="font-bold text-primary-900 text-lg">Michael Chang</p>
                        <p className="text-sm text-primary-600">Alumni, Batch of 2018</p>
                     </div>
                  </div>
               </Reveal>
            </div>
         </div>
      </section>

      {/* 9. CALL TO ACTION */}
      <section className="py-32 bg-primary-900 relative overflow-hidden">
         <div className="absolute inset-0 bg-accent-500/10"></div>
         <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-accent-500/20 rounded-full blur-3xl"></div>
         <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-primary-500/20 rounded-full blur-3xl"></div>
         
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <Reveal>
               <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">Admissions Open</h2>
               <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">Secure your child's future in an environment that fosters excellence, innovation, and integrity. Limited seats available for the 2024-25 session.</p>
               <button 
                 onClick={() => onNavigate(Page.ADMISSIONS)}
                 className="px-12 py-5 bg-accent-500 text-primary-900 text-xl font-bold rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_40px_rgba(250,204,21,0.4)]"
               >
                 Apply for Admission
               </button>
            </Reveal>
         </div>
      </section>
    </div>
  );
};

export default Home;