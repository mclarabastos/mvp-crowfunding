"use client";
import React from "react";
import Image from "next/image";

export default function SobreNos() {
  const estatisticas = [
    { dado: "47.3%", desc: "Mulheres fora do mercado de trabalho" },
    { dado: "54%", desc: "Mulheres negras recebem menos que homens brancos" },
    { dado: "1%", desc: "Mulheres que trabalham com tecnologia" }
  ];

  const trilhas = [
    "Letramento Digital", "Competências Profissionais", "Metodologias Ágeis", 
    "Empreendedorismo", "Introdução à Programação", "Inteligência Artificial", 
    "Blockchain Starter Pack"
  ];

  return (
    <div className="bg-white dark:bg-[#0f111a] min-h-screen font-sans">
      
      {/* HERO SECTION - RESUMO */}
      <section className="bg-[#0026A6] text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
              Mulheres <span className="text-[#FF6600]">que Codam</span>
            </h1>
            <p className="text-lg opacity-90 leading-relaxed font-medium">
              Capacitamos mulheres de favelas e comunidades periféricas do Rio de Janeiro através da educação tecnológica, transformando-as em desenvolvedoras prontas para o mercado.
            </p>
          </div>
          <div className="relative h-[400px] rounded-[32px] overflow-hidden border-4 border-white/10 shadow-2xl">
            <img 
              src="https://static.wixstatic.com/media/b4ec07_7a997f4a6f374469983c5f00b67e9193~mv2.png" 
              alt="Pitch Mulheres que Codam"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* JUSTIFICATIVA E DADOS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black uppercase text-[#0026A6] dark:text-white italic tracking-tight">
            Por que existimos?
          </h2>
          <div className="w-20 h-2 bg-[#FF6600] mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {estatisticas.map((item, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-gray-900 p-8 rounded-3xl border border-slate-100 dark:border-gray-800 text-center transition-transform hover:scale-105">
              <div className="text-5xl font-black text-[#FF6600] mb-4">{item.dado}</div>
              <p className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TRILHAS DE CONHECIMENTO */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trilhas.map((trilha, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 italic font-black uppercase text-xs tracking-wider">
                  <span className="text-[#FF6600] material-icons">terminal</span>
                  {trilha}
                </div>
              ))}
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-black uppercase italic tracking-tighter">Trilhas de Impacto</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Nosso currículo é desenhado para cobrir desde o letramento digital básico até tecnologias de ponta como Blockchain e Web3, garantindo uma formação completa e atualizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS E PREMIAÇÕES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-black uppercase text-[#0026A6] dark:text-white italic">Resultados Reais</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                <span className="font-bold uppercase text-xs text-slate-500">Turma 2025</span>
                <span className="font-black text-2xl text-[#0026A6] dark:text-white">20 Formadas</span>
              </div>
              <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                <span className="font-bold uppercase text-xs text-slate-500">Autoidentificação</span>
                <span className="font-black text-2xl text-[#0026A6] dark:text-white">61% Negras</span>
              </div>
              <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                <span className="font-bold uppercase text-xs text-slate-500">Recomendação</span>
                <span className="font-black text-2xl text-[#0026A6] dark:text-white">100% Nota 10</span>
              </div>
            </div>
          </div>
          <div className="bg-[#FF6600] p-10 rounded-[48px] text-white shadow-xl rotate-2 hover:rotate-0 transition-transform">
            <h4 className="text-2xl font-black uppercase italic mb-6">Hackathons Vencidos</h4>
            <ul className="space-y-4 font-bold uppercase text-sm tracking-widest">
              <li className="flex items-center gap-3"><span className="material-icons">workspace_premium</span> ETH LATAM</li>
              <li className="flex items-center gap-3"><span className="material-icons">workspace_premium</span> STELLAR NIGHT</li>
              <li className="flex items-center gap-3"><span className="material-icons">workspace_premium</span> ETHEREUM DEVCONNECT</li>
              <li className="flex items-center gap-3"><span className="material-icons">workspace_premium</span> DEVS DE IMPACTO</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 text-center bg-[#0026A6] text-white">
        <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-8">
          Junte-se ao <span className="text-[#FFD700]">Movimento</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#FF6600] text-white font-black px-10 py-4 rounded-2xl uppercase tracking-widest hover:scale-105 transition-all shadow-lg text-sm">
            Quero Apoiar
          </button>
          <button className="bg-white text-[#0026A6] font-black px-10 py-4 rounded-2xl uppercase tracking-widest hover:scale-105 transition-all shadow-lg text-sm">
            Ver Projetos
          </button>
        </div>
      </section>
    </div>
  );
}