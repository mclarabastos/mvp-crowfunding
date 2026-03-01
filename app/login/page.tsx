"use client";

import React from "react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="bg-white dark:bg-[#0f111a] text-[#1D1E27] dark:text-gray-200 transition-colors duration-300 h-screen w-full flex flex-col items-center justify-between p-6 overflow-hidden font-sans relative">
      {/* Background Shapes - Decorativos e fixos */}
      <div className="absolute z-0 opacity-20 top-[-5%] right-[-5%] w-72 h-72 bg-[#FF6600] rounded-full blur-[80px]"></div>
      <div className="absolute z-0 opacity-20 bottom-[-5%] left-[-5%] w-80 h-80 bg-[#0026A6] rounded-full blur-[100px]"></div>

      <div className="flex-grow flex items-center justify-center w-full">
        <main className="w-full max-w-md z-10 scale-90 md:scale-100 transition-transform">
          <div className="bg-white dark:bg-gray-900 rounded-[32px] shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
            {/* Header */}
            <header className="bg-[#0026A6] p-6 md:p-8 relative overflow-hidden flex items-center justify-between">
              <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-[#FF6600] rounded-full"></div>

              <div className="relative z-10 flex items-center gap-4 w-full">
                <div className="leading-none uppercase tracking-tighter font-black text-left">
                  <div className="text-white text-xl md:text-2xl">Mulheres</div>
                  <div className="text-[#FFD700] text-xl md:text-2xl">
                    Que <span className="text-[#FF6600]">Codam</span>
                  </div>
                </div>
                <div className="w-[1px] h-10 bg-white/30"></div>
                <div className="text-white text-[8px] md:text-[9px] font-bold uppercase leading-tight opacity-90 max-w-[100px]">
                  Decodificando o sistema, construindo o futuro
                </div>
              </div>
            </header>

            {/* Seção de Login */}
            <section className="p-8 md:p-10 text-center">
              <h1 className="text-xl md:text-2xl font-bold mb-1 text-[#1D1E27] dark:text-white tracking-tight">
                Acesse sua conta
              </h1>
              <p className="text-gray-400 dark:text-gray-500 mb-8 text-xs font-medium">
                Escolha uma das opções abaixo.
              </p>

              <div className="space-y-3 max-w-[280px] mx-auto">
                {/* Conexão com a Carteira (Freighter) */}
                <button className="w-full bg-[#0026A6] hover:bg-blue-800 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md uppercase text-[10px] tracking-widest">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 19.5L12 17L22 19.5L12 2Z"></path>
                  </svg>
                  <span>Conectar com Freighter</span>
                </button>

                {/* Divisor Visual */}
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-gray-100 dark:border-gray-800"></div>
                  <span className="px-3 text-gray-300 dark:text-gray-700 uppercase text-[9px] tracking-widest font-bold">
                    ou
                  </span>
                  <div className="flex-grow border-t border-gray-100 dark:border-gray-800"></div>
                </div>

                {/* Login Social com Google */}
                <button className="w-full bg-white dark:bg-[#1D1E27] border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 text-[#1D1E27] dark:text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all text-[10px] tracking-widest uppercase shadow-sm">
                  <Image
                    src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                    alt="Google Logo"
                    width={16}
                    height={16}
                  />
                  <span>Entrar com Google</span>
                </button>
              </div>

              {/* Auxílio ao usuário */}
              <div className="mt-8">
                <a
                  className="text-[#0026A6] dark:text-blue-400 text-[10px] font-bold hover:underline underline-offset-4"
                  href="#"
                >
                  Não tem uma carteira? Saiba como criar
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Footer com Textos Legais e Copyright */}
      <footer className="w-full max-w-xl pb-4 text-center px-4">
        <p className="text-[10px] text-gray-400 dark:text-gray-500 leading-relaxed mb-1">
          Ao entrar, você concorda com nossos{" "}
          <span className="underline cursor-pointer hover:text-[#0026A6]">
            Termos de Uso
          </span>{" "}
          e{" "}
          <span className="underline cursor-pointer hover:text-[#0026A6]">
            Política de Privacidade
          </span>
          .
        </p>
        <p className="text-[9px] text-gray-300 dark:text-gray-600 font-bold uppercase tracking-widest">
          © 2024 Mulheres que Codam. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
