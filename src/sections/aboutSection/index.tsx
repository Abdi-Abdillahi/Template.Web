
import { AboutHero } from "./components/AboutHero";
import { AboutStats } from "./components/AboutStats";
import { AboutValues } from "./components/AboutValues";
import { useReveal } from "./components/useReveal";

export const AboutSection = () => {
  const heroRef = useReveal();
  const statsRef = useReveal();
  const valuesRef = useReveal();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-4">

        <div ref={heroRef} className="reveal">
          <AboutHero />
        </div>

        <div
          ref={statsRef}
          className="reveal mt-16"
        >
          <AboutStats />
        </div>

        <div
          ref={valuesRef}
          className="reveal mt-16"
        >
          <AboutValues />
        </div>

      </div>
    </section>
  );
};