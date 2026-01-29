import React, { useState } from 'react';
import { GalleryImage } from '../types';
import Reveal from '../components/Reveal';
import { X } from 'lucide-react';

const images: GalleryImage[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Our Campus' },
  { id: 2, url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Student Life' },
  { id: 3, url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Interactive Learning' },
  { id: 4, url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Tech Lab' },
  { id: 5, url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Library' },
  { id: 6, url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Sports Day' },
  { id: 7, url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Friendships' },
  { id: 8, url: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Annual Concert' },
  { id: 9, url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Art & Craft' },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="bg-transparent min-h-screen">
       <div className="py-24 px-4 text-center">
         <Reveal direction="down">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-4">Our Moments</h1>
            <p className="text-xl text-slate-500">Capturing the spirit of Excellence.</p>
         </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <Reveal key={img.id} delay={index * 0.05} direction="up" className="break-inside-avoid">
              <div 
                className="group relative rounded-2xl overflow-hidden cursor-zoom-in"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-display font-bold text-xl tracking-wide border-b-2 border-primary-500 pb-1">{img.title}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full max-h-screen flex flex-col items-center">
             <button 
              className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors"
              onClick={() => setSelectedImage(null)}
             >
               <X size={40} />
             </button>
             <img 
              src={selectedImage.url} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()} 
             />
             <p className="text-white mt-6 text-2xl font-display font-medium">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;