import { ArrowRight, Truck } from "lucide-react";

export const HeroActions = () => {
  return (
    <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
      {/* Primary CTA */}
      <a
        href="#services"
        className="group flex items-center justify-center gap-2 rounded-2xl bg-brand px-8 py-4 text-sm font-semibold text-brand-foreground shadow-xl shadow-brand/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-soft hover:shadow-brand/30"
      >

        <span>Get Started</span>

        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </a>

      {/* Secondary CTA */}
      <a
        href="#Tracking"
        className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
      >
        <Truck className="h-5 w-5" />

        <span>Track Shipment</span>
      </a>
    </div>
  );
};