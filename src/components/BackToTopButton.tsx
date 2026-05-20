import { useEffect, useState } from "react";

import { ArrowUp } from "lucide-react";

export const BackToTopButton = () => {
  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="
        fixed
        bottom-4
        right-4
        z-50
        md:bottom-6
        md:right-6
      "
    >
      <button
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
        className={`
          flex
          h-13
          w-13
          items-center
          justify-center
          rounded-full
          bg-green-900
          text-white
          shadow-[0_16px_36px_rgba(10,13,11,0.22)]
          transition-all
          duration-300
          cursor-pointer
          hover:scale-110
          hover:bg-green-700
          active:scale-95
          ${
            visible
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }
        `}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
};