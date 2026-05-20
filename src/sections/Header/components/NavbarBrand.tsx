import { Truck } from "lucide-react";

export const NavbarBrand = () => {
  return (
    <a
      href="/"
      className="flex shrink-0 items-center gap-3"
    >
      {/* Logo */}
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand shadow-lg shadow-brand/30">
        <Truck
          className="h-5 w-5 text-brand-foreground"
          strokeWidth={2.2}
        />
      </span>

      {/* Brand Name */}
      <div className="flex items-center text-lg font-extrabold tracking-tight">
        <span className="text-primary-foreground">
          Company
        </span>

        <span className="ml-2 text-brand-soft">
          Name
        </span>
      </div>
    </a>
  );
};