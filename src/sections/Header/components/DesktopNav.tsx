const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Tracking",
    href: "#Tracking",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const DesktopNav = () => {
  return (
    <nav className="hidden items-center gap-1 md:flex">
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="rounded-md px-4 py-2 text-sm font-medium text-primary-foreground/80 transition-colors duration-200 hover:text-primary-foreground"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};
