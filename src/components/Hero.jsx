import React from 'react';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { BUSINESS } from '../data/rentalData';

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#FAFAF8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-10 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* HERO CONTENT */}

          <div className="flex flex-col items-start">

            {/* LOCATION */}

            <div className="flex items-center gap-2 mb-6">
              <MapPin
                size={15}
                className="text-[#EA580C] shrink-0"
              />

              <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-slate-500">
                HARIDWAR, UTTARAKHAND
              </span>
            </div>

            {/* HEADLINE */}

            <h1 className="text-[43px] leading-[1.08] sm:text-6xl lg:text-[68px] font-extrabold tracking-[-2px] text-[#17365D]">
              Explore More.
              <br />
              <span className="text-[#EA580C]">
                Travel Your Way.
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-md text-[14px] sm:text-base leading-[1.8] text-slate-500 font-medium">
              Find your perfect ride and explore Haridwar
              and nearby destinations with U.K. RIDE.
            </p>

            {/* ACTION BUTTONS */}

            <div className="mt-7 grid grid-cols-2 gap-3 w-full max-w-[380px]">

              <a
                href="#vehicles"
                className="min-h-[50px] px-4 rounded-xl bg-[#17365D] text-white flex items-center justify-center gap-2 text-[13px] font-bold hover:bg-[#102944] active:scale-[0.98] transition-all"
              >
                Explore Vehicles
                <ArrowRight size={16} />
              </a>

              <a
                href={`tel:${BUSINESS.primaryPhoneRaw}`}
                className="min-h-[50px] px-4 rounded-xl bg-white border border-slate-200 text-[#17365D] flex items-center justify-center gap-2 text-[13px] font-bold hover:border-[#EA580C] active:scale-[0.98] transition-all"
              >
                <Phone size={15} className="text-[#EA580C]" />
                Call Now
              </a>

            </div>

            {/* LOCATION DETAIL */}

            <div className="mt-7 pt-5 border-t border-slate-200 w-full max-w-[380px]">

              <p className="text-[11px] font-bold uppercase tracking-[1.4px] text-slate-400 mb-2">
                Visit Our Rental Point
              </p>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                {BUSINESS.address}
              </p>

            </div>

          </div>

          {/* HERO IMAGE */}

          <div className="w-full">

            <div className="relative w-full aspect-[5/4] sm:aspect-[4/3] lg:aspect-[5/4] rounded-[22px] sm:rounded-[28px] overflow-hidden bg-slate-100">

              <img
                src="https://images.unsplash.com/photo-1582621883960-62079c316302?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="Automatic scooter for rental in Haridwar"
                className="w-full h-full object-cover object-center"
                loading="eager"
                fetchPriority="high"
              />

            </div>

            <p className="mt-3 text-[11px] text-slate-400 font-medium text-right">
              U.K. RIDE · HARIDWAR
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
