import React from 'react';
import { Book, Microscope, Wifi, Dumbbell, Palette, Music, Coffee, CheckCircle, Monitor, MonitorPlay } from 'lucide-react';
import Reveal from '../components/Reveal';

const Facilities: React.FC = () => {
  const facilities = [
    {
      title: "Smart Classrooms",
      subtitle: "Digital Learning Ecosystem",
      description: "Our classrooms are not just rooms but interactive learning hubs. Equipped with 75-inch Interactive Flat Panels (IFPs), surround sound systems, and high-speed internet, we bring concepts to life. Teachers use 3D modules for science, virtual maps for geography, and gamified quizzes to ensure high engagement. Every session is recorded for revision.",
      icon: MonitorPlay,
      features: ["Interactive 4K Flat Panels", "Digital Content Library", "Audio-Visual Aids", "Lecture Recording"],
      images: [
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      align: "left"
    },
    {
      title: "Advanced Computer Labs",
      subtitle: "Coding & Robotics",
      description: "We prepare students for the AI era with three specialized labs: A General IT Lab for basics, a High-Performance Lab for Coding (Python, Java) & Graphic Design, and a Robotics & AI Workshop. Students have 1:1 access to the latest machines, working on Arduino projects, 3D printing, and app development under expert guidance.",
      icon: Monitor,
      features: ["1:1 Student Computer Ratio", "AI & Robotics Kits", "3D Printers", "High-Speed Fiber Net"],
      images: [
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      align: "right"
    },
    {
      title: "The Knowledge Hub",
      subtitle: "Library & Information Center",
      description: "Our dual-story library is the heart of the campus, housing over 25,000 books, international journals, and a digital archive. It features dedicated quiet zones, discussion rooms, and a Kindle corner to foster a love for reading.",
      icon: Book,
      features: ["25,000+ Books", "Digital Access Points", "Quiet Study Zones", "Monthly Book Fair"],
      images: [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      align: "left"
    },
    {
      title: "Scientific Discovery",
      subtitle: "Advanced Laboratories",
      description: "We provide separate, fully-equipped laboratories for Physics, Chemistry, and Biology. Designed with the highest safety standards, these labs encourage hands-on experimentation and scientific inquiry under expert supervision.",
      icon: Microscope,
      features: ["Modern Safety Gear", "Individual Workstations", "Research Grade Equipment", "Smart Interactive Screens"],
      images: [
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      align: "right"
    },
    {
      title: "Champions' Arena",
      subtitle: "Sports Complex",
      description: "Believing in the power of sports to build character, we offer an expansive sports complex featuring an Olympic-size swimming pool, synthetic athletic track, football field, and indoor courts for badminton and basketball.",
      icon: Dumbbell,
      features: ["Olympic Size Pool", "Synthetic Turf", "Indoor Gymnasium", "Professional Coaching"],
      images: [
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Gym
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Sports Field
        "https://images.unsplash.com/photo-1515037028865-0a2a82603f7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"  // Swimming
      ],
      align: "left"
    },
    {
      title: "Creative Arts",
      subtitle: "Studios & Auditorium",
      description: "Creativity finds a home in our expansive Art Studio and acoustically treated Music Rooms. Our 800-seater Auditorium hosts annual days, theatre productions, and international conferences.",
      icon: Palette,
      features: ["800-Seater Auditorium", "Soundproof Music Rooms", "Pottery & Sculpture", "Dance Studio"],
      images: [
        "https://images.unsplash.com/photo-1460661619201-fd61b4d12660?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Painting
        "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Theatre
        "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Music
      ],
      align: "right"
    },
    {
      title: "Student Welfare",
      subtitle: "Cafeteria & Transport",
      description: "We ensure student comfort with a hygienic, nutritionist-planned cafeteria serving healthy meals. Our fleet of GPS-enabled air-conditioned buses ensures safe and comfortable commute for students across the city.",
      icon: Coffee,
      features: ["Healthy Hygienic Food", "GPS Tracked Buses", "Medical Room", "CCTV Surveillance"],
      images: [
        "https://images.unsplash.com/photo-1598449356475-b9f71db7d847?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Healthy Food (Cafeteria)
        "https://images.unsplash.com/photo-1570741037611-183995f3969d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Bus
        "https://images.unsplash.com/photo-1631815588712-784a0befa749?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"  // Medical Checkup
      ],
      align: "left"
    }
  ];

  return (
    <div className="bg-transparent">
      {/* Hero */}
      <div className="relative py-24 bg-primary-900 text-white overflow-hidden mb-12 rounded-b-[3rem]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <Reveal direction="down">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">World Class Facilities</h1>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">
              Our campus blends modern architecture with advanced technology to create an environment where learning knows no bounds.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-32 pb-32">
        {facilities.map((facility, index) => (
          <div key={index} className={`flex flex-col ${facility.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
            
            {/* Text Content */}
            <div className="lg:w-1/2">
              <Reveal direction={facility.align === 'left' ? 'right' : 'left'}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-100 text-primary-900 text-sm font-bold uppercase tracking-wide mb-6">
                  <facility.icon size={18} /> {facility.subtitle}
                </div>
                <h2 className="text-4xl font-display font-bold text-primary-900 mb-6">{facility.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {facility.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {facility.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                      <div className="bg-primary-900 p-1 rounded-full text-accent-500">
                        <CheckCircle size={16} />
                      </div>
                      <span className="text-primary-900 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Image Grid */}
            <div className="lg:w-1/2 w-full">
              <Reveal direction={facility.align === 'left' ? 'left' : 'right'} className="grid grid-cols-2 gap-4">
                 <div className="col-span-2 h-64 rounded-3xl overflow-hidden shadow-2xl group border-4 border-white">
                    <img src={facility.images[0]} alt={facility.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 </div>
                 <div className="h-40 rounded-3xl overflow-hidden shadow-xl group border-4 border-white">
                    <img src={facility.images[1]} alt="Detail 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 </div>
                 <div className="h-40 rounded-3xl overflow-hidden shadow-xl group border-4 border-white">
                    <img src={facility.images[2]} alt="Detail 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 </div>
              </Reveal>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;