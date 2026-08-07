import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Music } from 'lucide-react';

const slides = [
  { url: '/assets/hero/hero1.jpg', caption: 'Our award-winning choir' },
  { url: '/assets/hero/hero2.jpg', caption: 'Proud learners in uniform' },
  { url: '/assets/hero/hero3.jpg', caption: 'Dedicated staff and learners' },
  { url: '/assets/hero/hero4.jpg', caption: 'The spirit of Bizana SSS' },
  { url: '/assets/hero/hero5.jpg', caption: 'Excellence in arts and culture' },
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentIndex];

  return (
    <div className="relative h-[650px] w-full overflow-hidden" style={ { background: '#7B1B2B' } }>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={ { opacity: 0, scale: 1.03 } }
          animate={ { opacity: 1, scale: 1 } }
          exit={ { opacity: 0 } }
          transition={ { duration: 0.8, ease: 'easeOut' } }
          className="absolute inset-0"
        >
          <img
            src={slide.url}
            alt={slide.caption}
            className="h-full w-full object-cover object-center"
            style={ { opacity: 0.45 } }
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0"
            style={ { background: 'linear-gradient(to top, rgba(123,27,43,0.92) 0%, rgba(123,27,43,0.55) 45%, rgba(0,0,0,0.35) 100%)' } } />
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      <div className="absolute bottom-24 left-0 right-0 text-center z-20 px-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={`caption-${currentIndex}`}
            initial={ { opacity: 0, y: 8 } }
            animate={ { opacity: 1, y: 0 } }
            exit={ { opacity: 0, y: -8 } }
            transition={ { duration: 0.35 } }
            className="text-base md:text-lg font-medium tracking-widest uppercase"
            style={ { color: 'rgba(212,175,55,0.85)' } }
          >
            {slide.caption}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        {/* Logo */}
        <motion.div
          initial={ { opacity: 0, scale: 0.9 } }
          animate={ { opacity: 1, scale: 1 } }
          transition={ { duration: 0.5, ease: 'easeOut' } }
          className="mb-5"
        >
          <img
            src="/bizana-logo.jpg"
            alt="Bizana SSS crest"
            className="w-24 h-auto md:w-32 max-h-32 rounded-xl object-contain shadow-2xl mx-auto bg-white px-2 py-1"
            style={ { border: '3px solid #D4AF37' } }
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        </motion.div>

        <motion.h1
          initial={ { opacity: 0, y: 12 } }
          animate={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.5, delay: 0.1 } }
          className="text-4xl md:text-6xl font-extrabold mb-3 uppercase tracking-wider"
          style={ { color: '#D4AF37' } }
        >
          Bizana SSS
        </motion.h1>

        <motion.p
          initial={ { opacity: 0, y: 12 } }
          animate={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.5, delay: 0.18 } }
          className="text-base md:text-xl font-light italic mb-4"
          style={ { color: 'rgba(212,175,55,0.8)' } }
        >
          "Strive for Excellence"
        </motion.p>

        <motion.div
          initial={ { opacity: 0, y: 12 } }
          animate={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.5, delay: 0.22 } }
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37] text-[#7B1B2B] font-extrabold text-xs md:text-sm uppercase tracking-widest shadow-2xl"
        >
          <Music size={18} /> 2026 Provincial SASCE — Champ of Champs
        </motion.div>

        <motion.div
          initial={ { opacity: 0, y: 12 } }
          animate={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.5, delay: 0.26 } }
          className="flex gap-4 flex-wrap justify-center"
        >
          <a href="/admissions"
            className="px-7 py-3 font-bold transition-all rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            style={ { background: '#D4AF37', color: '#7B1B2B' } }
          >
            Apply Now
          </a>
          <a href="/about"
            className="px-7 py-3 font-bold transition-all rounded-lg hover:-translate-y-0.5"
            style={ { border: '2px solid #D4AF37', color: '#D4AF37', background: 'transparent' } }
          >
            About Us
          </a>
        </motion.div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full z-20 transition-all hover:scale-110"
        style={ { background: 'rgba(212,175,55,0.2)', color: '#D4AF37' } }
        aria-label="Previous"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full z-20 transition-all hover:scale-110"
        style={ { background: 'rgba(212,175,55,0.2)', color: '#D4AF37' } }
        aria-label="Next"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30 flex-wrap justify-center max-w-xs">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="h-2 w-2 rounded-full transition-all"
            style={ { background: i === currentIndex ? '#D4AF37' : 'rgba(212,175,55,0.3)' } }
          />
        ))}
      </div>
    </div>
  );
};
