import { CSSProperties } from "react";

type Props = { className?: string; style?: CSSProperties };

const WineGlass = ({ className = "", style }: Props) => (
  <svg className={className} style={style} viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10 C20 10 15 35 15 45 C15 55 25 60 30 60 C35 60 45 55 45 45 C45 35 40 10 40 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <line x1="30" y1="60" x2="30" y2="85" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
    <path d="M20 85 C20 85 25 88 30 88 C35 88 40 85 40 85" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <path d="M18 35 C22 40 38 40 42 35" stroke="currentColor" strokeWidth="1" opacity="0.4" />
  </svg>
);

const Fork = ({ className = "", style }: Props) => (
  <svg className={className} style={style} viewBox="0 0 30 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="8" y1="10" x2="8" y2="40" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
    <line x1="15" y1="10" x2="15" y2="40" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
    <line x1="22" y1="10" x2="22" y2="40" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
    <path d="M8 40 C8 48 15 50 15 50 C15 50 22 48 22 40" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
    <line x1="15" y1="50" x2="15" y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
  </svg>
);

const Leaf = ({ className = "", style }: Props) => (
  <svg className={className} style={style} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 50 C10 50 20 10 70 10 C70 10 50 20 40 35 C30 50 10 50 10 50Z" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    <path d="M10 50 C25 35 45 20 70 10" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
    <path d="M25 40 C30 30 40 22 50 18" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
  </svg>
);

const Star = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export { WineGlass, Fork, Leaf, Star };
