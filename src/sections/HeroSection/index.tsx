import { HeroContent } from "./components/HeroContent";
export const HeroSection = () => {
  return (
    <section
      className="
        relative isolate flex flex-col overflow-hidden
        bg-[radial-gradient(circle_at_72%_34%,rgba(244,185,66,0.12)_0%,transparent_28%),radial-gradient(circle_at_88%_74%,rgba(47,175,101,0.16)_0%,transparent_30%),linear-gradient(160deg,rgb(4,19,12)_0%,rgb(7,36,23)_44%,rgb(12,58,36)_100%)]
        md:min-h-[1000px]
      "
    >
      {/* Glow Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-[-180px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(47,175,101,0.55)_0%,transparent_70%)] blur-[90px]" />

        <div className="absolute right-[-120px] top-[5%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(244,185,66,0.42)_0%,transparent_70%)] blur-[90px]" />

        <div className="absolute bottom-[-160px] left-[30%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(34,139,78,0.35)_0%,transparent_72%)] blur-[90px]" />
      </div>

      {/* Grid Texture */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.06]
          bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
          bg-[size:64px_64px]
          [mask-image:radial-gradient(circle_at_70%_48%,black_0%,rgba(0,0,0,0.75)_42%,transparent_82%)]
        "
      />

      {/* Noise Overlay */}
      <div
        className="
          pointer-events-none absolute inset-0 z-[1] opacity-[0.035] mix-blend-overlay
          bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22220%22 height=%22220%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]
        "
      />

      {/* Bottom Accent Line */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-14 z-[1] h-px
          bg-[linear-gradient(90deg,transparent_0%,rgba(244,185,66,0.08)_25%,rgba(244,185,66,0.35)_50%,rgba(244,185,66,0.08)_75%,transparent_100%)]
          shadow-[0_0_24px_rgba(244,185,66,0.25)]
        "
      />

      <HeroContent />
    </section>
  );
};