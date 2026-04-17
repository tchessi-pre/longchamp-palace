import brunch from "@/assets/brunch.jpg";
import SectionHeader from "@/components/SectionHeader";

const BrunchSection = () => (
  <section className="relative py-20 md:py-32 overflow-hidden">
    <div className="absolute inset-0">
      <img src={brunch} alt="Brunch du week-end" className="w-full h-full object-cover" loading="lazy" width={1280} height={720} />
      <div className="absolute inset-0 bg-chalkboard/80" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
      <SectionHeader kicker="Chaque week-end" title="Brunch du week-end" className="mb-8" />
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
