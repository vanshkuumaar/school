import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Curriculum from './pages/Curriculum';
import Facilities from './pages/Facilities';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Faculty from './pages/Faculty';
import StudentLife from './pages/StudentLife';
import Statistics from './pages/Statistics';
import Social from './pages/Social';
import News from './pages/News';
import Resources from './pages/Resources';
import Legal from './pages/Legal';
import CanvasBackground from './components/CanvasBackground';
import ScrollMorphIcon from './components/ScrollMorphIcon'; // New Import
import { Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.HOME);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleNavigate = (page: Page) => {
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
         window.history.pushState(null, '', `#${page}`);
      }, 500);
    }
  };

  useEffect(() => {
    // Adjusted rootMargin for better precision on which section is "active"
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', 
      threshold: 0
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id as Page;
          setActivePage(id);
        }
      });
    }, options);

    Object.values(Page).forEach((page) => {
      const el = document.getElementById(page);
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative bg-slate-50 overflow-x-hidden">
      <CanvasBackground />
      <ScrollMorphIcon /> {/* Added 3D Morphing Icon */}
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar currentPage={activePage} onNavigate={handleNavigate} />
        <main className="flex-grow">
          <section id={Page.HOME}><Home onNavigate={handleNavigate} /></section>
          
          <section id={Page.ABOUT}><About /></section>
          <section id={Page.STATISTICS}><Statistics /></section>
          <section id={Page.FACULTY}><Faculty /></section>
          <section id={Page.CAREERS}><Resources section={Page.CAREERS} /></section>
          
          <section id={Page.ACADEMICS}><Academics /></section>
          <section id={Page.CURRICULUM}><Curriculum /></section>
          
          <section id={Page.ADMISSIONS}><Admissions /></section>
          <section id={Page.DOWNLOADS}><Resources section={Page.DOWNLOADS} /></section>
          <section id={Page.FAQ}><Resources section={Page.FAQ} /></section>
          
          <section id={Page.FACILITIES}><Facilities /></section>
          <section id={Page.GALLERY}><Gallery /></section>
          
          <section id={Page.STUDENT_LIFE}><StudentLife /></section>
          <section id={Page.NEWS}><News initialTab="news" /></section>
          <section id={Page.SOCIAL}><Social /></section>
          <section id={Page.NOTICES}><News initialTab="notices" /></section>
          <section id={Page.TESTIMONIALS}><Resources section={Page.TESTIMONIALS} /></section>
          
          <section id={Page.CONTACT}><Contact /></section>
          
          <section id={Page.PRIVACY}><Legal type={Page.PRIVACY} /></section>
          <section id={Page.TERMS}><Legal type={Page.TERMS} /></section>
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
};

export default App;