import { Star } from "./ChalkIllustrations";

const reviews = [
  {
    name: "Marie L.",
    stars: 5,
    text: "Un vrai coup de cœur ! L'ambiance est incroyable, la cuisine délicieuse et le personnel adorable. On s'y sent comme chez soi.",
  },
  {
    name: "Thomas D.",
    stars: 5,
    text: "Le meilleur brunch de Marseille ! La terrasse est magnifique et les plats sont préparés avec soin. Je recommande vivement.",
  },
  {
    name: "Sophie M.",
    stars: 5,
    text: "Le patio est un vrai bijou, surtout en été. Les cocktails sont excellents et la carte change régulièrement. Un incontournable !",
  },
  {
    name: "Lucas B.",
    stars: 4,
    text: "Super ambiance, cuisine de qualité avec des produits frais. Le lieu est chaleureux et convivial. On y retourne avec plaisir.",
  },
];

const AvisSection = () => (
  <section id="avis" className="py-20 md:py-32 chalkboard-bg chalkboard-texture">
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <span className="font-chalk text-primary text-lg tracking-widest">Ce qu'ils en disent</span>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">Avis Clients</h2>
        <div className="flex items-center justify-center gap-2 mt-3 mb-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-primary' : 'text-primary/40'}`} />
            ))}
          </div>
          <span className="font-display text-foreground text-xl">4,41</span>
          <span className="font-body text-foreground/50 text-sm">/ 5 — 622 avis</span>
        </div>
        <div className="section-divider max-w-xs mx-auto" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="card-bistro flex flex-col">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: r.stars }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-primary" />
              ))}
              {Array.from({ length: 5 - r.stars }).map((_, i) => (
                <Star key={`e${i}`} className="w-4 h-4 text-muted-foreground/30" />
              ))}
            </div>
            <p className="font-body text-foreground/80 text-base leading-relaxed flex-1 italic">
              "{r.text}"
            </p>
            <p className="font-display text-primary text-sm mt-4">— {r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AvisSection;
