"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProjetoDetalhes() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-dark dark:text-gray-100 font-body transition-colors duration-300">
      <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.back()}
                className="text-white hover:text-accent flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <span className="material-icons">arrow_back</span>
              </button>
              <div className="flex-shrink-0 font-display font-black text-2xl tracking-tighter uppercase leading-none hidden sm:block">
                Mulheres
                <span className="text-accent">Que Codam</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center space-x-1 text-sm font-medium bg-white/10 px-3 py-1 rounded-full text-white">
                <span className="material-icons text-base">
                  currency_exchange
                </span>
                <span>1 XLM = R$ 0,54</span>
              </div>
              <button
                onClick={toggleTheme}
                aria-label="Alternar Tema Escuro"
                className="p-2 rounded-full hover:bg-blue-800 focus:outline-none transition-colors"
              >
                {darkMode ? (
                  <span className="material-icons">light_mode</span>
                ) : (
                  <span className="material-icons">dark_mode</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
