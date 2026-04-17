import plat from "@/assets/plat.jpg";
import dessert from "@/assets/dessert.jpg";
import cocktails2 from "@/assets/cocktail2.jpg";
import cocktails from "@/assets/cocktails.jpg";
import SectionHeader from "@/components/SectionHeader";

const CuisineSection = () => (
  <section id="cuisine" className="relative py-20 md:py-32 chalkboard-bg chalkboard-texture overflow-hidden">
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          background:
            "radial-gradient(900px 520px at 50% 18%, hsla(var(--primary) / 0.10) 0%, transparent 60%), radial-gradient(1100px 700px at 50% 115%, rgba(0,0,0,0.55) 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-soft-light"
        style={{
          background:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 18px)",
        }}
      />
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <SectionHeader kicker="Produits frais & locaux" title="La Cuisine" />

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 max-w-6xl mx-auto items-center">
        <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
          <div className="gallery-item group rounded-2xl overflow-hidden ring-1 ring-primary/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <img
              src={plat}
              alt="Plat du chef"
              className="h-56 sm:h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={400}
              height={256}
            />
          </div>
          <div className="gallery-item group rounded-2xl overflow-hidden mt-8 ring-1 ring-primary/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <img
              src={dessert}
              alt="Dessert maison"
              className="h-56 sm:h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={400}
              height={256}
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative rounded-3xl border border-primary/15 bg-background/10 backdrop-blur-sm shadow-[0_26px_90px_rgba(0,0,0,0.45)] overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light"
              style={{
                background:
                  "repeating-linear-gradient(0deg, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 10px)",
              }}
            />
            <div className="relative p-7 md:p-8 space-y-6">
              <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
                La carte change chaque mois et propose entre 8 et 10 suggestions élaborées à partir de
                produits frais. Le chef privilégie une cuisine locale, simple et savoureuse, mettant en
                valeur la qualité des ingrédients.
              </p>
              <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
                Les desserts apportent également une touche de fraîcheur et de gourmandise pour conclure
                le repas.
              </p>
              <div className="pt-2">
                <a href="tel:0486972259" className="btn-gold inline-block">
                  Réserver une table
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 md:mt-20">
        <div className="mx-auto flex w-72 max-w-[90vw] items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-primary/20" />
          <div className="h-3 w-3 rotate-45 border border-primary/45 bg-primary/10" />
          <div className="h-px flex-1 bg-primary/20" />
        </div>
        <div className="space-y-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span aria-hidden className="hidden sm:block h-px w-10 bg-primary/25" />
                  <span className="font-chalk text-primary text-xl md:text-2xl tracking-[0.25em]">
                    Cocktails & bonne humeur
                  </span>
                  <span aria-hidden className="hidden sm:block h-px w-10 bg-primary/25" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-foreground tracking-[0.10em]">
                  Le Bar
                </h3>
                <div className="flex w-56 max-w-full items-center gap-3">
                  <div className="h-px flex-1 bg-primary/15" />
                  <div className="h-2.5 w-2.5 rotate-45 border border-primary/40 bg-primary/10" />
                  <div className="h-px flex-1 bg-primary/15" />
                </div>
              </div>
              <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
                Le soir, le Longchamp Palace se transforme en lieu de rendez‑vous chaleureux : cocktails,
                musique et une ambiance festive pour prolonger la soirée.
              </p>
              <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed">
                Soirées dansantes le jeudi, vendredi et samedi, jusqu’à 1h30.
              </p>
              <a href="#contact" className="btn-outline-chalk inline-block">
                Nous contacter
              </a>
            </div>

            <div className="relative rounded-3xl border border-primary/15 bg-background/10 backdrop-blur-sm p-6 md:p-7 shadow-[0_26px_90px_rgba(0,0,0,0.40)] overflow-hidden">
              <div aria-hidden className="absolute inset-0 opacity-[0.10] mix-blend-soft-light" style={{ background: "repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 18px)" }} />
              <div className="relative flex items-center justify-between">
                <div className="font-chalk text-primary tracking-[0.35em] text-sm">SOIRÉES</div>
                <div className="hidden sm:flex items-center gap-2">
                  <div className="h-px w-10 bg-primary/20" />
                  <div className="h-2.5 w-2.5 rotate-45 border border-primary/40 bg-primary/10" />
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-elegant text-foreground/80 tracking-wide">Jeudi</span>
                  <span className="font-elegant text-foreground/60">Jusqu’à 1h30</span>
                </div>
                <div className="h-px w-full bg-primary/15" />
                <div className="flex items-center justify-between gap-4">
                  <span className="font-elegant text-foreground/80 tracking-wide">Vendredi</span>
                  <span className="font-elegant text-foreground/60">Jusqu’à 1h30</span>
                </div>
                <div className="h-px w-full bg-primary/15" />
                <div className="flex items-center justify-between gap-4">
                  <span className="font-elegant text-foreground/80 tracking-wide">Samedi</span>
                  <span className="font-elegant text-foreground/60">Jusqu’à 1h30</span>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-primary/15 bg-primary/5 p-4">
                <div className="font-body text-foreground/70 text-sm leading-relaxed">
                  Une bonne ambiance, des verres bien servis et de quoi danser pour finir la semaine en
                  beauté.
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="gallery-item group relative rounded-3xl overflow-hidden ring-1 ring-primary/10 shadow-[0_22px_70px_rgba(0,0,0,0.35)]">
              <img
                src={cocktails2}
                alt="Cocktails signature"
                className="h-56 sm:h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={960}
                height={520}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent opacity-90" />
              <div className="pointer-events-none absolute bottom-3 left-4 right-4 flex items-center justify-between gap-3">
                <span className="font-elegant text-white/90 text-xs tracking-[0.28em] uppercase">Cocktails</span>
                <span className="h-2 w-2 rotate-45 border border-white/60 bg-white/10" />
              </div>
            </div>
            <div className="gallery-item group relative rounded-3xl overflow-hidden ring-1 ring-primary/10 shadow-[0_22px_70px_rgba(0,0,0,0.35)]">
              <img
                src={cocktails}
                alt="Sélection de cocktails"
                className="h-56 sm:h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={960}
                height={520}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent opacity-90" />
              <div className="pointer-events-none absolute bottom-3 left-4 right-4 flex items-center justify-between gap-3">
                <span className="font-elegant text-white/90 text-xs tracking-[0.28em] uppercase">Ambiance</span>
                <span className="h-2 w-2 rotate-45 border border-white/60 bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CuisineSection;
