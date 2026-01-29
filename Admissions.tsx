import React from 'react';
import { ClipboardCheck, FileText, UserCheck, Calendar, Download, ArrowRight, DollarSign, Clock } from 'lucide-react';
import Reveal from '../components/Reveal';

const Admissions: React.FC = () => {
  return (
    <div className="bg-transparent">
      <div className="bg-slate-900 py-24 px-4 text-center relative overflow-hidden rounded-b-[3rem]">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
         <div className="relative z-10 max-w-3xl mx-auto">
             <Reveal direction="up">
                <span className="text-primary-400 font-bold tracking-widest uppercase text-sm mb-4 block">Join Our Family</span>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Admissions</h1>
                <p className="text-xl text-primary-100">Your child's journey to excellence begins here. Applications open for Academic Year 2024-25.</p>
             </Reveal>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Process */}
            <section>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 border-l-8 border-primary-500 pl-6">Admission Process</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: ClipboardCheck,
                    title: "1. Online Registration",
                    desc: "Fill out the inquiry form online or visit the school office to collect the prospectus."
                  },
                  {
                    icon: UserCheck,
                    title: "2. Assessment & Interaction",
                    desc: "Student attends a basic skill assessment (Grades 1+). Parents interact with the Principal."
                  },
                  {
                    icon: FileText,
                    title: "3. Documentation",
                    desc: "Submit birth certificate, transfer certificate, photos, and medical records."
                  },
                  {
                    icon: Calendar,
                    title: "4. Seat Confirmation",
                    desc: "Pay the admission fee within 7 days of selection to secure the seat."
                  }
                ].map((step, index) => (
                  <Reveal key={index} direction="up" delay={index * 0.1} className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 text-primary-600">
                        <step.icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
            
            {/* Criteria */}
            <section>
               <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Eligibility Criteria</h2>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <ul className="space-y-4">
                     <li className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="font-bold text-slate-700">Grade 1</span>
                        <span className="text-slate-600">Child must be 6 years old by March 31st</span>
                     </li>
                     <li className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="font-bold text-slate-700">Kindergarten</span>
                        <span className="text-slate-600">Child must be 4 years old by March 31st</span>
                     </li>
                     <li className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="font-bold text-slate-700">Higher Grades</span>
                        <span className="text-slate-600">Based on previous school report and entrance test</span>
                     </li>
                  </ul>
               </div>
            </section>

            {/* Fee Structure Preview */}
             <section>
               <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Fee Structure Overview</h2>
               <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
                  <p className="text-slate-700 mb-6">Our fee structure is transparent. Detailed breakdown available in the prospectus.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="bg-white p-5 rounded-xl border border-primary-100">
                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">One Time</p>
                        <p className="font-bold text-lg text-primary-900 mb-1">Admission Fee</p>
                        <p className="text-sm text-slate-500">Non-refundable registration charges.</p>
                     </div>
                     <div className="bg-white p-5 rounded-xl border border-primary-100">
                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Quarterly</p>
                        <p className="font-bold text-lg text-primary-900 mb-1">Tuition Fee</p>
                        <p className="text-sm text-slate-500">Covers academics, library, and sports.</p>
                     </div>
                     <div className="bg-white p-5 rounded-xl border border-primary-100">
                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Annually</p>
                        <p className="font-bold text-lg text-primary-900 mb-1">Annual Charges</p>
                        <p className="text-sm text-slate-500">Maintenance, IT, and Lab facilities.</p>
                     </div>
                     <div className="bg-white p-5 rounded-xl border border-primary-100">
                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Optional</p>
                        <p className="font-bold text-lg text-primary-900 mb-1">Transport & Meals</p>
                        <p className="text-sm text-slate-500">Charged based on distance/choice.</p>
                     </div>
                  </div>
               </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Reveal direction="left" className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 sticky top-24">
              <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase mb-4">Status: Open</div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Apply for 2024-25</h3>
              
              <div className="mb-6">
                 <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Clock size={16}/> Important Dates</h4>
                 <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex justify-between"><span>Forms Out:</span> <span>Oct 1st</span></li>
                    <li className="flex justify-between"><span>Submission Deadline:</span> <span>Dec 15th</span></li>
                    <li className="flex justify-between"><span>Entrance Test:</span> <span>Jan 10th</span></li>
                 </ul>
              </div>
              
              <div className="space-y-4">
                <button className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg hover:shadow-primary-500/30 transition-all flex items-center justify-center gap-2 group">
                  <Download size={20} /> Download Prospectus
                </button>
                 <button className="w-full py-4 bg-slate-50 text-slate-900 hover:bg-slate-100 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 group">
                  <DollarSign size={18} /> Full Fee Structure
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Contact Admissions</p>
                <p className="text-lg font-bold text-slate-900">+1 (555) 123-4567</p>
                <p className="text-primary-600">admissions@excellence.edu</p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Admissions;