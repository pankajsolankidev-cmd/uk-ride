import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, ArrowUpRight } from 'lucide-react';
import { BUSINESS } from '../data/rentalData';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#F8FAFC] py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-orange-600 mb-3">
            Find Us
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101F35]">
            Let's get you on the road.
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-7 text-slate-600">
            Have a question or planning your next ride?
            Get in touch or visit our rental location in Haridwar.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

          {/* Contact Information */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col">

            <h3 className="text-xl font-bold text-[#101F35]">
              Contact Information
            </h3>

            <p className="text-sm text-slate-500 mt-2 leading-6">
              We're here to help you plan your ride.
            </p>

            <div className="mt-8 space-y-7">

              {/* Address */}
              <div className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-orange-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-600" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-bold text-[#101F35]">
                    Visit Our Shop
                  </p>

                  <p className="text-sm text-slate-600 leading-6 mt-1">
                    {BUSINESS.address}
                  </p>

                  <a
                    href={BUSINESS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-sm font-semibold text-orange-600 hover:text-orange-700"
                  >
                    Get Directions
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange-600" />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#101F35]">
                    Call Us
                  </p>

                  <div className="mt-1.5 space-y-1">
                    <a
                      href={`tel:${BUSINESS.primaryPhoneRaw}`}
                      className="block text-sm font-semibold text-slate-700 hover:text-orange-600"
                    >
                      {BUSINESS.primaryPhone}
                    </a>

                    <a
                      href={`tel:${BUSINESS.alternatePhoneRaw}`}
                      className="block text-sm text-slate-500 hover:text-orange-600"
                    >
                      {BUSINESS.alternatePhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#101F35]">
                    Business Hours
                  </p>

                  <p className="text-sm text-slate-600 mt-1">
                    {BUSINESS.timings}
                  </p>
                </div>
              </div>

            </div>

            {/* Contact Actions */}
            <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS.primaryPhoneRaw}`}
                className="flex-1 min-h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-[#101F35] hover:bg-[#1B3455] text-white text-sm font-semibold transition-colors"
              >
                <Phone size={16} />
                Call Now
              </a>

              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#101F35] text-sm font-semibold transition-colors"
              >
                WhatsApp
                <ArrowUpRight size={17} />
              </a>
            </div>

          </div>

          {/* Map */}
          <div className="min-h-[340px] sm:min-h-[420px] lg:min-h-0 rounded-3xl overflow-hidden border border-slate-200 bg-slate-200">
            <iframe
              title="U.K. RIDE Location in Haridwar"
              src="https://maps.google.com/maps?q=Hotel+Jewel+Valmiki+Chowk+Laltaro+Pull+Haridwar+Uttarakhand&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[340px] sm:min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
