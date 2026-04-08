import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = ({ threshold = 500 }: { threshold?: number }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Retour en haut"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 inline-flex items-center justify-center size-11 rounded-full bg-primary text-background shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
