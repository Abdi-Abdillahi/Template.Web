import { Mail } from "lucide-react";

export const ContactHeader = () => {
  return (
    <div className="mb-14 text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-green-700">
        <Mail className="h-3 w-3" />
        Get In Touch
      </div>

      <h2 className="text-4xl font-extrabold md:text-5xl">
        We&apos;re here to help
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-500">
        Connect with our team to discuss transportation, logistics, or business
        opportunities.
      </p>
    </div>
  );
};
