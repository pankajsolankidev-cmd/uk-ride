import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { VEHICLES, BUSINESS } from '../data/rentalData';

export default function VehiclesSection() {
  return (
    <section
      id="vehicles"
      className="bg-white py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-9 sm:mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-orange-600 mb-3">
              Find Your Ride
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101F35]">
              Choose Your Ride
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-xl leading-7">
              Pick a ride that suits your plans and explore Haridwar your way.
            </p>
          </div>
        </div>

        {/* Vehicle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

          {VEHICLES.map((item) => {
            const waUrl = `${BUSINESS.whatsappUrl}?text=${encodeURIComponent(item.enquiryText)}`;

            return (
              <article
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-slate-300 transition-colors"
              >

                {/* Vehicle Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Card Details */}
                <div className="p-5 sm:p-7">

                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-orange-600 mb-2">
                        {item.badge}
                      </p>

                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#101F35]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-6 mt-3">
                    {item.description}
                  </p>

                  {/* Features */}
                  {item.features?.length > 0 && (
                    <div className="mt-5 pt-5 border-t border-slate-100">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                        {item.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 text-sm text-slate-700"
                          >
                            <Check
                              size={16}
                              className="text-orange-600 shrink-0 mt-0.5"
                            />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Enquiry */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full min-h-12 px-5 py-3 rounded-xl bg-[#101F35] hover:bg-[#1B3455] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    Enquire on WhatsApp
                    <ArrowUpRight size={17} />
                  </a>

                </div>
              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}
