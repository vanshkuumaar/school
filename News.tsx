import React, { useState } from 'react';
import Reveal from '../components/Reveal';
import { Calendar, Bell, ArrowRight, Clock } from 'lucide-react';
import { Page } from '../types';

interface NewsProps {
  initialTab?: 'news' | 'notices';
}

const News: React.FC<NewsProps> = ({ initialTab = 'news' }) => {
  const [activeTab, setActiveTab] = useState<'news' | 'notices'>(initialTab);

  const events = [
    { id: 1, date: "15 Oct", title: "Annual Science Exhibition", desc: "Showcasing student innovations in robotics and sustainable energy.", img: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 2, date: "22 Oct", title: "Inter-School Sports Meet", desc: "Our athletes compete for the regional championship trophy.", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 3, date: "05 Nov", title: "Cultural Fest 2024", desc: "A week-long celebration of music, dance, and art.", img: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }, // Replaced Image
  ];

  const notices = [
    { id: 1, date: "Oct 10, 2024", title: "Mid-Term Examination Schedule", type: "Exam" },
    { id: 2, date: "Oct 08, 2024", title: "Winter Uniform Policy Update", type: "General" },
    { id: 3, date: "Oct 05, 2024", title: "Parent-Teacher Meeting (Grades 1-5)", type: "Meeting" },
    { id: 4, date: "Oct 01, 2024", title: "Holiday Announcement: Gandhi Jayanti", type: "Holiday" },
  ];

  return (
    <div className="bg-transparent">
       <div className="py-24 bg-slate-900 text-white text-center rounded-b-[3rem] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10">
             <Reveal direction="down">
               <h1 className="text-5xl font-display font-bold mb-4">Updates Center</h1>
               <p className="text-xl text-primary-200">Stay informed about what's happening at Excellence.</p>
             </Reveal>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Tabs */}
          <div className="flex justify-center mb-16">
             <div className="bg-white p-1 rounded-full shadow-md border border-slate-100 inline-flex">
                <button 
                  onClick={() => setActiveTab('news')}
                  className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'news' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  News & Events
                </button>
                <button 
                  onClick={() => setActiveTab('notices')}
                  className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'notices' ? 'bg-primary-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  Notice Board
                </button>
             </div>
          </div>

          {/* Content */}
          {activeTab === 'news' && (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event, i) => (
                   <Reveal key={event.id} delay={i * 0.1} direction="up" className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
                      <div className="h-48 overflow-hidden relative">
                         <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                         <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 px-3 py-1 rounded-lg font-bold text-sm shadow-sm">
                            {event.date}
                         </div>
                      </div>
                      <div className="p-6">
                         <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">{event.title}</h3>
                         <p className="text-slate-500 mb-4 text-sm">{event.desc}</p>
                         <button className="text-primary-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                            Read Details <ArrowRight size={16} />
                         </button>
                      </div>
                   </Reveal>
                ))}
             </div>
          )}

          {activeTab === 'notices' && (
             <div className="max-w-4xl mx-auto space-y-4">
                {notices.map((notice, i) => (
                   <Reveal key={notice.id} delay={i * 0.1} direction="left" className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow group">
                      <div className="flex items-start gap-4">
                         <div className="bg-primary-50 p-3 rounded-full text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                            <Bell size={24} />
                         </div>
                         <div>
                            <h3 className="font-bold text-slate-900 text-lg">{notice.title}</h3>
                            <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                               <span className="flex items-center gap-1"><Calendar size={14} /> {notice.date}</span>
                               <span className="px-2 py-0.5 bg-slate-100 rounded text-xs font-medium uppercase tracking-wide">{notice.type}</span>
                            </div>
                         </div>
                      </div>
                      <button className="hidden sm:block text-slate-300 group-hover:text-primary-600 transition-colors">
                         <ArrowRight size={24} />
                      </button>
                   </Reveal>
                ))}
             </div>
          )}

       </div>
    </div>
  );
};

export default News;