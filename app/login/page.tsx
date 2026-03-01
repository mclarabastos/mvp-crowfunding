"use client";

import React from "react";
import Image from "next/image";

export default function LoginPage() {
  const handleGoogleLogin = () => {
    /**
     * ✅ Login Google REAL:
     * Para funcionar, você precisa configurar autenticação no projeto (ex: NextAuth).
     *
     * Com NextAuth configurado com provider Google, esse endpoint existe:
     * /api/auth/signin/google
     *
     * Aí isso aqui redireciona pro fluxo oficial do Google.
     */
    const callbackUrl = encodeURIComponent("/dashboard");
    window.location.href = `/api/auth/signin/google?callbackUrl=${callbackUrl}`;
  };

  const handleFreighterConnect = async () => {
    // Se você for integrar Freighter depois, esse é o lugar.
    // Ex: checar window.freighterApi etc.
    alert("Conectar com Freighter (integração em andamento)");
  };

  return (
    <div className="min-h-screen w-full font-sans relative overflow-hidden bg-white text-[#1D1E27] dark:bg-[#0f111a] dark:text-gray-200 transition-colors duration-300">
      {/* Background Shapes - Decorativos e fixos */}
      <div className="absolute z-0 opacity-25 top-[-6%] right-[-6%] w-80 h-80 bg-[#FF6600] rounded-full blur-[90px]" />
      <div className="absolute z-0 opacity-25 bottom-[-6%] left-[-6%] w-96 h-96 bg-[#0026A6] rounded-full blur-[110px]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Conteúdo central */}
        <div className="flex-1 flex items-center justify-center px-6 py-10">
          <main className="w-full max-w-lg">
            <div className="bg-white dark:bg-gray-900 rounded-[36px] shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
              {/* Header */}
              <header className="bg-[#0026A6] px-8 py-8 md:px-10 md:py-9 relative overflow-hidden">
                {/* detalhe laranja */}
                <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-[#FF6600] rounded-full" />

                {/* Conteúdo centralizado */}
                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  {/* Logo */}
                  <div className="leading-none uppercase tracking-tighter font-black">
                    <div className="text-white text-2xl md:text-[28px]">
                      Mulheres
                    </div>
                    <div className="text-white text-2xl md:text-[28px]">
                      Que <span className="text-[#ffca00]">Codam</span>
                    </div>
                  </div>

                  {/* divisor */}
                  <div className="h-px w-44 bg-white/25" />

                  {/* slogan */}
                  <div className="text-white text-[11px] md:text-[12px] font-bold uppercase leading-tight opacity-90 tracking-wide">
                    Juntas programando o futuro.
                  </div>
                </div>
              </header>

              {/* Seção de Login */}
              <section className="px-8 py-9 md:px-10 md:py-10 text-center">
                <h1 className="text-2xl md:text-[28px] font-bold mb-2 text-[#1D1E27] dark:text-white tracking-tight">
                  Acesse sua conta
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mb-9 text-sm md:text-[15px] font-medium">
                  Escolha uma das opções abaixo.
                </p>

                <div className="space-y-4 max-w-[340px] mx-auto">
                  {/* Conexão com a Carteira (Freighter) */}
                  <button
                    onClick={handleFreighterConnect}
                    className="w-full bg-[#0026A6] hover:bg-blue-800 text-white font-bold py-4 px-5 rounded-2xl flex items-center justify-center gap-2.5 transition-all active:scale-[0.99] shadow-md uppercase text-xs md:text-sm tracking-widest"
                  >
                    <svg
                      className="w-4 h-4 md:w-[18px] md:h-[18px]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2L2 19.5L12 17L22 19.5L12 2Z"></path>
                    </svg>
                    <span>Conectar com Freighter</span>
                  </button>

                  {/* Divisor Visual */}
                  <div className="relative flex items-center py-1.5">
                    <div className="flex-grow border-t border-gray-100 dark:border-gray-800"></div>
                    <span className="px-3 text-gray-300 dark:text-gray-700 uppercase text-[10px] tracking-widest font-bold">
                      ou
                    </span>
                    <div className="flex-grow border-t border-gray-100 dark:border-gray-800"></div>
                  </div>

                  {/* Login Social com Google */}
                  <button
                    onClick={handleGoogleLogin}
                    className="w-full bg-white dark:bg-[#1D1E27] border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 text-[#1D1E27] dark:text-white font-bold py-4 px-5 rounded-2xl flex items-center justify-center gap-2.5 transition-all active:scale-[0.99] text-xs md:text-sm tracking-widest uppercase shadow-sm"
                  >
                    <Image
                      src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                      alt="Google Logo"
                      width={18}
                      height={18}
                    />
                    <span>Entrar com Google</span>
                  </button>
                </div>

                {/* Auxílio ao usuário */}
                <div className="mt-9">
                  <a
                    className="text-[#0026A6] dark:text-blue-400 text-xs md:text-sm font-bold hover:underline underline-offset-4"
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
        <footer className="w-full max-w-2xl mx-auto pb-6 text-center px-6">
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-2">
            Ao entrar, você concorda com nossos{" "}
            <span className="underline cursor-pointer hover:text-[#0026A6] dark:hover:text-blue-300">
              Termos de Uso
            </span>{" "}
            e{" "}
            <span className="underline cursor-pointer hover:text-[#0026A6] dark:hover:text-blue-300">
              Política de Privacidade
            </span>
            .
          </p>
          <p className="text-[10px] md:text-[11px] text-gray-400 dark:text-gray-600 font-bold uppercase tracking-widest">
            © 2024 Mulheres que Codam. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}