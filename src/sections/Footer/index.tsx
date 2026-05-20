import { Mail, ArrowUpRight, MapPin, Phone, Truck } from "lucide-react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export const Footer = () => {
  const footerLinks = [ 
    {
      name: "Home",
      href: "#"
    },
    {
      name: "About Us",
      href: "#about"
    },
    {
      name: "Services",
      href: "#services"
    },
    {
      name: "Tracking",
      href: "#Tracking"
    },
    {
      name: "Contact",
      href: "#contact"
    }
  ]
  return (
    <footer className="relative overflow-hidden border-t border-white/10  bg-[#04130c]/90">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Top Section */}
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.9fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <a href="/" className="flex shrink-0 items-center gap-3">
              {/* Logo */}
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand shadow-lg shadow-brand/30">
                <Truck
                  className="h-5 w-5 text-brand-foreground"
                  strokeWidth={2.2}
                />
              </span>

              {/* Brand Name */}
              <div className="flex flex-col gap-2">
              <div className="flex items-center text-lg font-extrabold tracking-tight">
                <span className="text-primary-foreground">Company</span>

                <span className="ml-2 text-brand-soft">Logistics</span>
                
              </div>
                <p className="text-sm text-white/50">
                 Delivering smart logistics solutions.
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Crafting seamless freight and logistics solutions with real-time tracking, reliable transportation, and technology-driven supply chain management for businesses In Ethiopia.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: FaGithub, href: "#" },
                { icon: FaTwitter, href: "#" },
                { icon: FaLinkedin, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-white/40">Email</p>
                  <a
                    href="mailto:hello@example.com"
                    className="mt-1 inline-block text-sm text-white/80 transition-colors hover:text-white"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-white/40">Phone</p>
                  <a
                    href="tel:+251900000000"
                    className="mt-1 inline-block text-sm text-white/80 transition-colors hover:text-white"
                  >
                    +251 900 000 000
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-white/40">Location</p>
                  <p className="mt-1 text-sm text-white/80">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Navigation
            </h3>

            <ul className="mt-5 space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.name}
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Stay Updated
            </h3>

            <p className="mt-5 text-sm leading-6 text-white/60">
              Get product updates, design inspiration, and development tips.
            </p>

            <form className="mt-6">
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/30 transition-all focus:border-white/20 focus:bg-white/10"
                />

                <button
                  type="submit"
                  className="h-12 rounded-xl bg-brand px-5 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-brand-soft"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
          <p>© 2026 Company Name. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
