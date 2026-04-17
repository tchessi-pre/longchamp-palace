import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: ReactNode;
  kicker?: ReactNode;
  afterTitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

const SectionHeader = ({
  title,
  kicker,
  afterTitle,
  align = "center",
  className,
}: SectionHeaderProps) => {
  const centered = align === "center";

  return (
    <div className={cn(centered ? "text-center" : "text-left", "mb-16", className)}>
      <div className={cn("inline-flex flex-col gap-5", centered ? "items-center" : "items-start")}>
        {kicker ? (
          <div className={cn("flex items-center gap-3", centered && "justify-center")}>
            <span aria-hidden className="hidden sm:block h-px w-8 bg-primary/35" />
            <span className="font-chalk text-primary text-xl md:text-2xl tracking-[0.25em]">
              {kicker}
            </span>
            <span aria-hidden className="hidden sm:block h-px w-8 bg-primary/35" />
          </div>
        ) : null}

        <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-[0.12em]">
          {title}
        </h2>

        {afterTitle ? afterTitle : null}

        <div className={cn("flex w-72 max-w-[90vw] items-center gap-3", centered && "mx-auto")}>
          <div className="h-px flex-1 bg-primary/25" />
          <div className="h-3 w-3 rotate-45 border border-primary/50 bg-primary/10" />
          <div className="h-px flex-1 bg-primary/25" />
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
