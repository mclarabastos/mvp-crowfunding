"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

export default function Navbar() {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Sobre nós", href: "/dashboard" },
      { label: "Projetos", href: "/projetos" },
      { label: "Parceiros", href: "/transparencia" },
      { label: "Contato", href: "/carteira" },
    ],
    []
  );

  const isPageActive = (path: string) => pathname === path;

  useEffect(() => {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const stored = localStorage.theme;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);

    setDarkMode(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  // Fecha menu mobile ao navegar
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.theme = next ? "dark" : "light";
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur dark:bg-slate-950/55">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-1 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group inline-flex items-center gap-3"
          aria-label="Voltar para a Home"
        >
          <div className="flex flex-col leading-none">
            {/* Linha 1 */}
            <span className="font-display font-black uppercase tracking-tight text-primary dark:text-white text-lg leading-none">
              Mulheres
            </span>

            {/* Linha 2: QUE + CODAM juntos */}
            <span className="-mt-1 font-display font-black uppercase tracking-tight text-primary dark:text-white text-sm sm:text-base leading-none">
              <span className="inline-flex items-baseline gap-1 sm:gap-1.5">
                <span>Que</span>
                <span className="text-accent">Codam</span>
              </span>
            </span>
          </div>
        </Link>

        {/* Links desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const active = isPageActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "text-sm font-semibold tracking-wide transition-colors",
                  "text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white",
                  active ? "text-primary dark:text-white" : "",
                ].join(" ")}
              >
                <span className="relative">
                  {item.label}
                  <span
                    className={[
                      "absolute -bottom-2 left-0 h-0.5 w-full rounded-full transition-opacity",
                      "bg-accent",
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-40",
                    ].join(" ")}
                    aria-hidden
                  />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Ações (toggle + CTA + hamburger) */}
        <div className="flex items-center gap-3">
          {/* CTA Faça parte */}
          <Link
            href="/login"
            className="
              hidden sm:inline-flex items-center justify-center
              rounded-xl px-4 py-2
              text-sm font-semibold
              bg-primary text-white
              hover:brightness-110
              transition
              focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
            "
          >
            Faça parte
          </Link>

          {/* Toggle tema */}
          <button
            type="button"
            onClick={toggleTheme}
            className="
              inline-flex items-center justify-center
              rounded-xl p-2
              bg-slate-50 text-slate-600
              hover:bg-slate-100
              border border-slate-200
              transition
              dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:border-slate-800
              focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50
            "
            aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            <span className="material-icons text-xl">
              {darkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="
              lg:hidden inline-flex items-center justify-center
              rounded-xl p-2
              bg-slate-50 text-slate-700
              hover:bg-slate-100
              border border-slate-200
              transition
              dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:border-slate-800
              focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50
            "
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            <span className="material-icons text-xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile dropdown */}
      <div
        className={[
          "lg:hidden overflow-hidden border-t border-slate-200/70 dark:border-slate-800/70",
          mobileOpen ? "max-h-96" : "max-h-0",
          "transition-[max-height] duration-300 ease-in-out",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex flex-col gap-2">
          {/* CTA no mobile */}
          <Link
            href="/dashboard"
            className="
              inline-flex items-center justify-center
              rounded-xl px-4 py-3
              text-sm font-semibold
              bg-primary text-white
              hover:brightness-110 transition
            "
          >
            Faça parte
          </Link>

          {navItems.map((item) => {
            const active = isPageActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-xl px-4 py-3 text-sm font-semibold transition",
                  "bg-slate-50 text-slate-700 hover:bg-slate-100",
                  "dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800",
                  active ? "ring-2 ring-accent/50" : "",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}