import plat from "@/assets/plat.jpg";
import dessert from "@/assets/dessert.jpg";

const CuisineSection = () => (
  <section id="cuisine" className="py-20 md:py-32 chalkboard-bg chalkboard-texture">
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <span className="font-chalk text-primary text-lg tracking-widest">Produits frais & locaux</span>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">La Cuisine</h2>
        <div className="section-divider max-w-xs mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
          <div className="gallery-item rounded-lg overflow-hidden">
            <img src={plat} alt="Plat du chef" className="h-64 w-full object-cover" loading="lazy" width={400} height={256} />
          </div>
          <div className="gallery-item rounded-lg overflow-hidden mt-8">
            <img src={dessert} alt="Dessert maison" className="h-64 w-full object-cover" loading="lazy" width={400} height={256} />
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-6">
          <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
            La carte change chaque mois et propose entre 8 et 10 suggestions élaborées à partir de
            produits frais. Le chef privilégie une cuisine locale, simple et savoureuse, mettant en
            valeur la qualité des ingrédients.
          </p>
          <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
            Les desserts apportent également une touche de fraîcheur et de gourmandise pour conclure
            le repas.
          </p>
          <a href="tel:0486972259" className="btn-gold inline-block mt-4">
            Réserver une table
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CuisineSection;
