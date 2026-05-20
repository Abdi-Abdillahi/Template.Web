import { ServicesHeader } from "./components/ServicesHeader";
import { ServicesGrid } from "./components/ServicesGrid";

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-secondary/40 py-24"
    >
      <div className="container-custom">
        <ServicesHeader />

        <ServicesGrid />
      </div>
    </section>
  );
};