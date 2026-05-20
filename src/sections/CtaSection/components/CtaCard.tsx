import { useEffect, useRef, useState } from "react";

import { ArrowRight, Truck, Zap } from "lucide-react";

export const CtaCard = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="
        relative
        overflow-hidden
        rounded-3xl
        px-7
        py-12
        text-center
        transition-all
        duration-700
        md:p-16
      "
      style={{
        background:
          "linear-gradient(135deg, rgb(15,61,38) 0%, rgb(11,45,28) 100%)",

        opacity: visible ? 1 : 0,

        transform: visible ? "translateY(0)" : "translateY(28px)",
      }}
    >
      {/* Top Light */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-3/5
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-amber-300/60
          to-transparent
        "
      />

      {/* Glow Blobs */}

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-[radial-gradient(circle,rgba(244,185,66,0.35)_0%,transparent_70%)]
          opacity-20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -right-20
          h-64
          w-64
          rounded-full
          bg-[radial-gradient(circle,rgba(4,200,100,0.3)_0%,transparent_70%)]
          opacity-20
        "
      />

      {/* Badge */}

      <div
        className="
          mb-5
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-amber-300/40
          bg-amber-300/20
          px-4
          py-1
          text-xs
          font-bold
          uppercase
          tracking-widest
          text-amber-300
        "
      >
        <Zap className="h-3 w-3" />
        Ready To Start?
      </div>

      {/* Title */}

      <h2
        className="
          relative
          mb-4
          text-[28px]
          font-extrabold
          leading-tight
          tracking-tight
          text-white
          md:text-[46px]
        "
      >
        Smarter freight
        <br className="hidden md:block" />
        begins here.
      </h2>

      {/* Description */}

      <p
        className="
          relative
          mx-auto
          mb-10
          max-w-[480px]
          text-[15px]
          leading-relaxed
          text-white/60
        "
      >
        Join businesses and carriers using our platform to simplify modern
        freight operations.
      </p>

      {/* Buttons */}

      <div className="flex flex-wrap justify-center gap-4">
        {/* Primary */}

        <a
          href="/auth?mode=signup&role=shipper"
          className="
            inline-flex
            items-center
            gap-2
            rounded-2xl
            bg-amber-300
            px-8
            py-4
            text-sm
            font-semibold
            text-neutral-900
            transition-all
            duration-200
            hover:brightness-110
            hover:shadow-[0_12px_32px_rgba(244,185,66,0.45)]
            active:scale-95
          "
        >
          <Truck className="h-5 w-5" />
          Track Shipment
        </a>

        {/* Secondary */}

        <a
          href="/auth?mode=signup&role=driver"
          className="
            inline-flex
            items-center
            gap-2
            rounded-2xl
            border
            border-white/20
            bg-white/10
            px-8
            py-4
            text-sm
            font-semibold
            text-white
            transition-all
            duration-200
            hover:bg-white/20
            active:scale-95
          "
        >
          <ArrowRight className="h-5 w-5" />
          Get Started
        </a>
      </div>
    </div>
  );
};
