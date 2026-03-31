import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Notre Histoire", href: "#histoire" },
  { label: "La Cuisine", href: "#cuisine" },
  { label: "Galerie", href: "#galerie" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-2"
          : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Longchamp Palace"
            className={`transition-all duration-500 rounded-md ${scrolled ? "h-10 w-10" : "h-12 w-12"
              }`}
          />
          <span
            className={`font-limelight text-primary transition-all duration-500 hidden sm:inline ${scrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl lg:text-3xl"
              }`}
          >
            LONGCHAMP PALACE
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative px-4 py-2 text-foreground/70 hover:text-primary transition-colors duration-300 font-elegant text-sm tracking-wider uppercase group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary transition-all duration-300 group-hover:w-3/4" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:0486972259"
          className="hidden lg:inline-flex items-center gap-2 btn-gold text-sm py-2.5 px-6 rounded-full"
        >
          <Phone className="w-4 h-4" />
          Réserver
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2 hover:text-primary transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-background/98 backdrop-blur-xl border-t border-border">
          <ul className="flex flex-col items-center gap-1 py-6">
            {navItems.map((item, i) => (
              <li key={item.href} style={{ animationDelay: `${i * 0.05}s` }}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all font-elegant text-lg tracking-wider rounded-lg"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a
                href="tel:0486972259"
                onClick={() => setOpen(false)}
                className="btn-gold text-sm py-2.5 px-8 rounded-full inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Réserver une table
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
