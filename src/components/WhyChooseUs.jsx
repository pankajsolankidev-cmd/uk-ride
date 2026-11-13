import React from 'react';
import { MapPin, ShieldCheck, Zap, HardHat, BadgeCheck, Clock } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/rentalData';

const iconMap = {
  MapPin,
  ShieldCheck,
  Zap,
  HardHat,
  BadgeCheck,
  Clock,
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-[#F8FAFC] py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-orange-600 mb-3">
            The U.K. RIDE Experience
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101F35]">
            Why Choose U.K. RIDE
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-7 text-slate-600">
            Reliable, transparent, and hassle-free bike and scooty rentals in Haridwar.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon] || ShieldCheck;

            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-4">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  <h3 className="text-lg font-bold text-[#101F35]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
