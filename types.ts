import { LucideIcon } from 'lucide-react';

export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  STATISTICS = 'statistics', // New
  ACADEMICS = 'academics',
  CURRICULUM = 'curriculum', // New
  FACILITIES = 'facilities',
  ADMISSIONS = 'admissions',
  GALLERY = 'gallery',
  CONTACT = 'contact',
  FACULTY = 'faculty',
  STUDENT_LIFE = 'student-life',
  SOCIAL = 'social', // New
  NEWS = 'news', 
  NOTICES = 'notices',
  TESTIMONIALS = 'testimonials',
  FAQ = 'faq',
  CAREERS = 'careers',
  DOWNLOADS = 'downloads',
  PRIVACY = 'privacy',
  TERMS = 'terms',
}

export interface NavItem {
  label: string;
  page: Page;
  children?: { label: string; page: Page }[];
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
}