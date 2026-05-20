import { Navbar } from "../src/sections/Header";
import { HeroSection } from "../src/sections/HeroSection";
import { BackToTopButton } from "./components/BackToTopButton";
import { AboutSection } from "./sections/aboutSection";
import { ContactSection } from "./sections/contact";
import { CtaSection } from "./sections/CtaSection";
import { FAQSection } from "./sections/Faqs";
import { Footer } from "./sections/Footer";
import { ServicesSection } from "./sections/services";
import { TrackingSection } from "./sections/Tracking";
/* import { Navbar } from "@/sections/Navbar";
import { MobileMenu } from "@/sections/Navbar/components/MobileMenu";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { HowItWorksSection } from "@/sections/HowItWorksSection";
import { TrackingSection } from "@/sections/TrackingSection";
import { ContactSection } from "@/sections/ContactSection";
import { CtaSection } from "@/sections/CtaSection";
import { Footer } from "@/sections/Footer";
import { FloatingAssistant } from "@/components/FloatingAssistant"; */
const App = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrackingSection />
      <FAQSection />
      <ContactSection />
      <CtaSection />
      <Footer />
      <BackToTopButton />

      {/*
      <TrackingSection />
      <ContactSection />
      <CtaSection />

      <Footer />

      <FloatingAssistant /> */}
    </main>
  );
};
export default App;
