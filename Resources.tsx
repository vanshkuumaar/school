import React, { useState } from 'react';
import Reveal from '../components/Reveal';
import { Download, ChevronDown, ChevronUp, Briefcase, FileText, Quote, Star, HelpCircle } from 'lucide-react';
import { Page } from '../types';

interface ResourcesProps {
  section: Page;
}

const Resources: React.FC<ResourcesProps> = ({ section }) => {
  
  // -- Testimonials Component --
  if (section === Page.TESTIMONIALS) {
    const reviews = [
       { name: "John Smith", role: "Parent, Grade 5", text: "The holistic development approach at Excellence Academy is remarkable. My son has grown not just academically but as a confident individual." },
       { name: "Priya Patel", role: "Alumni, Class of 2018", text: "The foundation I built here helped me secure a scholarship at a top university. Forever grateful to the faculty." },
       { name: "David Wilson", role: "Student, Grade 10", text: "The labs and sports facilities are amazing. I love coming to school every day!" },
       { name: "Anita Roy", role: "Parent, Kindergarten", text: "The teachers are so caring and attentive. My daughter has learned so much in just one year." },
       { name: "Robert Fox", role: "Alumni, Class of 2015", text: "Excellence Academy taught me discipline and leadership. These skills serve me well in my corporate career today." },
       { name: "Sarah Connor", role: "Student Council Head", text: "Being part of the student council here has been a life-changing experience. The school truly empowers student voices." },
    ];
    return (
       <div className="bg-transparent">
          <div className="py-24 bg-primary-900 text-white text-center rounded-b-[3rem] relative overflow-hidden mb-12">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
             <div className="relative z-10">
                <Reveal direction="down">
                   <h1 className="text-5xl font-display font-bold mb-4">Voices of Excellence</h1>
                   <p className="text-xl text-primary-200">Hear from our students, parents, and alumni.</p>
                </Reveal>
             </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 pb-20">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((r, i) => (
                   <Reveal key={i} delay={i * 0.1} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 relative hover:-translate-y-1 transition-transform">
                      <Quote className="absolute top-6 right-6 text-primary-100" size={40} />
                      <div className="flex gap-1 text-accent-500 mb-6"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
                      <p className="text-slate-600 mb-8 italic relative z-10 leading-relaxed">"{r.text}"</p>
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 font-bold text-lg">
                            {r.name.charAt(0)}
                         </div>
                         <div>
                            <p className="font-bold text-slate-900">{r.name}</p>
                            <p className="text-sm text-primary-600">{r.role}</p>
                         </div>
                      </div>
                   </Reveal>
                ))}
             </div>
          </div>
       </div>
    );
  }

  // -- Downloads Component --
  if (section === Page.DOWNLOADS) {
    const files = [
       { name: "School Prospectus 2024-25", size: "2.5 MB", type: "Brochure" },
       { name: "Admission Application Form", size: "1.2 MB", type: "Form" },
       { name: "Academic Calendar", size: "0.8 MB", type: "Schedule" },
       { name: "Transport Route Map", size: "1.5 MB", type: "Map" },
       { name: "Code of Conduct", size: "0.5 MB", type: "Policy" },
       { name: "Medical History Form", size: "0.4 MB", type: "Form" },
    ];
    return (
       <div className="bg-transparent">
          <div className="py-24 bg-primary-900 text-white text-center rounded-b-[3rem] relative overflow-hidden mb-12">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
             <div className="relative z-10">
                <Reveal direction="down">
                   <h1 className="text-5xl font-display font-bold mb-4">Downloads Center</h1>
                   <p className="text-xl text-primary-200">Access important documents, forms, and schedules.</p>
                </Reveal>
             </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 pb-20">
             <div className="grid gap-4">
                {files.map((file, i) => (
                   <Reveal key={i} delay={i * 0.05} direction="left" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center justify-between hover:shadow-lg transition-all group">
                      <div className="flex items-center gap-6 w-full sm:w-auto">
                         <div className="bg-red-50 p-4 rounded-xl text-red-500 group-hover:scale-110 transition-transform"><FileText size={28} /></div>
                         <div>
                            <h3 className="font-bold text-slate-900 text-lg">{file.name}</h3>
                            <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                               <span className="bg-slate-100 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">{file.type}</span>
                               <span>PDF • {file.size}</span>
                            </div>
                         </div>
                      </div>
                      <button className="mt-4 sm:mt-0 w-full sm:w-auto px-6 py-3 bg-primary-50 text-primary-700 font-bold rounded-xl hover:bg-primary-600 hover:text-white transition-all flex items-center justify-center gap-2">
                         <Download size={20} /> Download
                      </button>
                   </Reveal>
                ))}
             </div>
          </div>
       </div>
    );
  }

  // -- FAQ Component --
  if (section === Page.FAQ) {
     const faqs = [
        { q: "What is the admission procedure?", a: "Admission is based on an entrance test followed by an interview for higher grades. For Kindergarten, we have an interaction session with parents and the child. Forms can be filled out online." },
        { q: "Do you provide transport facilities?", a: "Yes, we have a fleet of GPS-enabled AC buses covering the entire city. Routes and timings are available in the transport office." },
        { q: "What is the student-teacher ratio?", a: "We maintain a healthy ratio of 1:20 to ensure personal attention for every child, fostering a better learning environment." },
        { q: "Are there scholarship programs?", a: "Yes, merit-based scholarships are available for deserving students in academics and sports. Financial aid is also considered on a case-by-case basis." },
        { q: "What medical facilities are available?", a: "We have a fully equipped infirmary with a qualified nurse available throughout school hours. We also have tie-ups with nearby hospitals for emergencies." },
        { q: "Is there a day-boarding facility?", a: "Yes, we offer optional day-boarding facilities with lunch and homework supervision for working parents." },
     ];
     
     return (
        <div className="bg-transparent">
           <div className="py-24 bg-primary-900 text-white text-center rounded-b-[3rem] relative overflow-hidden mb-12">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
             <div className="relative z-10">
                <Reveal direction="down">
                   <h1 className="text-5xl font-display font-bold mb-4">Frequently Asked Questions</h1>
                   <p className="text-xl text-primary-200">Find answers to common queries.</p>
                </Reveal>
             </div>
          </div>

           <div className="max-w-3xl mx-auto px-4 pb-20">
              <div className="space-y-6">
                 {faqs.map((faq, i) => (
                    <Reveal key={i} direction="up" delay={i*0.1} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                       <div className="flex gap-4">
                          <div className="flex-shrink-0 mt-1 text-accent-500"><HelpCircle size={24} /></div>
                          <div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3">{faq.q}</h3>
                            <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                          </div>
                       </div>
                    </Reveal>
                 ))}
              </div>
           </div>
        </div>
     );
  }

  // -- Careers Component --
  if (section === Page.CAREERS) {
     const jobs = [
        { title: "Senior Mathematics Teacher", type: "Full Time", exp: "5+ Years", dept: "High School" },
        { title: "Physics Lab Assistant", type: "Full Time", exp: "2+ Years", dept: "Science" },
        { title: "Front Desk Executive", type: "Full Time", exp: "1+ Years", dept: "Administration" },
        { title: "Sports Coach (Swimming)", type: "Part Time", exp: "3+ Years", dept: "Sports" },
     ];
     return (
        <div className="bg-transparent">
           <div className="py-24 bg-primary-900 text-white text-center rounded-b-[3rem] relative overflow-hidden mb-12">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
             <div className="relative z-10">
                <Reveal direction="down">
                   <h1 className="text-5xl font-display font-bold mb-4">Work With Us</h1>
                   <p className="text-xl text-primary-200">Join a team dedicated to shaping the future.</p>
                </Reveal>
             </div>
          </div>

           <div className="max-w-4xl mx-auto px-4 pb-20">
              <div className="space-y-6">
                 {jobs.map((job, i) => (
                    <Reveal key={i} direction="up" className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-shadow">
                       <div>
                          <h3 className="font-bold text-2xl text-slate-900 mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                             <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full"><Briefcase size={14} /> {job.dept}</span>
                             <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">Type: {job.type}</span>
                             <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">Exp: {job.exp}</span>
                          </div>
                       </div>
                       <button className="px-8 py-3 bg-primary-900 text-white font-bold rounded-xl hover:bg-accent-500 hover:text-primary-900 transition-colors shadow-lg">
                          Apply Now
                       </button>
                    </Reveal>
                 ))}
              </div>
           </div>
        </div>
     );
  }

  return null;
};

export default Resources;