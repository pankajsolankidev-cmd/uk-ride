import React from 'react';
import { ArrowUpRight, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';
import { BUSINESS } from '../data/rentalData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Our Vehicles', href: '#vehicles' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Popular Distances', href: '#distances' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#101F35] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 py-14 md:py-16">

          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#home" className="inline-block">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                U.K. <span className="text-orange-400">RIDE</span>
              </span>
            </a>

            <p className="text-slate-300 text-sm sm:text-base leading-7 mt-5 max-w-sm">
              Your journey around Haridwar starts here.
              Choose your ride and explore the city at your own pace.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={`tel:${BUSINESS.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                <Phone size={16} />
                Call Now
              </a>

              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 px-5 py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                WhatsApp
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white">
              Get in Touch
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">
                <MapPin size={19} className="text-orange-400 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-300 leading-6">
                  {BUSINESS.address}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-orange-400 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href={`tel:${BUSINESS.primaryPhoneRaw}`}
                    className="text-slate-300 hover:text-orange-400 transition-colors"
                  >
                    {BUSINESS.primaryPhone}
                  </a>
                  <a
                    href={`tel:${BUSINESS.alternatePhoneRaw}`}
                    className="text-slate-300 hover:text-orange-400 transition-colors"
                  >
                    {BUSINESS.alternatePhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="text-orange-400 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-300 leading-6">
                  {BUSINESS.timings}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-5">

          <p className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-slate-300 hover:text-orange-400 transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              <ArrowUp size={15} />
            </span>
          </button>

        </div>
      </div>
    </footer>
  );
}
