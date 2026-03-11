import { Button } from "@/components/ui/button";
import { Building2, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#/", route: "home", ocid: "nav.home.link" },
  { label: "About", href: "#/about", route: "about", ocid: "nav.about.link" },
  {
    label: "Services",
    href: "#/services",
    route: "services",
    ocid: "nav.services.link",
  },
  {
    label: "Listings",
    href: "#/listings",
    route: "listings",
    ocid: "nav.listings.link",
  },
  {
    label: "Contact",
    href: "#/contact",
    route: "contact",
    ocid: "nav.contact.link",
  },
];

interface NavbarProps {
  currentRoute: string;
}

export default function Navbar({ currentRoute }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-xs">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-lg font-bold text-navy">
            Property<span className="text-gold">Inspector</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.route}>
              <a
                href={link.href}
                data-ocid={link.ocid}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentRoute === link.route
                    ? "bg-navy text-white"
                    : "text-foreground hover:bg-secondary hover:text-navy"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            className="bg-gold hover:bg-accent/90 text-foreground font-semibold shadow-gold"
          >
            <a href="#/contact">Free Consultation</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.route}
                  href={link.href}
                  data-ocid={link.ocid}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    currentRoute === link.route
                      ? "bg-navy text-white"
                      : "hover:bg-secondary text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-2 bg-gold hover:bg-accent/90 text-foreground font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                <a href="#/contact">Free Consultation</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
