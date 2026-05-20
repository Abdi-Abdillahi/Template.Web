import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { MobileMenuLinks } from "./MobileMenuLinks";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export const MobileMenu = ({
  open,
  onClose,
}: MobileMenuProps) => {
  const [isVisible, setIsVisible] =
    useState(open);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";

      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 500);

      return () => clearTimeout(timeout);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!isVisible) return null;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-500 ease-in-out md:hidden ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div
        onClick={(event) =>
          event.stopPropagation()
        }
        className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-primary shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        {/* MOBILE MENU HEADER */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <span className="text-lg font-extrabold tracking-tight text-primary-foreground">
            Gerad{" "}
            <span className="text-brand-soft">
              Logistics
            </span>
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-primary-foreground transition-colors duration-200 hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <MobileMenuLinks onClose={onClose} />

        {/* MOBILE MENU ACTIONS */}
        <div className="border-t border-white/10 px-6 py-5">
          <a
            href="/auth"
            className="flex w-full items-center justify-center rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-colors duration-200 hover:bg-brand-soft"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};