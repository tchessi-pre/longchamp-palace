import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import ScrollToTop from "./ScrollToTop";

const Footer = () => (
  <>
    <footer className="py-14 chalkboard-bg border-t border-border/60">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div className="text-center md:text-left">
            <div className="font-limelight text-3xl md:text-[2rem] tracking-tight">
              <span className="text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">LONGCHAMP</span>{" "}
              <span className="text-primary drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">PALACE</span>
            </div>
            <p className="font-body text-foreground/55 mt-3">
              Bistrot • Cocktails • Terrasse
            </p>
            <div className="mt-5 flex items-center justify-center md:justify-start gap-3 text-foreground/60">
              <a
                href="https://www.instagram.com/longchamppalace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 hover:bg-primary/15 hover:border-primary/25 transition-colors"
              >
                <Instagram className="w-4 h-4 text-primary" />
                <span className="font-body text-sm">@longchamppalace</span>
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="font-chalk text-primary tracking-widest text-sm">Accès rapide</div>
            <ul className="mt-4 space-y-2 font-body text-foreground/60">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "Notre Histoire", href: "#histoire" },
                { label: "La Cuisine", href: "#cuisine" },
                { label: "Galerie", href: "#galerie" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3 text-foreground/60 font-body">
            <div className="font-chalk text-primary tracking-widest text-sm md:self-end">Contact</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>22 Bd Longchamp, 13001 Marseille</span>
            </div>
            <a href="tel:0486972259" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span>04 86 97 22 59</span>
            </a>
            <div className="flex items-start gap-2 text-center md:text-right max-w-sm">
              <Clock className="w-4 h-4 text-primary mt-0.5" />
              <span>Lun – Jeu · 08h–01h · Ven – Sam · 08h–02h · Dim · 09h–01h</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border/60 mt-10 pt-8 text-center">
          <p className="font-body text-foreground/40 text-sm">
            © {new Date().getFullYear()} LONGCHAMP PALACE — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>

    <ScrollToTop />
  </>
);

export default Footer;
