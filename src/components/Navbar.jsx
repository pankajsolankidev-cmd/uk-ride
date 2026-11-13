import React, { useEffect, useRef, useState } from 'react';
import {
  Phone,
  X,
  Menu,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';
import { BUSINESS } from '../data/rentalData';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const menuRef = useRef(null);
  const menuId = 'uk-ride-mobile-menu';

  const navLinks = [
    {
      id: '01',
      label: 'Home',
      href: '#home',
      hint: 'Welcome to U.K. RIDE',
    },
    {
      id: '02',
      label: 'Choose Your Ride',
      href: '#vehicles',
      hint: 'Activa scooties & motorcycles',
    },
    {
      id: '03',
      label: 'Why Choose Us',
      href: '#why-choose-us',
      hint: 'Reliable, transparent service',
    },
    {
      id: '04',
      label: 'Popular Distances',
      href: '#distances',
      hint: 'Travel guide & times from Haridwar',
    },
    {
      id: '05',
      label: 'Location & Contact',
      href: '#contact',
      hint: 'Opp. Hotel Jewel, Laltaro Pull',
    },
  ];

  // Lock background scrolling and manage focus
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }

      // Keep keyboard focus inside the mobile menu
      if (event.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll(
          'a[href], button:not([disabled])'
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      {/* ================= DESKTOP / MAIN NAVBAR ================= */}

      <header className="sticky top-0 z-50 h-16 sm:h-[68px] bg-white/95 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">

            {/* BRAND LOGO */}
            <a
              href="#home"
              onClick={closeMenu}
              className="flex items-center gap-2.5 group"
              aria-label="U.K. RIDE Home"
            >
              <div className="w-10 h-10 rounded-xl bg-[#17365D] flex items-center justify-center text-white font-black text-sm tracking-tight group-hover:bg-[#214777] transition-colors">
                UK
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#17365D]">
                  U.K. RIDE<span className="text-[#EA580C]">.</span>
                </span>

                <span className="text-[9px] font-bold tracking-[1.8px] uppercase text-slate-400 mt-1">
                  HARIDWAR
                </span>
              </div>
            </a>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-[13px] font-semibold text-slate-600 hover:text-[#EA580C] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* DESKTOP ACTIONS */}
            <div className="hidden md:flex items-center gap-2.5">
              <a
                href={`tel:${BUSINESS.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#17365D] px-4 py-3 text-white text-xs font-bold hover:bg-[#102944] transition-colors"
              >
                <Phone size={14} />
                Call Now
              </a>

              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
              >
                WhatsApp
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* MOBILE ACTIONS */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:${BUSINESS.primaryPhoneRaw}`}
                aria-label="Call U.K. RIDE"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-orange-50 border border-orange-100 text-[#EA580C] active:scale-95 transition-transform"
              >
                <Phone size={17} />
              </a>

              <button
                type="button"
                onClick={toggleMenu}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls={menuId}
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-200 text-[#17365D] active:scale-95 transition-transform"
              >
                {menuOpen ? <X size={21} /> : <Menu size={21} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ================= FULL SCREEN MOBILE MENU ================= */}

      <div
        ref={menuRef}
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`
          fixed inset-0 z-[60] md:hidden
          bg-white
          w-full h-full
          flex flex-col
          transition-all duration-300 ease-out
          ${
            menuOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible translate-y-3 pointer-events-none'
          }
        `}
      >

        {/* MENU HEADER */}
        <div className="flex items-center justify-between px-5 sm:px-7 h-16 sm:h-[72px] border-b border-slate-100 shrink-0 bg-white">
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-[#17365D] flex items-center justify-center text-white font-black text-sm">
              UK
            </div>

            <div>
              <div className="text-lg font-extrabold text-[#17365D]">
                U.K. RIDE<span className="text-[#EA580C]">.</span>
              </div>
              <div className="text-[9px] tracking-[1.7px] font-bold text-slate-400">
                HARIDWAR
              </div>
            </div>
          </a>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[#17365D] hover:bg-slate-100 active:scale-95 transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* MENU CONTENT (FULL SCREEN VERTICALLY EXPANDED) */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-6 sm:px-8 py-3 sm:py-5 flex flex-col">
          
          {/* NAVIGATION LINKS EXPANDING TO FILL FULL SCREEN */}
          <nav className="flex-1 flex flex-col justify-between divide-y divide-slate-100 min-h-[480px]">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMenu}
                style={{
                  transitionDelay: menuOpen ? `${index * 45}ms` : '0ms',
                }}
                className={`
                  flex-1 flex items-center justify-between
                  py-5 sm:py-6
                  group transition-all duration-300
                  ${
                    menuOpen
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-3'
                  }
                `}
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <span className="text-sm sm:text-base font-mono font-bold tracking-widest text-[#EA580C]">
                    {link.id}
                  </span>

                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#17365D] group-hover:text-[#EA580C] transition-colors leading-tight">
                      {link.label}
                    </div>

                    <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                      {link.hint}
                    </div>
                  </div>
                </div>

                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-400 group-hover:text-[#EA580C] group-hover:border-orange-300 group-hover:bg-orange-50 transition-all shrink-0">
                  <ChevronRight size={18} />
                </div>
              </a>
            ))}
          </nav>

        </div>

      </div>
    </>
  );
}
