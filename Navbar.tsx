import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';
import { Page, NavItem } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: NavItem[] = [
  { label: 'Home', page: Page.HOME },
  { 
    label: 'About', 
    page: Page.ABOUT,
    children: [
      { label: 'Our Story', page: Page.ABOUT },
      { label: 'Performance Stats', page: Page.STATISTICS },
      { label: 'Leadership & Toppers', page: Page.FACULTY },
      { label: 'Careers', page: Page.CAREERS },
    ]
  },
  { 
    label: 'Academics', 
    page: Page.ACADEMICS,
    children: [
      { label: 'Overview', page: Page.ACADEMICS },
      { label: 'Curriculum & AI', page: Page.CURRICULUM },
      { label: 'Downloads', page: Page.DOWNLOADS },
    ]
  },
  { 
    label: 'Admissions', 
    page: Page.ADMISSIONS,
    children: [
      { label: 'Apply Now', page: Page.ADMISSIONS },
      { label: 'FAQ', page: Page.FAQ },
    ]
  },
  { 
    label: 'Campus', 
    page: Page.FACILITIES,
    children: [
      { label: 'Facilities', page: Page.FACILITIES },
      { label: 'Gallery', page: Page.GALLERY },
    ]
  },
  { 
    label: 'Community', 
    page: Page.STUDENT_LIFE,
    children: [
      { label: 'Student Life', page: Page.STUDENT_LIFE },
      { label: 'News & Events', page: Page.NEWS },
      { label: 'Social Hub', page: Page.SOCIAL },
      { label: 'Testimonials', page: Page.TESTIMONIALS },
    ]
  },
  { label: 'Contact', page: Page.CONTACT },
];

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  const isSectionActive = (item: NavItem) => {
    if (currentPage === item.page) return true;
    if (item.children) {
      return item.children.some(child => child.page === currentPage);
    }
    return false;
  };

  return (
    <nav ref={navRef} className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick(Page.HOME)}>
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="bg-primary-900 p-2.5 rounded-xl text-accent-500 shadow-xl border border-accent-500/20 group-hover:scale-105 transition-transform duration-300">
                <GraduationCap size={32} />
              </div>
              <div>
                <h1 className={`font-display text-2xl font-bold leading-none tracking-tight transition-colors ${scrolled ? 'text-primary-900' : 'text-primary-900'}`}>Excellence</h1>
                <p className="text-xs font-sans tracking-[0.25em] uppercase text-accent-600 font-bold mt-0.5">Academy</p>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => !item.children && handleNavClick(item.page)}
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                    isSectionActive(item)
                      ? 'text-primary-900 bg-accent-100/50'
                      : 'text-slate-600 hover:text-primary-900 hover:bg-white/50'
                  }`}
                >
                  {item.label} 
                  {item.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 text-accent-600" />}
                </button>
                
                {/* Dropdown Content */}
                {item.children && (
                  <div 
                    className={`absolute top-full left-0 mt-3 w-60 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 transform z-50 p-2 ${activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}`}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.children.map(child => (
                      <button
                        key={child.page}
                        onClick={(e) => { e.stopPropagation(); handleNavClick(child.page); }}
                        className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all hover:bg-primary-50 hover:text-primary-900 font-medium ${
                          currentPage === child.page ? 'text-primary-900 bg-primary-50' : 'text-slate-500'
                        }`}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button 
              onClick={() => handleNavClick(Page.ADMISSIONS)}
              className="ml-6 px-7 py-3 bg-primary-900 text-white text-sm font-bold rounded-full shadow-lg shadow-primary-900/20 hover:bg-accent-500 hover:text-primary-900 hover:scale-105 transition-all duration-300 ring-2 ring-offset-2 ring-transparent hover:ring-accent-500"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full bg-white shadow-sm text-primary-900 hover:text-accent-600 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`xl:hidden fixed inset-0 z-40 bg-white/98 backdrop-blur-xl transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
        <div className="flex flex-col min-h-full pt-28 px-6 pb-10 space-y-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100 pb-2">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="w-full text-2xl font-display font-bold text-left py-2 text-primary-900 flex justify-between items-center"
                    >
                      {item.label}
                      <ChevronDown size={24} className={`text-accent-500 transform transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.label ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-4 space-y-2 bg-slate-50 rounded-2xl p-4">
                        {item.children.map(child => (
                           <button
                            key={child.page}
                            onClick={() => handleNavClick(child.page)}
                            className={`block w-full text-lg font-medium text-left py-2 px-3 rounded-lg transition-colors ${
                              currentPage === child.page ? 'text-primary-900 bg-white shadow-sm' : 'text-slate-500'
                            }`}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.page)}
                    className={`w-full text-2xl font-display font-bold text-left py-2 ${
                      currentPage === item.page ? 'text-accent-600' : 'text-primary-900'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            <button 
              onClick={() => handleNavClick(Page.ADMISSIONS)}
              className="mt-8 w-full py-5 bg-primary-900 text-white text-xl font-bold rounded-2xl shadow-xl hover:bg-accent-500 hover:text-primary-900 transition-all duration-300"
            >
              Apply for Admission
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;