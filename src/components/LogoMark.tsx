import type { ComponentPropsWithoutRef } from "react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

type LogoMarkProps = ComponentPropsWithoutRef<"img"> & {
  inverted?: boolean;
};

const LogoMark = ({ className, alt = "Longchamp Palace", inverted = true, ...props }: LogoMarkProps) => (
  <img
    src={logo}
    alt={alt}
    className={cn("object-contain", inverted && "invert", className)}
    {...props}
  />
);

export default LogoMark;
