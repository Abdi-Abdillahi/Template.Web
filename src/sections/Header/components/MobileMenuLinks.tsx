import { Briefcase, Contact, Home, MessageSquare, Users } from "lucide-react";

interface MobileMenuLinksProps {
  onClose: () => void;
}

const links = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/about",
    label: "About Us",
    icon: Users,
  },
  {
    href: "/services",
    label: "Services",
    icon: Briefcase,
  },
  {
    href: "/Tracking",
    label: "Tracking",
    icon: MessageSquare,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: Contact,
  },
];

export const MobileMenuLinks = ({ onClose }: MobileMenuLinksProps) => {
  return (
    <div className="flex-1 p-4">
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={href}
          href={href}
          onClick={onClose}
          className="mb-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-primary-foreground/80 transition-colors duration-200 hover:bg-white/5 hover:text-primary-foreground"
        >
          <Icon className="h-5 w-5 opacity-70" />

          <span>{label}</span>
        </a>
      ))}
    </div>
  );
};
