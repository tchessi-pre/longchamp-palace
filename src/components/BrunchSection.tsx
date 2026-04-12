import brunch from "@/assets/brunch.jpg";

const BrunchSection = () => (
  <section className="relative py-20 md:py-32 overflow-hidden">
    <div className="absolute inset-0">
      <img src={brunch} alt="Brunch du week-end" className="w-full h-full object-cover" loading="lazy" width={1280} height={720} />
      <div className="absolute inset-0 bg-chalkboard/80" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
      <span className="font-chalk text-primary text-2xl tracking-widest">Chaque week-end</span>
      <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2 mb-4">
        Brunch du week-end
      </h2>
      <div className="section-divider max-w-xs mx-auto mb-8" />
      <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
        Chaque week-end jusqu'à midi, le Longchamp Palace propose un brunch copieux et convivial,
        devenu un rendez-vous apprécié des habitués.
      </p>
      <a href="tel:0486972259" className="btn-outline-chalk">
        Réserver pour le brunch
      </a>
    </div>
  </section>
);

export default BrunchSection;
