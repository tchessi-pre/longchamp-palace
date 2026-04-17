import { useEffect, useState, type ReactNode } from "react";
import LogoMark from "@/components/LogoMark";

type AppLoaderProps = {
  children: ReactNode;
  minDurationMs?: number;
};

const AppLoader = ({ children, minDurationMs = 750 }: AppLoaderProps) => {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const finish = () => {
      const remaining = Math.max(0, minDurationMs - (Date.now() - start));
      window.setTimeout(() => {
        setExiting(true);
        window.setTimeout(() => setLoading(false), 450);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
      return;
    }

    window.addEventListener("load", finish, { once: true });
    return () => window.removeEventListener("load", finish);
  }, [minDurationMs]);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background overflow-hidden transition-all duration-500 ease-out ${exiting ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100"
          }`}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-90 pointer-events-none"
          style={{
            background:
              "radial-gradient(700px 420px at 50% 45%, hsla(var(--primary) / 0.12) 0%, transparent 68%)",
          }}
        />
        <style>
          {`@keyframes loaderZoom{0%,100%{transform:scale(.92)}50%{transform:scale(1.06)}}`}
        </style>
        <div className="relative flex flex-col items-center gap-6 px-6 text-center">
          <div style={{ animation: "loaderZoom 1400ms ease-in-out infinite", willChange: "transform" }}>
            <LogoMark
              className="h-24 w-24 sm:h-28 sm:w-28 opacity-95 drop-shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
              loading="eager"
              width={200}
              height={200}
            />
          </div>
          <div className="flex items-center gap-3 text-foreground/60">
            <span className="inline-flex h-5 w-5 rounded-full border-2 border-primary/30 border-t-primary animate-spin [animation-duration:900ms]" />
            <span className="font-elegant text-xs sm:text-sm tracking-[0.25em] uppercase">
              Chargement…
            </span>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default AppLoader;
