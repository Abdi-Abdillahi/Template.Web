import { Truck } from "lucide-react";
import { HeroActions } from "./HeroActions";
import { HeroVisual } from "./HeroVisual";
export const HeroContent = () => {
  return (
    <div className="relative z-10 flex justify-center px-6 pt-28 md:px-8 md:pt-36">
      <div className="flex w-full max-w-7xl flex-col items-center text-center">
        {/* Hero Badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand shadow-lg shadow-brand/10 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-brand" />

          <Truck className="h-4 w-4" />

          <span>
           Intelligent Cargo & Logistics Network
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-black tracking-tight text-primary-foreground md:text-7xl md:leading-[1.05]">
          <span>Smarter Freight.</span>

          <br />

          <span className="bg-gradient-to-r from-brand via-brand-soft to-brand bg-clip-text text-transparent">
            Faster Delivery.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-8 text-primary-foreground/70 md:text-lg">
          Streamline cargo transportation with verified carriers, real-time coordination, and scalable logistics solutions.
        </p>

        {/* Actions */}
        <div className="mt-10">
          <HeroActions />
        </div>

        {/* Visual */}
        <div className="mt-16 w-full">
          <HeroVisual />
        </div>
      </div>
    </div>
  );
};