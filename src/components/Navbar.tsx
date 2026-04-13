import { useEffect, useMemo, useState } from "react";
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
  const sectionIds = useMemo(
    () =>
      navItems
        .map((item) => item.href)
        .filter((href) => href.startsWith("#"))
        .map((href) => href.slice(1)),
    []
  );

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
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    let rafId = 0;
    const offsetPx = 140;

    const updateActive = () => {
      const y = window.scrollY + offsetPx;
      const last = elements.reduce<HTMLElement | null>((acc, el) => {
        if (el.offsetTop <= y) return el;
        return acc;
      }, null);

      const next = `#${(last ?? elements[0]).id}`;
      setActiveHref((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", updateActive);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", updateActive);
    };
  }, [sectionIds]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full overflow-hidden transition-all duration-700 ${scrolled
        ? "text-black shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-2"
        : "text-foreground py-3 lg:py-4"
        }`}
    >
      <div className="absolute inset-0 bg-background" />
      <div
        className={`absolute inset-0 bg-primary transition-transform duration-500 ease-out ${scrolled ? "translate-y-0" : "-translate-y-full"
          }`}
      />
      <div className="relative container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3 group" onClick={() => setActiveHref("#accueil")}>
          <img
            src={logo}
            alt="Longchamp Palace"
            className={`transition-all duration-500 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.25)] ${scrolled ? "h-10 w-10" : "h-8 w-8"
              }`}
          />
          <span
            className={`font-limelight transition-all duration-500 inline text-base sm:text-lg md:text-xl ${scrolled ? "sm:text-lg md:text-xl" : "lg:text-xl"
              }`}
          >
            <span className={`${scrolled ? "text-black" : "text-white"}`}>LONGCHAMP</span>{" "}
            <span className={`${scrolled ? "text-black" : "text-primary"}`}>PALACE</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setActiveHref(item.href)}
                className={`relative px-4 py-2 transition-colors duration-300 font-elegant text-sm tracking-wider uppercase group ${activeHref === item.href
                  ? scrolled
                    ? "text-black"
                    : "text-primary"
                  : scrolled
                    ? "text-black/75 hover:text-black"
                    : "text-foreground/70 hover:text-primary"
                  }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px transition-all duration-300 ${scrolled ? "bg-black" : "bg-primary"} ${activeHref === item.href ? "w-3/4" : "w-0 group-hover:w-3/4"
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
          className={`lg:hidden p-2 transition-colors ${scrolled ? "text-black hover:text-black/80" : "text-foreground hover:text-primary"
            }`}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setOpen(false)}
          aria-hidden={!open}
        />

        <div
          id="mobile-nav"
          className={`fixed top-0 right-0 z-50 h-[100dvh] w-[92vw] max-w-[22rem] bg-background border-l border-border shadow-[0_20px_60px_rgba(0,0,0,0.55)] transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"
            }`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Longchamp Palace"
                className="h-9 w-9 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              />
              <div className="leading-none">
                <div className="font-limelight text-base">
                  <span className="text-white">LONGCHAMP</span>{" "}
                  <span className="text-primary">PALACE</span>
                </div>
                <div className="font-elegant text-[10px] tracking-[0.35em] uppercase text-foreground/50 mt-1">
                  Menu
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-border bg-background/40 hover:bg-background/60 p-2 text-foreground/80 hover:text-primary transition-colors"
              aria-label="Fermer"
            >
              <X size={22} />
            </button>
          </div>

          <div className="px-4 py-4 overflow-y-auto h-[calc(100dvh-72px)]">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveHref(item.href);
                      setOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all font-elegant text-base tracking-wider ${activeHref === item.href
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5 border border-transparent"
                      }`}
                  >
                    <span>{item.label}</span>
                    <span className={`h-2 w-2 rounded-full ${activeHref === item.href ? "bg-primary" : "bg-transparent"}`} />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a
                href="tel:0486972259"
                onClick={() => setOpen(false)}
                className="btn-gold w-full text-sm py-3 px-6 rounded-full inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Réserver une table
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
