import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Staff', path: '/staff' },
  { name: 'Documents', path: '/documents' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Sport', path: '/sport' },
  { name: 'Activities', path: '/activities' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="w-full sticky top-0 z-50" style={ { background: '#7B1B2B', borderBottom: '3px solid #D4AF37' } }>

      {/* ── Top bar: Logo + School name + Student Portal ── */}
      <div className="w-full" style={ { borderBottom: '1px solid rgba(212,175,55,0.3)' } }>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo + Name */}
            <Link to="/" className="flex items-center gap-3 min-w-0 flex-1">
              <div className="h-11 w-auto max-w-[4.5rem] shrink-0 rounded-lg bg-white flex items-center justify-center overflow-hidden shadow-md px-1" style={ { border: '2px solid #D4AF37' } }>
                <img
                  src="/bizana-logo.jpg"
                  alt="Bizana SSS logo"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div className="min-w-0">
                <span className="md:hidden text-sm font-bold block leading-tight" style={ { color: '#D4AF37' } }>
                  Bizana SSS
                </span>
                <span className="hidden md:block text-base font-bold leading-tight" style={ { color: '#FFFFFF' } }>
                  Bizana Senior Secondary School
                </span>
                <span className="text-xs font-semibold tracking-wide uppercase" style={ { color: 'rgba(212,175,55,0.7)' } }>
                  Strive for Excellence
                </span>
              </div>
            </Link>

            {/* Desktop: Student Portal button */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <Link
                to="/student/login"
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-bold transition-colors inline-flex items-center gap-2',
                  location.pathname.startsWith('/student')
                    ? 'text-[#7B1B2B] bg-[#D4AF37]'
                    : 'text-[#D4AF37] border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#7B1B2B]'
                )}
              >
                <User size={15} /> Student Portal
              </Link>
            </div>

            {/* Mobile: hamburger */}
            <div className="md:hidden flex items-center shrink-0 ml-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
                style={ { color: '#D4AF37' } }
                aria-label="Open menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar: Nav links (desktop only) ── */}
      <div className="hidden md:block w-full" style={ { background: '#7B1B2B' } }>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-x-1 gap-y-0 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
                style={
                  location.pathname === link.path
                    ? { color: '#7B1B2B', background: '#D4AF37', fontWeight: 700 }
                    : { color: '#FFFFFF' }
                }
                onMouseEnter={e => {
                  if (location.pathname !== link.path) {
                    (e.target as HTMLElement).style.background = 'rgba(212,175,55,0.12)';
                  }
                }}
                onMouseLeave={e => {
                  if (location.pathname !== link.path) {
                    (e.target as HTMLElement).style.background = 'transparent';
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {isOpen && (
        <div className="md:hidden shadow-lg" style={ { background: '#7B1B2B', borderTop: '1px solid rgba(212,175,55,0.3)' } }>
          <div className="px-3 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                style={
                  location.pathname === link.path
                    ? { color: '#7B1B2B', background: '#D4AF37', fontWeight: 700 }
                    : { color: '#FFFFFF' }
                }
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2" style={ { borderTop: '1px solid rgba(212,175,55,0.3)' } }>
              <Link
                to="/student/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-bold transition-colors"
                style={
                  location.pathname.startsWith('/student')
                    ? { color: '#7B1B2B', background: '#D4AF37' }
                    : { color: '#D4AF37', background: 'rgba(212,175,55,0.1)' }
                }
              >
                <User size={15} /> Student Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
