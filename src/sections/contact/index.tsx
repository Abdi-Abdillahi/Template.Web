import { ContactChannels } from "./components/ContactChannels";
import { ContactForm } from "./components/ContactForm";
import { ContactHeader } from "./components/ContactHeader";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background Blobs */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -right-32
            -top-32
            h-[600px]
            w-[600px]
            rounded-full
            bg-[radial-gradient(circle,rgba(47,175,101,0.07)_0%,rgba(47,175,101,0)_70%)]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-[radial-gradient(circle,rgba(244,185,66,0.06)_0%,rgba(244,185,66,0)_70%)]
            blur-3xl
          "
        />
      </div>

      {/* Content */}

      <div className="container-custom relative">
        {/* Header */}

        <ContactHeader />

        {/* Main Layout */}

        <div className="grid items-start gap-8 lg:grid-cols-[5fr_7fr]">
          {/* Left */}

          <div className="reveal show">
            <ContactChannels />
          </div>

          {/* Right */}

          <div className="reveal show">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};