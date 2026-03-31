import terrace from "@/assets/terrace.jpg";
import patio from "@/assets/patio.jpg";
import plat from "@/assets/plat.jpg";
import cocktails from "@/assets/cocktails.jpg";
import ambiance from "@/assets/ambiance.jpg";
import dessert from "@/assets/dessert.jpg";
import interieur from "@/assets/interieur.jpg";

const images = [
  { src: terrace, alt: "La terrasse", label: "La Terrasse" },
  { src: interieur, alt: "L'intérieur du bar", label: "L'Intérieur" },
  { src: plat, alt: "Les plats", label: "Les Plats" },
  { src: cocktails, alt: "Les cocktails", label: "Les Cocktails" },
  { src: patio, alt: "Le Patio", label: "Le Patio" },
  { src: dessert, alt: "Les desserts", label: "Les Desserts" },
];

const GalerieSection = () => (
  <section id="galerie" className="py-20 md:py-32 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="font-chalk text-primary text-lg tracking-widest">Découvrez notre univers</span>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">Galerie</h2>
        <div className="section-divider max-w-xs mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <div
            key={img.alt}
            className={`gallery-item group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className={`w-full object-cover ${i === 0 ? "h-64 md:h-full" : "h-48 md:h-64"}`}
              loading="lazy"
              width={400}
              height={300}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-chalk text-foreground text-lg">{img.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GalerieSection;
