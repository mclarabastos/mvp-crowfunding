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
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      <nav className="bg-[#002B99] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="font-black text-xl uppercase leading-none">
                <span className="text-white">Mulheres</span>
                <br />
                <span className="text-orange-500">Que Codam</span>
              </div>
              <div className="hidden md:flex space-x-6 text-sm font-medium">
                <Link
                  href="/"
                  className="hover:text-orange-500 transition-colors"
                >
                  Início
                </Link>
                <Link href="/projetos" className="text-orange-500">
                  Projetos
                </Link>
                <Link
                  href="/sobre"
                  className="hover:text-orange-500 transition-colors"
                >
                  Sobre Nós
                </Link>
                <Link
                  href="/blog"
                  className="hover:text-orange-500 transition-colors"
                >
                  Blog
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 text-white hover:text-orange-500 transition-colors"
              >
                {darkMode ? (
                  <span className="material-icons">light_mode</span>
                ) : (
                  <span className="material-icons">dark_mode</span>
                )}
              </button>
              <button className="bg-yellow-400 text-[#002B99] font-bold px-6 py-2 rounded-full text-sm hover:bg-yellow-300 transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="text-sm text-slate-500 mb-6 flex items-center gap-2">
          <Link
            href="/projetos"
            className="hover:text-[#002B99] flex items-center"
          >
            <span className="material-icons text-xs mr-1">arrow_back</span>
            Projetos
          </Link>
          <span className="material-icons text-xs">chevron_right</span>
          <span className="hover:text-[#002B99]">Educação</span>
          <span className="material-icons text-xs">chevron_right</span>
          <span className="text-[#002B99] font-medium">
            Mulheres que Codam 2ª Edição
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="inline-block bg-blue-100 text-[#002B99] text-xs font-bold px-3 py-1 rounded-full mb-4">
                EM ANDAMENTO
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
                Decodificando o Sistema,
                <br />
                <span className="text-orange-500">Construindo o Futuro.</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Promovendo a igualdade racial e de gênero através da tecnologia.
              </p>
            </div>

            <div className="relative aspect-video bg-slate-200 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
              <div className="absolute inset-0 bg-black/20 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
                alt="Mulheres estudando"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button className="relative z-20 w-16 h-16 bg-yellow-400 text-[#002B99] rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
                <span className="material-icons text-3xl">play_arrow</span>
              </button>
              <div className="absolute bottom-4 left-4 z-20 text-white flex items-center gap-2 text-sm font-medium">
                <span className="material-icons">photo_camera</span>
                Registro da 1ª Edição
              </div>
            </div>

            <div className="border-b border-slate-200 dark:border-slate-700">
              <nav className="flex flex-wrap space-x-8">
                <button className="border-b-2 border-orange-500 text-orange-500 py-4 px-1 text-sm font-bold flex items-center gap-2">
                  <span className="material-icons text-sm">description</span> O
                  Projeto
                </button>
                <button className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 py-4 px-1 text-sm font-medium flex items-center gap-2">
                  <span className="material-icons text-sm">verified</span>{" "}
                  Certificações
                </button>
                <button className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 py-4 px-1 text-sm font-medium flex items-center gap-2">
                  <span className="material-icons text-sm">group</span> Quem Faz
                </button>
                <button className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 py-4 px-1 text-sm font-medium flex items-center gap-2">
                  <span className="material-icons text-sm">update</span>{" "}
                  Atualizações
                </button>
              </nav>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Sobre a Iniciativa
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                O projeto{" "}
                <strong className="text-slate-900 dark:text-white">
                  Mulheres que Codam
                </strong>{" "}
                é uma iniciativa dedicada a empoderar mulheres, cis e trans,
                especialmente de comunidades periféricas, através da educação
                tecnológica de ponta. Nossa missão é reduzir a lacuna de gênero
                e raça no mercado de tecnologia brasileiro.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Nesta segunda edição, buscamos arrecadar fundos para oferecer
                bolsas integrais para{" "}
                <strong className="text-slate-900 dark:text-white">
                  50 novas alunas
                </strong>{" "}
                em nosso bootcamp intensivo de Desenvolvimento Web Full Stack.
              </p>

              <div className="bg-slate-50 dark:bg-slate-800 border-l-4 border-yellow-400 p-6 rounded-r-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-[#002B99] dark:text-blue-400 mb-4">
                  Impacto Esperado
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-orange-500 text-sm mt-1">
                      check_circle
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 text-sm">
                      Formação completa de 50 desenvolvedoras júnior.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-orange-500 text-sm mt-1">
                      check_circle
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 text-sm">
                      Mentoria de carreira com profissionais de grandes
                      empresas.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-orange-500 text-sm mt-1">
                      check_circle
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 text-sm">
                      Apoio psicossocial e auxílio internet para as
                      participantes.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Certificações Oficiais
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-xl flex-1">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-[#002B99]">
                    <span className="material-icons">verified</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                      Reconhecimento
                    </p>
                    <p className="font-bold text-sm text-slate-900 dark:text-white">
                      Instituto Florescer
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-xl flex-1">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                    <span className="material-icons">emoji_events</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                      Parceiro
                    </p>
                    <p className="font-bold text-sm text-slate-900 dark:text-white">
                      ITS Rio
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Quem Faz Acontecer
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl text-center">
                  <img
                    src="https://i.pravatar.cc/150?img=1"
                    alt="Mariana Silva"
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-100 object-cover"
                  />
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    Mariana Silva
                  </h4>
                  <p className="text-[10px] text-[#002B99] dark:text-blue-400 font-bold mb-3 uppercase tracking-wider">
                    Coordenadora Pedagógica
                  </p>
                  <p className="text-xs text-slate-500 line-clamp-3 mb-4">
                    Engenheira de Software sênior com 10 anos de experiência em
                    EdTech.
                  </p>
                  <div className="flex justify-center gap-2 text-slate-400">
                    <span className="material-icons text-sm cursor-pointer hover:text-[#002B99]">
                      language
                    </span>
                    <span className="material-icons text-sm cursor-pointer hover:text-[#002B99]">
                      email
                    </span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl text-center">
                  <img
                    src="https://i.pravatar.cc/150?img=5"
                    alt="Juliana Costa"
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-orange-100 object-cover"
                  />
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    Juliana Costa
                  </h4>
                  <p className="text-[10px] text-[#002B99] dark:text-blue-400 font-bold mb-3 uppercase tracking-wider">
                    Mentora Técnica
                  </p>
                  <p className="text-xs text-slate-500 line-clamp-3 mb-4">
                    Desenvolvedora Front-end entusiasta de código aberto.
                  </p>
                  <div className="flex justify-center gap-2 text-slate-400">
                    <span className="material-icons text-sm cursor-pointer hover:text-[#002B99]">
                      language
                    </span>
                    <span className="material-icons text-sm cursor-pointer hover:text-[#002B99]">
                      email
                    </span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl text-center">
                  <img
                    src="https://i.pravatar.cc/150?img=9"
                    alt="Beatriz Souza"
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-yellow-100 object-cover"
                  />
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    Beatriz Souza
                  </h4>
                  <p className="text-[10px] text-[#002B99] dark:text-blue-400 font-bold mb-3 uppercase tracking-wider">
                    Assistente Social
                  </p>
                  <p className="text-xs text-slate-500 line-clamp-3 mb-4">
                    Focada no acompanhamento e permanência estudantil.
                  </p>
                  <div className="flex justify-center gap-2 text-slate-400">
                    <span className="material-icons text-sm cursor-pointer hover:text-[#002B99]">
                      language
                    </span>
                    <span className="material-icons text-sm cursor-pointer hover:text-[#002B99]">
                      email
                    </span>
                  </div>
                </div>

                <div className="bg-[#002B99] p-6 rounded-xl text-center flex flex-col items-center justify-center text-white">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20">
                    <span className="material-icons text-xl">add</span>
                  </div>
                  <h4 className="font-bold mb-2 text-sm">Seja um Mentor</h4>
                  <p className="text-[10px] text-blue-200 mb-4">
                    Contribua com seu conhecimento e ajude a formar a próxima
                    geração.
                  </p>
                  <button className="bg-yellow-400 text-[#002B99] text-[10px] font-bold py-2 px-4 rounded-full w-full hover:bg-yellow-300 transition-colors">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white dark:bg-slate-800 border-t-4 border-orange-500 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 p-6">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-3xl font-black text-[#002B99] dark:text-blue-400">
                    R$ 15.450
                  </h3>
                  <span className="text-xs text-slate-500 mb-1 font-medium">
                    de R$ 50.000
                  </span>
                </div>

                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-500 h-2.5 rounded-full"
                    style={{ width: "31%" }}
                  ></div>
                </div>

                <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase mb-6 tracking-wider">
                  <span>31% Arrecadado</span>
                  <span>18 Dias Restantes</span>
                </div>

                {/* BOTÃO EDITADO - AGORA LEVA PARA /contribuir */}
                <Link href="/contribuir" className="block w-full">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 rounded-[1.2rem] flex items-center justify-center gap-3 transition-all shadow-[0_10px_20px_rgba(249,115,22,0.3)] active:scale-95 mb-4 text-sm tracking-widest uppercase">
                    DOAR AGORA{" "}
                    <span className="material-icons text-base">
                      volunteer_activism
                    </span>
                  </button>
                </Link>

                <button className="w-full bg-white dark:bg-slate-800 border-2 border-[#002B99] text-[#002B99] dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm">
                  Compartilhar{" "}
                  <span className="material-icons text-base">share</span>
                </button>

                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-center text-[10px] text-slate-500 mb-4 uppercase font-bold tracking-wider">
                    Últimas doações
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-[10px] font-bold">
                        AM
                      </div>
                      <div>
                        <p className="font-bold text-xs text-slate-900 dark:text-white">
                          Ana Maria
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Doou R$ 50,00 • Há 2h
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-[10px] font-bold">
                        JP
                      </div>
                      <div>
                        <p className="font-bold text-xs text-slate-900 dark:text-white">
                          João Pedro
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Doou R$ 100,00 • Há 5h
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-4">
                  Realização
                </h4>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 flex items-center justify-center text-[8px] font-bold text-[#002B99] dark:text-blue-300 text-center leading-tight">
                    Inst.
                    <br />
                    Flor.
                  </div>
                  <div>
                    <p className="font-bold text-xs text-slate-900 dark:text-white">
                      Instituto Florescer Caldeira
                    </p>
                    <p className="text-[10px] text-slate-500">Desde 2018</p>
                  </div>
                </div>

                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-4">
                  Apoio Institucional
                </h4>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-black text-white flex items-center justify-center text-[10px] font-black">
                    Rs
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center text-[10px] font-bold">
                    AWS
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                    O
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="font-black text-xl uppercase leading-none mb-4">
              <span className="text-white">Mulheres</span>
              <br />
              <span className="text-orange-500">Que Codam</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 max-w-xs">
              Construindo pontes entre a periferia e a tecnologia.
            </p>
            <div className="flex gap-4">
              <span className="material-icons text-slate-500 hover:text-white cursor-pointer transition-colors">
                camera_alt
              </span>
              <span className="material-icons text-slate-500 hover:text-white cursor-pointer transition-colors">
                work
              </span>
              <span className="material-icons text-slate-500 hover:text-white cursor-pointer transition-colors">
                chat
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-wider">
              Plataforma
            </h4>
            <div className="flex flex-col space-y-3 text-sm">
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Explorar Projetos
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Como Funciona
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Preços
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-[10px] tracking-wider">
              Recursos
            </h4>
            <div className="flex flex-col space-y-3 text-sm">
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Central de Ajuda
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500">
          <p>© 2026 Mulheres que Codam. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="flex items-center gap-1">
              <span className="material-icons text-[10px]">email</span>{" "}
              contato@mulheresquecodam.org
            </span>
            <span className="flex items-center gap-1">
              <span className="material-icons text-[10px]">location_on</span>{" "}
              Rio de Janeiro, RJ
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
