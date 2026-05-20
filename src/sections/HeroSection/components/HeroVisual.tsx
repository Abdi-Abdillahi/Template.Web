import heroBanner from '../../../assets/images/herebanner1.png';
const stats = [
  {
    value: "500+",
    label: "Drivers",
    accent: false,
    position:
      "left-[4%] top-[8%]",
  },
  {
    value: "12K+",
    label: "Loads",
    accent: true,
    position:
      "right-[4%] top-[12%]",
  },
  {
    value: "18",
    label: "Cities",
    accent: false,
    position:
      "left-[8%] bottom-[10%]",
  },
  {
    value: "98%",
    label: "On-Time",
    accent: true,
    position:
      "right-[8%] bottom-[8%]",
  },
];

export const HeroVisual = () => {
  return (
    <div className="relative mx-auto mt-10 flex w-full max-w-7xl items-center justify-center md:mt-16">
      {/* Background Wordmark */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden">
        <h2 className="select-none text-center text-5xl font-black tracking-tight text-white/[0.03] md:text-[11rem] md:leading-none">
          GERAD LOGISTICS
        </h2>
      </div>

      {/* Glow Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-[18%] top-[12%] bottom-[20%] rounded-full bg-brand/15 blur-3xl" />

        <div className="absolute inset-x-[12%] -bottom-6 h-20 rounded-full bg-black/50 blur-2xl" />
      </div>

      {/* Truck Visual */}
      <div className="relative z-10 flex items-center justify-center">
        <img
          src={heroBanner}
          alt="Gerad Logistics Truck"
          className="relative z-10 w-full max-w-5xl object-contain"
        />

        {/* Reflection */}
        <img
          src={heroBanner}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-full left-1/2 hidden w-full max-w-5xl -translate-x-1/2 -scale-y-100 opacity-10 blur-sm [mask-image:linear-gradient(to_bottom,black,transparent)] md:block"
        />
      </div>

      {/* Floating Stats */}
      {stats.map(
        ({
          value,
          label,
          accent,
          position,
        }) => (
          <div
            key={label}
            className={`absolute z-20 hidden min-w-[120px] rounded-2xl border border-white/10 bg-black/30 px-5 py-4 shadow-2xl backdrop-blur-xl md:block ${position}`}
          >
            <div
              className={`text-2xl font-black tracking-tight ${
                accent
                  ? "text-brand"
                  : "text-primary-foreground"
              }`}
            >
              {value}
            </div>

            <div className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">
              {label}
            </div>
          </div>
        )
      )}
    </div>
  );
};