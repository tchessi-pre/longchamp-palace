import { useEffect, useState, type ReactNode } from "react";
import LogoMark from "@/components/LogoMark";

type AppLoaderProps = {
  children: ReactNode;
  minDurationMs?: number;
};

const AppLoader = ({ children, minDurationMs = 750 }: AppLoaderProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();

    const finish = () => {
      const remaining = Math.max(0, minDurationMs - (Date.now() - start));
      window.setTimeout(() => setLoading(false), remaining);
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
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-6 px-6 text-center">
          <LogoMark
            className="h-32 w-32 sm:h-28 sm:w-28 opacity-95 drop-shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
            loading="eager"
            width={200}
            height={200}
          />
          <div className="flex items-center gap-3 text-foreground/60">
            <span className="inline-flex h-5 w-5 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
            <span className="font-elegant text-sm tracking-[0.25em] uppercase">Chargement…</span>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default AppLoader;
