import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import terrace from "@/assets/terrace2.png";
import patio from "@/assets/patio.jpg";
import plat from "@/assets/plat.jpg";
import plat1 from "@/assets/plat1.jpg";
import plat2 from "@/assets/plat2.jpg";
import plat3 from "@/assets/plat3.jpg";
import plat4 from "@/assets/plat4.jpg";
import plat5 from "@/assets/plat5.jpg";
import plat6 from "@/assets/plat6.jpg";
import plat7 from "@/assets/plat7.jpg";
import cocktails from "@/assets/cocktails.jpg";
import ambiance from "@/assets/ambiance.png";
import dessert from "@/assets/dessert.jpg";
import interieur from "@/assets/interieur.jpg";
import vegetarien from "@/assets/végi.jpg";
import team from "@/assets/epuipe.png";
import painting from "@/assets/painting.jpeg";
import terraceInterieur from "@/assets/terrace-interieur.jpg"
import SectionHeader from "@/components/SectionHeader";

const images = [
  { src: terrace, alt: "La terrasse", label: "La Terrasse", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { src: painting, alt: "Expo de peintures", label: "Expo de peinture", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { src: interieur, alt: "L'intérieur du bar", label: "L'Intérieur" },
  { src: terraceInterieur, alt: "La terrasse intérieur", label: "La terrasse intérieur" },
  { src: ambiance, alt: "L'ambiance du bar", label: "L'Ambiance" },
  { src: team, alt: "L'équipe au complet", label: "L'équipe" },
  { src: plat1, alt: "Plat 1", label: "Nos Plats" },
  { src: cocktails, alt: "Les cocktails", label: "Les Cocktails", rowSpan: "md:row-span-2" },
  { src: patio, alt: "Le Patio", label: "Le Patio" },
  { src: plat2, alt: "Plat 2", label: "Nos Plats" },
  { src: plat3, alt: "Plat 3", label: "Nos Plats" },
  { src: plat4, alt: "Plat 4", label: "Nos Plats", colSpan: "md:col-span-2" },
  { src: dessert, alt: "Les desserts", label: "Les Desserts" },
  { src: plat5, alt: "Plat 5", label: "Nos Plats" },
  { src: plat6, alt: "Plat 6", label: "Nos Plats" },
  { src: plat7, alt: "Plat 7", label: "Nos Plats" },
  { src: plat, alt: "Les plats", label: "Les Plats", colSpan: "md:col-span-2" },
  { src: vegetarien, alt: "Les plats vegetariens", label: "Les Plats Vegetariens", colSpan: "md:col-span-2" },
];

const GalerieSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollToIndex = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const target = scroller.querySelector<HTMLElement>(`[data-slide="${index}"]`);
    target?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, []);

  const close = useCallback(() => setOpenIndex(null), []);

  const goPrev = useCallback(() => {
    setOpenIndex((current) => {
      if (current === null) return current;
      const next = (current - 1 + images.length) % images.length;
      window.setTimeout(() => scrollToIndex(next), 0);
      return next;
    });
  }, [scrollToIndex]);

  const goNext = useCallback(() => {
    setOpenIndex((current) => {
      if (current === null) return current;
      const next = (current + 1) % images.length;
      window.setTimeout(() => scrollToIndex(next), 0);
      return next;
    });
  }, [scrollToIndex]);

  useEffect(() => {
    if (openIndex === null) return;

    document.body.style.overflow = "hidden";
    const raf = window.requestAnimationFrame(() => scrollToIndex(openIndex));

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      window.cancelAnimationFrame(raf);
    };
  }, [close, goNext, goPrev, openIndex, scrollToIndex]);

  return (
    <section id="galerie" className="py-20 md:py-32 bg-background/95 ">
      <div className="container mx-auto px-4">
        <SectionHeader kicker="Découvrez notre univers" title="Galerie" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 auto-rows-[200px] gap-4 max-w-7xl mx-auto">
          {images.map((img, i) => (
            <button
              key={`${img.alt}-${i}`}
              type="button"
              onClick={() => setOpenIndex(i)}
              className={`gallery-item group relative overflow-hidden rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-primary/40 ${img.colSpan || ""} ${img.rowSpan || ""}`}
              aria-label={`Voir ${img.label}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-chalk text-foreground text-lg">{img.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onMouseDown={close}
          role="dialog"
          aria-modal="true"
          aria-label="Galerie"
        >
          <div className="relative w-full max-w-6xl" onMouseDown={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="absolute -top-12 right-0 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 border border-white/10 backdrop-blur-md p-2 text-white/90 transition-colors"
              onClick={close}
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative">
              <div
                ref={scrollerRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-3xl border border-white/10 bg-black/35 backdrop-blur-md shadow-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {images.map((img, i) => (
                  <div key={`${img.alt}-slide-${i}`} data-slide={i} className="snap-center shrink-0 w-full">
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black/30">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-contain"
                        loading="eager"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-4 px-5 py-4">
                      <div className="min-w-0">
                        <div className="font-chalk text-white/95 text-lg truncate">{img.label}</div>
                        <div className="text-white/60 text-xs font-elegant tracking-widest uppercase truncate">{img.alt}</div>
                      </div>
                      <div className="text-white/60 text-xs font-elegant tracking-widest">
                        {i + 1} / {images.length}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 border border-white/10 backdrop-blur-md p-2 text-white/90 transition-colors"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 border border-white/10 backdrop-blur-md p-2 text-white/90 transition-colors"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalerieSection;
