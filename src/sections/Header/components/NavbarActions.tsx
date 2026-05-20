interface NavbarActionsProps {
  menuOpen: boolean;
  onToggle: () => void;
}

export const NavbarActions = ({
  menuOpen,
  onToggle,
}: NavbarActionsProps) => {
  return (
    <div className="flex shrink-0 items-center gap-3">
      {/* Desktop CTA */}
      <a
        href="/auth"
        className="hidden rounded-md bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition-colors duration-200 hover:bg-brand-soft md:flex"
      >
        Get Started
      </a>

      {/* Mobile Menu Toggle */}
      <button
        type="button"
        aria-label={
          menuOpen ? "Close menu" : "Open menu"
        }
        aria-expanded={menuOpen}
        onClick={onToggle}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-md md:hidden"
      >
        {menuOpen ? (
          <span className="relative block h-5 w-5">
            <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 rotate-45 rounded-full bg-primary-foreground" />

            <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 -rotate-45 rounded-full bg-primary-foreground" />
          </span>
        ) : (
          <>
            <span className="h-0.5 w-5 rounded-full bg-primary-foreground" />

            <span className="h-0.5 w-5 rounded-full bg-primary-foreground" />

            <span className="h-0.5 w-5 rounded-full bg-primary-foreground" />
          </>
        )}
      </button>
    </div>
  );
};