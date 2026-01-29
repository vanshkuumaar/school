import React from 'react';
import Reveal from '../components/Reveal';
import { TrendingUp, Users, Award, BookOpen, Medal, Shield, Crown } from 'lucide-react';

const Statistics: React.FC = () => {
  return (
    <div className="bg-transparent">
       <div className="py-24 bg-primary-900 text-white text-center rounded-b-[3rem] relative overflow-hidden">
          <div className="absolute inset-0 bg-accent-500/10 mix-blend-overlay"></div>
          <div className="relative z-10">
             <Reveal direction="down">
               <h1 className="text-5xl font-display font-bold mb-4">Our Achievements</h1>
               <p className="text-xl text-primary-200">Measuring excellence in Academics, Sports, and Leadership.</p>
             </Reveal>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {[
                { label: "Board Pass Rate", val: "100%", icon: TrendingUp },
                { label: "Distinctions", val: "85%", icon: Award },
                { label: "University Admits", val: "98%", icon: BookOpen },
                { label: "Student Strength", val: "1500+", icon: Users },
             ].map((stat, i) => (
                <Reveal key={i} delay={i * 0.1} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
                   <div className="w-14 h-14 mx-auto bg-primary-50 text-primary-900 rounded-full flex items-center justify-center mb-4">
                      <stat.icon size={24} />
                   </div>
                   <div className="text-4xl font-display font-bold text-primary-900 mb-1">{stat.val}</div>
                   <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
                </Reveal>
             ))}
          </div>

          {/* Section Split: Academic Graph vs House Points */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             
             {/* Academic Growth */}
             <Reveal className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
                <div className="flex justify-between items-end mb-8">
                   <div>
                      <h2 className="text-2xl font-display font-bold text-primary-900">Academic Growth</h2>
                      <p className="text-slate-500 text-sm">Average Board Exam Scores (Last 5 Years)</p>
                   </div>
                   <div className="flex gap-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-600"><div className="w-3 h-3 bg-primary-900 rounded-sm"></div> Science</div>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-600"><div className="w-3 h-3 bg-accent-500 rounded-sm"></div> Commerce</div>
                   </div>
                </div>
                
                {/* Interactive Bar Chart */}
                <div className="h-64 flex items-end justify-between gap-2 sm:gap-4 w-full">
                   {['2020', '2021', '2022', '2023', '2024'].map((year, i) => {
                      // Fake data generation
                      const scienceHeight = [65, 72, 78, 85, 92][i]; // percentages
                      const commerceHeight = [60, 68, 75, 82, 88][i]; // percentages
                      
                      return (
                      <div key={i} className="flex-1 flex flex-col justify-end group relative h-full cursor-pointer">
                         {/* Hover Tooltip */}
                         <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-800 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20 shadow-xl whitespace-nowrap transform group-hover:-translate-y-1">
                            <div className="font-bold border-b border-white/20 pb-1 mb-1">{year} Results</div>
                            <div className="flex justify-between gap-4"><span>Science:</span> <span className="font-bold text-accent-400">{scienceHeight}%</span></div>
                            <div className="flex justify-between gap-4"><span>Commerce:</span> <span className="font-bold text-accent-400">{commerceHeight}%</span></div>
                            {/* Arrow */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                         </div>
                         
                         <div className="flex gap-1 sm:gap-2 items-end justify-center w-full h-full px-1">
                            {/* Bar 1 */}
                            <div className="w-full bg-primary-50 rounded-t-md relative overflow-hidden transition-all duration-300 group-hover:bg-primary-100 h-full max-h-full flex items-end">
                                <div style={{ height: `${scienceHeight}%` }} className="w-full bg-primary-900 rounded-t-md transition-all duration-500 ease-out relative group-hover:bg-primary-800"></div>
                            </div>
                            {/* Bar 2 */}
                            <div className="w-full bg-accent-50 rounded-t-md relative overflow-hidden transition-all duration-300 group-hover:bg-accent-100 h-full max-h-full flex items-end">
                                <div style={{ height: `${commerceHeight}%` }} className="w-full bg-accent-500 rounded-t-md transition-all duration-500 ease-out relative group-hover:bg-accent-400"></div>
                            </div>
                         </div>
                         
                         <div className="text-center mt-3 font-bold text-slate-400 text-xs group-hover:text-primary-900 transition-colors">{year}</div>
                      </div>
                   )})}
                </div>
             </Reveal>

             {/* House Championship Leaderboard */}
             <Reveal direction="right" className="bg-primary-900 p-8 rounded-[2rem] shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10"><Shield size={120} /></div>
                <div className="relative z-10">
                   <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                      <Crown className="text-accent-500" /> House Championship
                   </h2>
                   <div className="space-y-5">
                      {[
                         { house: "Vikram (Red)", points: 2450, color: "bg-red-500", w: "95%" },
                         { house: "Ashoka (Green)", points: 2200, color: "bg-green-500", w: "85%" },
                         { house: "Shivaji (Blue)", points: 2150, color: "bg-blue-500", w: "82%" },
                         { house: "Tagore (Yellow)", points: 1980, color: "bg-yellow-500", w: "75%" },
                      ].map((h, i) => (
                         <div key={i}>
                            <div className="flex justify-between text-sm font-bold mb-2">
                               <span>{h.house}</span>
                               <span className="text-accent-400">{h.points} pts</span>
                            </div>
                            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                               <div style={{width: h.w}} className={`h-full ${h.color} rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)] relative`}>
                                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                               </div>
                            </div>
                         </div>
                      ))}
                   </div>
                   <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-primary-200">
                      Live standings for Academic Year 2024-25
                   </div>
                </div>
             </Reveal>
          </div>

          {/* Sports Achievements */}
          <Reveal className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-100">
             <div className="text-center mb-10">
                <h2 className="text-3xl font-display font-bold text-primary-900">Sports Excellence</h2>
                <p className="text-slate-500 mt-2">Medal Tally - Inter-School Championships 2024</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-yellow-50 p-6 rounded-3xl border border-yellow-100 text-center relative overflow-hidden group">
                   <div className="absolute -right-4 -bottom-4 text-yellow-200 opacity-50 group-hover:scale-110 transition-transform"><Medal size={100} /></div>
                   <div className="relative z-10">
                      <div className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">Gold Medals</div>
                      <div className="text-5xl font-display font-bold text-slate-900">24</div>
                      <p className="text-sm text-slate-500 mt-2">Athletics, Swimming, Football</p>
                   </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-center relative overflow-hidden group">
                   <div className="absolute -right-4 -bottom-4 text-slate-200 opacity-50 group-hover:scale-110 transition-transform"><Medal size={100} /></div>
                   <div className="relative z-10">
                      <div className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-2">Silver Medals</div>
                      <div className="text-5xl font-display font-bold text-slate-900">18</div>
                      <p className="text-sm text-slate-500 mt-2">Badminton, Cricket, Chess</p>
                   </div>
                </div>
                <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 text-center relative overflow-hidden group">
                   <div className="absolute -right-4 -bottom-4 text-orange-200 opacity-50 group-hover:scale-110 transition-transform"><Medal size={100} /></div>
                   <div className="relative z-10">
                      <div className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">Bronze Medals</div>
                      <div className="text-5xl font-display font-bold text-slate-900">15</div>
                      <p className="text-sm text-slate-500 mt-2">Basketball, Table Tennis</p>
                   </div>
                </div>
             </div>
          </Reveal>

          {/* University Admissions */}
          <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Higher Education Offers</h2>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                   Our students have secured admissions to prestigious universities globally. Our rigorous academic curriculum combined with holistic development ensures they are ready for the world.
                </p>
                <div className="flex flex-wrap gap-3">
                   {["Stanford", "Oxford", "IIT Bombay", "NUS Singapore", "Delhi University", "Melbourne Univ", "Bits Pilani"].map((uni, i) => (
                      <span key={i} className="px-5 py-2 bg-white text-primary-900 font-bold rounded-full text-sm border border-slate-200 shadow-sm">{uni}</span>
                   ))}
                </div>
             </div>
             <div className="bg-primary-50 p-8 rounded-3xl border border-primary-100 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-900 shadow-sm font-bold text-2xl">98%</div>
                   <div>
                      <h4 className="font-bold text-primary-900 text-lg">College Acceptance Rate</h4>
                      <p className="text-sm text-slate-500">For graduating batch 2023-24</p>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center text-primary-900 shadow-sm font-bold text-2xl">₹5Cr</div>
                   <div>
                      <h4 className="font-bold text-primary-900 text-lg">Total Scholarships</h4>
                      <p className="text-sm text-slate-500">Awarded to our students</p>
                   </div>
                </div>
             </div>
          </Reveal>
       </div>
    </div>
  );
};

export default Statistics;