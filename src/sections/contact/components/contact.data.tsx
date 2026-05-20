import {
  Mail,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";

export const roleOptions = [
  "Shipper",
  "Driver",
  "Press / Media",
  "Investor",
  "Other",
];

export const contactChannels = [
  {
    icon: Phone,

    label: "Phone",

    value: "+251 11 100 0000",

    sub: "Mon–Sat, 8am–6pm EAT",

    href: "tel:+251111000000",

    bg: "bg-green-50",

    border: "border-green-200",

    iconBg: "bg-green-100",

    iconColor: "text-green-700",

    hoverBorder: "hover:border-green-300",
  },

  {
    icon: Mail,

    label: "Email",

    value: "support@company.app",

    sub: "Reply within 24 hours",

    href: "mailto:support@company.app",

    bg: "bg-amber-50",

    border: "border-amber-200",

    iconBg: "bg-amber-100",

    iconColor: "text-amber-700",

    hoverBorder: "hover:border-amber-300",
  },

  {
    icon: MapPin,

    label: "Office",

    value: "Bole Sub-City",

    sub: "Addis Ababa, Ethiopia",

    href: "https://maps.google.com",

    bg: "bg-zinc-50",

    border: "border-zinc-200",

    iconBg: "bg-zinc-100",

    iconColor: "text-zinc-700",

    hoverBorder: "hover:border-green-300",
  },
];

export { ChevronRight };