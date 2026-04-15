import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src="https://media.base44.com/images/public/69bd8c7f45d3f9291e5cc858/274445324_qtq_95.jpg"
              alt="Spartan Fencing Supplies"
              className="h-14 w-auto brightness-0 invert opacity-80"
            />
            <p className="text-sm text-background/60 leading-relaxed">
              Premium fencing materials and supplies for contractors, builders, and property owners.
              Quality you can trust, prices that compete.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">
              Products
            </h4>
            <ul className="space-y-2.5">
              {["Chain Link Fencing", "Ornamental Iron", "Wood Hardware", "Vinyl Fencing", "Gates & Frames", "Hardware & Fittings"].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-sm text-background/50 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Products", path: "/products" },
                { label: "Contact", path: "/contact" },
                { label: "Get a Quote", path: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-sm text-background/50 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-background/60">(800) 555-1234</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-background/60">sales@spartanfencing.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-background/60">
                  1200 Industrial Blvd<br />
                  Miami, FL 33125
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-background/60">
                  Mon–Fri: 7am–5pm<br />
                  Sat: 8am–12pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Spartan Fencing Supplies. All rights reserved.
          </p>
          <p className="text-xs text-background/40">
            Serving contractors & property owners since 1989
          </p>
        </div>
      </div>
    </footer>
  );
}
