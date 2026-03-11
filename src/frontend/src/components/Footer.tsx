import { Building2, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Property<span className="text-gold">Inspector</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Mumbai's most trusted property inspection and real estate advisory
              firm.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold mb-4 uppercase tracking-wide text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "#/" },
                { label: "About Us", href: "#/about" },
                { label: "Services", href: "#/services" },
                { label: "Listings", href: "#/listings" },
                { label: "Contact", href: "#/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gold mb-4 uppercase tracking-wide text-xs">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Property Inspection</li>
              <li>Buying Assistance</li>
              <li>Selling Assistance</li>
              <li>Site Visits</li>
              <li>Valuation Reports</li>
              <li>Legal Documentation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gold mb-4 uppercase tracking-wide text-xs">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>
                  123 Business Bay, BKC,
                  <br />
                  Mumbai 400051
                </span>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-gold transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="mailto:info@propertyinspector.in"
                  className="hover:text-gold transition-colors"
                >
                  info@propertyinspector.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>© {year} PropertyInspector. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
