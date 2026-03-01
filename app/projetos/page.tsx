"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Projetos() {
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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200 transition-colors duration-200">
      {/* CABEÇALHO ANTIGO REMOVIDO - AGORA USA A NAVBAR GLOBAL DO LAYOUT */}

      <header className="relative bg-[#002B99] overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between">
          <div className="sm:max-w-xl mb-8 sm:mb-0">
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-4 leading-none uppercase">
              Decodificando o sistema,
              <br />
              <span className="text-yellow-400">construindo o futuro.</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl font-medium opacity-90 uppercase tracking-widest leading-relaxed">
              Apoie projetos que empoderam mulheres de comunidades periféricas
              através da educação tecnológica.
            </p>
          </div>

          <div className="relative group w-full max-w-sm md:max-w-md">
            <div className="relative bg-transparent rounded-[3rem] shadow-2xl transform rotate-3 border-l-[12px] border-[#FF6600] w-full overflow-hidden h-[350px] md:h-[450px] transition-all hover:rotate-0 hover:scale-[1.02] duration-500">
              <Image
                src="/images/projetos/mqc-ideathon.jpeg"
                alt="Mulheres que Codam Ideathon"
                fill
                className="object-cover" // Removi o rounded interno para não haver conflito com o arredondamento do pai
                priority
              />
              {/* Overlay de legenda interna */}
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <span className="bg-[#FF6600] text-white text-[11px] font-black px-6 py-2.5 rounded-full uppercase tracking-[0.2em] shadow-xl">
                  MQC Ideathon
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-white dark:bg-slate-900 p-6 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800">
          <div className="relative w-full lg:w-96">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-icons text-slate-400">search</span>
            </span>
            <input
              className="block w-full pl-12 pr-4 py-3 border border-slate-200 dark:border-slate-700 rounded-2xl leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#002B99] transition-all font-bold text-sm"
              placeholder="Buscar projetos, tags..."
              type="text"
            />
          </div>

          <div className="flex flex-wrap gap-3 w-full lg:w-auto">
            <button className="px-6 py-2.5 rounded-full bg-[#002B99] text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
              Todos
            </button>
            <button className="px-6 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all">
              Segurança
            </button>
            <button className="px-6 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all">
              Social
            </button>
            <button className="px-6 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all">
              Financeiro
            </button>
            <button className="px-6 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all">
              Educação
            </button>
            <button className="px-6 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all">
              Eventos
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-4 uppercase tracking-tighter">
            <span className="w-2 h-10 bg-orange-500 rounded-full inline-block"></span>
            Projetos Aprovados
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* PROJETO 1 */}
          <div className="group bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col h-full relative">
            <div className="h-56 bg-slate-200 relative overflow-hidden">
              <img
                alt="MQC 2 edição"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src="images/projetos/projeto-destaque/mqc-banner.jpeg"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-orange-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                  Destaque
                </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-lg">
                  EDUCAÇÃO
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-none uppercase">
                MQC - 2ª EDIÇÃO!
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 font-medium leading-relaxed flex-1">
                A iniciativa capacita mulheres de periferias do Rio para o
                mercado de tecnologia e WEB3, oferecendo formação em programação
                com suporte integral e humanizado.
              </p>
              <div className="mb-6 space-y-3">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Arrecadado
                    </span>
                    <span className="font-black text-slate-900 dark:text-white">
                      83.333 XLM
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                    75% da Meta
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="bg-[#002B99] h-full rounded-full transition-all duration-1000"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-50 dark:border-slate-800 mt-auto">
                <Link
                  href="/contribuir?projeto=1&nome=Bootcamp%20Fullstack%20Periferia"
                  className="bg-[#002B99] hover:bg-blue-800 text-white font-black py-4 px-6 rounded-2xl transition-all w-full text-center block text-[10px] uppercase tracking-[0.2em] shadow-lg active:scale-95"
                >
                  Apoiar Projeto
                </Link>
              </div>
            </div>
          </div>

          {/* PROJETO 2 */}
          <div className="group bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col h-full relative">
            <div className="h-56 bg-slate-200 relative overflow-hidden">
              <img
                alt="Grupo de estudantes"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-lg">
                  SEGURANÇA
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-none uppercase">
                ELO.ME
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 font-medium leading-relaxed flex-1">
                Elo.me é uma infraestrutura digital para a saúde privada que
                unifica dados clínicos fragmentados. Permite registros seguros,
                imutáveis e com validade jurídica para clínicas, garantindo
                interoperabilidade, baixo custo e controle dos dados pelo
                paciente.
              </p>
              <div className="mb-6 space-y-3">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Arrecadado
                    </span>
                    <span className="font-black text-slate-900 dark:text-white">
                      12.500 XLM
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">
                    50% da Meta
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="bg-orange-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-50 dark:border-slate-800 mt-auto">
                <Link
                  href="/contribuir?projeto=2&nome=Tech%20Leaders%20for%20Tomorrow"
                  className="bg-[#002B99] hover:bg-blue-800 text-white font-black py-4 px-6 rounded-2xl transition-all w-full text-center block text-[10px] uppercase tracking-[0.2em] shadow-lg active:scale-95"
                >
                  Apoiar Projeto
                </Link>
              </div>
            </div>
          </div>

          {/* PROJETO 3 */}
          <div className="group bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col h-full relative">
            <div className="h-56 bg-slate-200 relative overflow-hidden">
              <img
                alt="Hackathon"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-lg">
                  EDUCAÇÃO
                </span>
              </div>
              <h3 className="text-2xl font-display font-display font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-none uppercase">
                STELLARBRIDGE
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 font-medium leading-relaxed flex-1">
                Inclusão , capacitação e inserção de mulheres trans no mercado
                de trabalho.
              </p>
              <div className="mb-6 space-y-3">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Arrecadado
                    </span>
                    <span className="font-black text-slate-900 dark:text-white">
                      33.333 XLM
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                    90% da Meta
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="bg-[#002B99] h-full rounded-full transition-all duration-1000"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-50 dark:border-slate-800 mt-auto">
                <Link
                  href="/contribuir?projeto=3&nome=Hackathon%20Mulheres%20Negras%20Tech"
                  className="bg-[#002B99] hover:bg-blue-800 text-white font-black py-4 px-6 rounded-2xl transition-all w-full text-center block text-[10px] uppercase tracking-[0.2em] shadow-lg active:scale-95"
                >
                  Apoiar Projeto
                </Link>
              </div>
            </div>
          </div>

          {/* PROJETO 4 */}
          <div className="group bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col h-full relative">
            <div className="h-56 bg-slate-200 relative overflow-hidden">
              <img
                alt="Node JS Girls"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-lg">
                  SOCIAL
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-none uppercase">
                KARN
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 font-medium leading-relaxed flex-1">
                Primeira implementação da Valocracia na Stellar.
              </p>
              <div className="mb-6 space-y-3">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Arrecadado
                    </span>
                    <span className="font-black text-slate-900 dark:text-white">
                      1.111 XLM
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">
                    10% da Meta
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="bg-orange-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: "10%" }}
                  ></div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-50 dark:border-slate-800 mt-auto">
                <Link
                  href="/contribuir?projeto=4&nome=Node.js%20Girls%20Rio"
                  className="bg-[#002B99] hover:bg-blue-800 text-white font-black py-4 px-6 rounded-2xl transition-all w-full text-center block text-[10px] uppercase tracking-[0.2em] shadow-lg active:scale-95"
                >
                  Apoiar Projeto
                </Link>
              </div>
            </div>
          </div>

          {/* PROJETO 5 */}
          <div className="group bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col h-full relative">
            <div className="h-56 bg-slate-200 relative overflow-hidden">
              <img
                alt="CyberSegurança"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src="/images/projetos/projeto-5/vizinhanca-cuidadora-banner.png"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-lg">
                  SOCIAL
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-none uppercase">
                VIZINHANÇA CUIDADORA
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 font-medium leading-relaxed flex-1">
                Uma plataforma comunitária que conecta profissionais de saúde e
                apoio a moradores locais, utilizando a Blockchain Stellar para
                garantir pagamentos transparentes e a sustentabilidade de um
                fundo social comunitário.
              </p>
              <div className="mb-6 space-y-3">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Arrecadado
                    </span>
                    <span className="font-black text-slate-900 dark:text-white">
                      66.666 XLM
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-[#002B99] uppercase tracking-widest">
                    45% da Meta
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="bg-[#002B99] h-full rounded-full transition-all duration-1000"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-50 dark:border-slate-800 mt-auto">
                <Link
                  href="/contribuir?projeto=5&nome=CyberSeguranca%20na%20Favela"
                  className="bg-[#002B99] hover:bg-blue-800 text-white font-black py-4 px-6 rounded-2xl transition-all w-full text-center block text-[10px] uppercase tracking-[0.2em] shadow-lg active:scale-95"
                >
                  Apoiar Projeto
                </Link>
              </div>
            </div>
          </div>

          {/* PROJETO 6 */}
          <div className="group bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col h-full relative">
            <div className="h-56 bg-slate-200 relative overflow-hidden">
              <img
                alt="Projeto VoidCast"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
              />
              <div className="absolute top-6 left-6"></div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-lg">
                  EDUCAÇÃO
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-none uppercase">
                VOID CAST
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 font-medium leading-relaxed flex-1">
                Engine de Compilação multichain projetada para resolver a lacuna
                de performance no desenvolvimento de contratos inteligentes.
              </p>
              <div className="mb-6 space-y-3">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Arrecadado
                    </span>
                    <span className="font-black text-slate-900 dark:text-white">
                      83.333 XLM
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                    75% da Meta
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="bg-[#002B99] h-full rounded-full transition-all duration-1000"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-50 dark:border-slate-800 mt-auto">
                <Link
                  href="/contribuir?projeto=1&nome=Bootcamp%20Fullstack%20Periferia"
                  className="bg-[#002B99] hover:bg-blue-800 text-white font-black py-4 px-6 rounded-2xl transition-all w-full text-center block text-[10px] uppercase tracking-[0.2em] shadow-lg active:scale-95"
                >
                  Apoiar Projeto
                </Link>
              </div>
            </div>
          </div>

          {/* PROJETO 7 */}
          <div className="group bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col h-full relative">
            <div className="h-56 bg-slate-200 relative overflow-hidden">
              <img
                alt="Web3"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                  Concluído
                </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col opacity-60">
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-lg">
                  FINANCEIRO
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-none uppercase">
                STELLACOFRE
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 font-medium leading-relaxed flex-1">
                Autonomia financeira para mulheres através da tecnologia
              </p>
              <div className="mb-6 space-y-3">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Arrecadado
                    </span>
                    <span className="font-black text-emerald-600">
                      100.000 XLM
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                    100% da Meta
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="bg-emerald-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-50 dark:border-slate-800 mt-auto">
                <button
                  disabled
                  className="bg-slate-200 text-slate-400 font-black py-4 px-6 rounded-2xl w-full text-center block text-[10px] uppercase tracking-[0.2em] cursor-not-allowed"
                >
                  Projeto Finalizado
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-20 border-t border-slate-100 dark:border-slate-800 text-center space-y-8 mt-12 bg-white dark:bg-slate-950 transition-colors">
        <div className="font-black text-2xl uppercase tracking-tighter text-[#002B99] dark:text-white italic">
          MULHERES <span className="text-orange-500">QUE CODAM</span>
        </div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">
          {" "}
          Decodificando o sistema • Construindo o futuro{" "}
        </p>
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest opacity-30">
          Desenvolvido por Amanda Folly
        </p>
      </footer>
    </div>
  );
}
