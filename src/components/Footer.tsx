import { Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="py-12 chalkboard-bg border-t border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <span className="font-limelight text-3xl gold-text gold-glow">LONGCHAMP PALACE</span>
          <p className="font-body text-foreground/50 mt-2">Restaurant • Cocktails • Terrasse</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 text-foreground/60 font-body">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>22 Bd Longchamp, 13001 Marseille</span>
          </div>
          <a href="tel:0486972259" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4 text-primary" />
            <span>04 86 97 22 59</span>
          </a>
          <a
            href="https://www.instagram.com/longchamppalace"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Instagram className="w-4 h-4 text-primary" />
            <span>@longchamppalace</span>
          </a>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-8 text-center">
        <p className="font-body text-foreground/40 text-sm">
          © {new Date().getFullYear()} LONGCHAMP PALACE — Tous droits réservés
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
