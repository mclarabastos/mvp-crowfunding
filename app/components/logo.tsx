// app/components/Logo.tsx
import Link from "next/link";

type Props = {
  variant?: "hero" | "nav";
  href?: string;
  className?: string;
};

export default function Logo({ variant = "nav", href = "/", className = "" }: Props) {
  const isHero = variant === "hero";

  return (
    <Link href={href} className={`inline-block ${className}`} aria-label="Mulheres que Codam">
      {/* Linha 1 */}
      <div
        className={[
          "font-display font-black uppercase leading-[0.9]",
          isHero ? "text-5xl sm:text-6xl lg:text-7xl" : "text-lg sm:text-xl",
          "text-primary dark:text-white",
        ].join(" ")}
      >
        Mulheres
      </div>

      {/* Linha 2 */}
      <div
        className={[
          "font-display font-black uppercase leading-[0.9]",
          isHero ? "text-4xl sm:text-5xl lg:text-6xl" : "text-base sm:text-lg",
          "text-primary dark:text-white",
        ].join(" ")}
      >
        que
      </div>

      {/* Linha 3 (CODAM com recuo responsivo) */}
      <div
        className={[
          "font-display font-black uppercase leading-[0.9]",
          isHero ? "text-5xl sm:text-6xl lg:text-7xl" : "text-lg sm:text-xl",
          "text-accent",
          // ✅ “recuo” responsivo (ajustável fino)
          isHero ? "pl-10 sm:pl-12 lg:pl-16" : "pl-4 sm:pl-5",
        ].join(" ")}
      >
        Codam
      </div>
    </Link>
  );
}