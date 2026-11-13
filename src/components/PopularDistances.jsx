import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { POPULAR_DISTANCES, BUSINESS } from '../data/rentalData';

export default function PopularDistances() {
  return (
    <section
      id="distances"
      className="bg-white py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-orange-600 mb-3">
            Plan Your Journey
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101F35]">
            Explore Places Around Haridwar
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-7 text-slate-600">
            Check approximate distances and travel times to popular destinations.
          </p>
        </div>

        {/* Distance List */}
        <div className="border-t border-slate-200">
          {POPULAR_DISTANCES.map((item) => {
            const waText = `Hi U.K. RIDE, I am interested in renting a scooty/bike for a trip from Haridwar to ${item.name}. Please share the details.`;

            const waUrl = `${BUSINESS.whatsappUrl}?text=${encodeURIComponent(waText)}`;

            return (
              <div
                key={item.name}
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-3 sm:gap-8 items-center py-5 border-b border-slate-200"
              >
                {/* Destination */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#101F35]">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {item.highlight}
                  </p>
                </div>

                {/* Distance & Time */}
                <div className="flex items-center gap-5 sm:gap-8">
                  <div>
                    <p className="text-lg font-bold text-[#101F35]">
                      {item.distance}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      One way
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-700">
                      {item.time}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Approx. travel time
                    </p>
                  </div>
                </div>

                {/* Enquiry Link */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors w-fit"
                >
                  Enquire
                  <ArrowUpRight size={16} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <p className="mt-5 text-xs sm:text-sm text-slate-500 leading-6">
          Distances and travel times are approximate and may vary depending on your route and traffic conditions.
        </p>

      </div>
    </section>
  );
}
