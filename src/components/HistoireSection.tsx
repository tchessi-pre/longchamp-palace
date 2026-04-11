import terrace from "@/assets/terrace.png";

const HistoireSection = () => (
  <section id="histoire" className="py-20 md:py-32 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="font-chalk text-primary text-lg tracking-widest">Depuis des années</span>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">Notre Histoire</h2>
        <div className="section-divider max-w-xs mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
        <div className="space-y-6">
          <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
            Situé à deux pas du Palais Longchamp à Marseille, le Longchamp Palace est devenu au fil des
            années un lieu de rencontre incontournable pour une certaine jeunesse marseillaise.
          </p>
          <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
            Avec son ambiance bistrot conviviale et bon enfant, le restaurant propose un cadre chaleureux
            où l'on aime se retrouver entre amis autour d'un verre, d'un bon plat et d'une atmosphère
            musicale animée.
          </p>
          <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
            Rénové en 2020, le lieu offre aujourd'hui un espace plus lumineux avec une agréable terrasse
            donnant sur le boulevard. À l'arrière du restaurant, une petite salle ouverte sur un patio
            constitue un véritable refuge pendant les soirées d'été.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 border border-primary/20 rounded-lg" />
          <img
            src={terrace}
            alt="La terrasse du Longchamp Palace à Marseille"
            className="rounded-lg w-full h-[400px] md:h-[500px] object-cover"
            loading="lazy"
            width={640}
            height={500}
          />
        </div>
      </div>
    </div>
  </section>
);

export default HistoireSection;
