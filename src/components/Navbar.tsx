import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo2.png";

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
  const [activeHref, setActiveHref] = useState<string>("#accueil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sectionIds = navItems
      .map((item) => item.href)
      .filter((href) => href.startsWith("#"))
      .map((href) => href.slice(1));

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (!visible?.target?.id) return;
        setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0.05, 0.1, 0.2, 0.4, 0.6] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-2 right-0 z-50 transition-all duration-700 ${scrolled
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
            className={`transition-all duration-500 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.25)] ${scrolled ? "h-10 w-10" : "h-8 w-8"
              }`}
          />
          <span className={`font-limelight transition-all duration-500 hidden sm:inline ${scrolled ? "text-lg md:text-xl" : "text-lg md:text-xl lg:text-xl"
            }`}>
            <span className="text-white">LONGCHAMP</span>{" "}
            <span className="text-primary">PALACE</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`relative px-4 py-2 transition-colors duration-300 font-elegant text-sm tracking-wider uppercase group ${activeHref === item.href ? "text-primary" : "text-foreground/70 hover:text-primary"
                  }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-primary transition-all duration-300 ${activeHref === item.href ? "w-3/4" : "w-0 group-hover:w-3/4"
                    }`}
                />
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
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
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
                  className={`block px-6 py-3 hover:bg-primary/5 transition-all font-elegant text-lg tracking-wider rounded-lg ${activeHref === item.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                    }`}
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
