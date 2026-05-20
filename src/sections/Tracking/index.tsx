import { TrackingHeader } from "./components/TrackingHeader";
import { TrackingForm } from "./components/TrackingForm";

export const TrackingSection = () => {
  return (
    <section
      id="Tracking"
      className="relative overflow-hidden bg-[#f7faf8] py-24"
    >
      {/* Background Blobs */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -right-40
            -top-32
            h-[700px]
            w-[700px]
            rounded-full
            bg-[radial-gradient(circle,rgba(47,175,101,0.08)_0%,rgba(47,175,101,0)_70%)]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-[radial-gradient(circle,rgba(4,19,12,0.05)_0%,rgba(4,19,12,0)_70%)]
            blur-3xl
          "
        />
      </div>

      {/* Content */}

      <div className="container-custom relative">
        <TrackingHeader />

        <TrackingForm />
      </div>
    </section>
  );
};