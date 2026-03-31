import { MapPin, Phone, Clock } from "lucide-react";

const InfoSection = () => (
  <section id="contact" className="py-20 md:py-32 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="font-chalk text-primary text-lg tracking-widest">Venez nous voir</span>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">Informations</h2>
        <div className="section-divider max-w-xs mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg text-foreground mb-1">Adresse</h3>
              <p className="font-body text-foreground/70 text-lg">22 Bd Longchamp, 13001 Marseille</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg text-foreground mb-1">Téléphone</h3>
              <a href="tel:0486972259" className="font-body text-foreground/70 text-lg hover:text-primary transition-colors">
                04 86 97 22 59
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg text-foreground mb-1">Horaires</h3>
              <div className="font-body text-foreground/70 text-base space-y-1">
                <p>Lundi – Jeudi : 08h00 – 01h00</p>
                <p>Vendredi – Samedi : 08h00 – 02h00</p>
                <p>Dimanche : 09h00 – 01h00</p>
              </div>
            </div>
          </div>

          <a href="tel:0486972259" className="btn-gold inline-block mt-4">
            Réserver une table
          </a>
        </div>

        <div className="rounded-lg overflow-hidden h-[350px] md:h-full min-h-[350px] border border-border">
          <iframe
            title="Longchamp Palace - Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.8!2d5.3915!3d43.3035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0c7a0a0a0a1%3A0x0!2s22+Bd+Longchamp%2C+13001+Marseille!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default InfoSection;
