"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [doacoes, setDoacoes] = useState([]);
  const [totalBRL, setTotalBRL] = useState(0);
  const [nftSelecionado, setNftSelecionado] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, px: 50, py: 50 });

  const nftsMestre = [
    {
      id: 1,
      nome: "Gênesis Supporter",
      cor: "bg-[#002B99]",
      gradient: "from-blue-600 to-indigo-900",
      icon: "code",
      desc: "Bloco de origem da rede de suporte.",
      thanks: "Sinergia",
    },
    {
      id: 2,
      nome: "Alpha Dev",
      cor: "bg-orange-500",
      gradient: "from-orange-400 to-red-600",
      icon: "terminal",
      desc: "Execução prioritária no desenvolvimento.",
      thanks: "Excelência",
    },
    {
      id: 3,
      nome: "Mentor Node",
      cor: "bg-emerald-500",
      gradient: "from-emerald-400 to-teal-700",
      icon: "hub",
      desc: "Ponto de conexão e transferência de saber.",
      thanks: "Essencial",
    },
    {
      id: 4,
      nome: "Stellar Pioneer",
      cor: "bg-purple-600",
      gradient: "from-purple-500 to-indigo-800",
      icon: "auto_awesome",
      desc: "Exploração de novos protocolos Stellar.",
      thanks: "Vanguarda",
    },
    {
      id: 5,
      nome: "Byte Sister",
      cor: "bg-rose-500",
      gradient: "from-rose-400 to-pink-600",
      icon: "biotech",
      desc: "Colaboração técnica de alto nível.",
      thanks: "Impacto",
    },
    {
      id: 6,
      nome: "Data Queen",
      cor: "bg-yellow-500",
      gradient: "from-yellow-400 to-orange-500",
      icon: "dataset",
      desc: "Gestão estratégica de dados sociais.",
      thanks: "Precisão",
    },
    {
      id: 7,
      nome: "Logic Lady",
      cor: "bg-blue-400",
      gradient: "from-blue-300 to-blue-600",
      icon: "psychology",
      desc: "Estrutura lógica aplicada à mudança.",
      thanks: "Lógica",
    },
    {
      id: 8,
      nome: "Web3 Woman",
      cor: "bg-indigo-700",
      gradient: "from-indigo-600 to-purple-900",
      icon: "language",
      desc: "Desenvolvimento de sistemas descentralizados.",
      thanks: "Inovação",
    },
    {
      id: 9,
      nome: "Cloud Angel",
      cor: "from-sky-400 to-blue-500",
      gradient: "from-sky-300 to-blue-500",
      icon: "cloud_done",
      desc: "Escalabilidade de impacto em nuvem.",
      thanks: "Suporte",
    },
    {
      id: 10,
      nome: "Security Shield",
      cor: "bg-slate-900",
      gradient: "from-slate-800 to-black",
      icon: "admin_panel_settings",
      desc: "Proteção de ativos e integridade da rede.",
      thanks: "Rigor",
    },
    {
      id: 11,
      nome: "Front-End Flow",
      cor: "bg-pink-500",
      gradient: "from-pink-400 to-rose-600",
      icon: "brush",
      desc: "Interface e experiência de impacto.",
      thanks: "Design",
    },
    {
      id: 12,
      nome: "Back-End Base",
      cor: "bg-teal-600",
      gradient: "from-teal-500 to-emerald-800",
      icon: "storage",
      desc: "Fundamentação de sistemas de carreira.",
      thanks: "Base",
    },
    {
      id: 13,
      nome: "UI/UX Vision",
      cor: "bg-orange-400",
      gradient: "from-orange-300 to-orange-600",
      icon: "visibility",
      desc: "Projeção de interfaces inclusivas.",
      thanks: "Visão",
    },
    {
      id: 14,
      nome: "Blockchain Boss",
      cor: "bg-blue-900",
      gradient: "from-blue-800 to-slate-900",
      icon: "link",
      desc: "Governança transparente sem intermediários.",
      thanks: "Poder",
    },
    {
      id: 15,
      nome: "Impact Master",
      cor: "bg-emerald-600",
      gradient: "from-emerald-500 to-green-800",
      icon: "verified",
      desc: "Nível máximo de compromisso social.",
      thanks: "Domínio",
    },
  ];

  const projetosBase = [
    {
      id: "1",
      nome: "Bootcamp Fullstack Periferia",
      img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80",
    },
    {
      id: "2",
      nome: "Tech Leaders for Tomorrow",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    },
    {
      id: "3",
      nome: "Hackathon Mulheres Negras Tech",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
    },
    {
      id: "4",
      nome: "Node.js Girls Rio",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    },
    {
      id: "5",
      nome: "CyberSeguranca na Favela",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    },
    {
      id: "6",
      nome: "Web3 para Lideranças Femininas",
      img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80",
    },
  ];

  useEffect(() => {
    const dadosLocais = JSON.parse(localStorage.getItem("doacoes") || "[]");
    setDoacoes(dadosLocais);
    const soma = dadosLocais.reduce(
      (acc, curr) => acc + (Number(curr.valorBRL) || 0),
      0
    );
    setTotalBRL(soma);
  }, []);

  const handleMouseMove = (e) => {
    if (!nftSelecionado) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 60;
    const y = (clientY / innerHeight - 0.5) * -60;
    setMousePos({
      x,
      y,
      px: (clientX / innerWidth) * 100,
      py: (clientY / innerHeight) * 100,
    });
  };

  return (
    <div
      className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100"
      onMouseMove={handleMouseMove}
    >
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h1 className="text-7xl font-black tracking-tighter uppercase leading-[0.8] italic">
              {" "}
              Painel de
              <br /> <span className="text-orange-500 not-italic">
                Impacto
              </span>{" "}
            </h1>
            <p className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400">
              {" "}
              On-Chain Sync • Protocolo 2026{" "}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter italic border-b-4 border-slate-100 dark:border-slate-800 pb-4">
              Projetos Apoiados
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {doacoes.map((doacao) => {
                const projInfo =
                  projetosBase.find((p) => p.id === doacao.projetoId) ||
                  projetosBase[0];
                return (
                  <div
                    key={doacao.id}
                    className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex items-center gap-8 group hover:border-orange-500 transition-all"
                  >
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-xl">
                      <img
                        src={projInfo.img}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-black uppercase tracking-tight italic">
                          {doacao.projetoNome}
                        </h3>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          {doacao.data}
                        </span>
                      </div>
                      <p className="text-xs font-black uppercase tracking-widest text-emerald-600">
                        R$ {Number(doacao.valorBRL).toLocaleString("pt-BR")}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <div className="bg-slate-900 p-12 rounded-[4rem] border-4 border-slate-800 shadow-2xl space-y-10 relative overflow-hidden">
              <div className="text-center space-y-2 relative z-10">
                <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                  Impact NFTs
                </h2>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">
                  Inventory
                </p>
              </div>

              {/* ALTAR DE EXIBIÇÃO */}
              <div className="grid grid-cols-3 gap-4 relative z-10">
                {nftsMestre.map((nft) => {
                  const doacaoRelacionada = doacoes.find(
                    (d) => Number(d.nftId) === nft.id
                  );
                  const possuido = !!doacaoRelacionada;
                  return (
                    <div
                      key={nft.id}
                      onClick={() =>
                        possuido &&
                        setNftSelecionado({ ...nft, ...doacaoRelacionada })
                      }
                      className={`group relative aspect-[2/3] rounded-xl overflow-hidden border-2 transition-all duration-500 cursor-pointer p-1 ${
                        possuido
                          ? "border-orange-500 bg-slate-800 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                          : "border-slate-800 bg-slate-950 opacity-20 grayscale"
                      }`}
                    >
                      <div
                        className={`${nft.cor} w-full h-full rounded-lg flex items-center justify-center text-white`}
                      >
                        <span className="material-icons text-xl">
                          {nft.icon}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* BASE DO ALTAR */}
              <div className="h-4 w-full bg-slate-800 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5)]"></div>
            </div>
          </div>
        </div>
      </main>

      {/* MODAL NFT 360 ALTAR POKEMON STYLE */}
      {nftSelecionado && (
        <div
          className="fixed inset-0 z-[200] bg-slate-950/98 backdrop-blur-3xl flex items-center justify-center p-4 overflow-hidden"
          onClick={() => setNftSelecionado(null)}
        >
          <div
            className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center justify-center perspective-2000">
              {/* O CARD POKEMON */}
              <div
                className={`relative w-[380px] h-[540px] rounded-[2.5rem] p-[3px] bg-gradient-to-br ${nftSelecionado.gradient} shadow-[0_0_100px_rgba(0,0,0,0.8)] transition-transform duration-75 ease-out preserve-3d`}
                style={{
                  transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
                }}
              >
                {/* EFEITO DE BRILHO INTENSO (HOLOGRÁFICO) */}
                <div
                  className="absolute inset-0 rounded-[2.5rem] pointer-events-none z-20 mix-blend-overlay opacity-80"
                  style={{
                    background: `linear-gradient(${
                      mousePos.x * 2
                    }deg, transparent 20%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 55%, transparent 80%)`,
                  }}
                ></div>

                <div
                  className="absolute inset-0 rounded-[2.5rem] pointer-events-none z-10 opacity-60 mix-blend-color-dodge"
                  style={{
                    background: `radial-gradient(circle at ${mousePos.px}% ${mousePos.py}%, rgba(255,255,255,0.8), transparent 60%)`,
                  }}
                ></div>

                <div className="w-full h-full bg-slate-900/60 backdrop-blur-xl rounded-[2.4rem] flex flex-col p-10 border border-white/30 relative overflow-hidden">
                  <div className="flex justify-between items-center text-white/50 mb-8">
                    <span className="text-[11px] font-black uppercase tracking-[0.5em]">
                      IMPACT UNIT
                    </span>
                    <span className="material-icons text-orange-500 text-xl">
                      token
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col items-center justify-center space-y-12">
                    <div className="w-40 h-40 bg-white/5 rounded-full flex items-center justify-center border-4 border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                      <span className="material-icons text-8xl text-white shadow-2xl">
                        {nftSelecionado.icon}
                      </span>
                    </div>
                    <div className="text-center space-y-3">
                      <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">
                        {nftSelecionado.nome}
                      </h2>
                      <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.6em]">
                        Verified Soulbound
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-8 border-t border-white/10 text-center">
                    <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.8em]">
                      Stellar Mainnet Ledger
                    </p>
                  </div>
                </div>
              </div>

              {/* O ALTAR (BASE 3D) */}
              <div className="w-[450px] h-[40px] bg-slate-800 mt-[-20px] rounded-[100%] shadow-[0_20px_50px_rgba(0,0,0,0.9)] border-t-4 border-slate-700 flex flex-col items-center justify-center">
                <div className="w-[300px] h-[10px] bg-orange-500/20 blur-xl animate-pulse"></div>
              </div>
            </div>

            {/* DESCRIÇÃO E DADOS */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="w-20 h-2 bg-orange-500 rounded-full"></div>
                <h2 className="text-7xl font-black text-white uppercase tracking-tighter leading-none italic">
                  {nftSelecionado.thanks}!
                </h2>
                <p className="text-xl text-slate-400 font-black uppercase tracking-widest leading-relaxed">
                  {nftSelecionado.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 border-l-4 border-white/5 pl-10">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">
                    Vinculado a:
                  </p>
                  <p className="text-2xl font-black text-white uppercase tracking-tight">
                    {nftSelecionado.projetoNome}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">
                      Aporte Social:
                    </p>
                    <p className="text-xl font-black text-emerald-400 uppercase tracking-tight">
                      R$ {Number(nftSelecionado.valorBRL).toLocaleString()}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">
                      Cripto Hash:
                    </p>
                    <p className="text-xl font-black text-orange-400 uppercase tracking-tight">
                      {nftSelecionado.valorXLM} XLM
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">
                    Registro Temporal:
                  </p>
                  <p className="text-lg font-black text-white uppercase tracking-tight opacity-60">
                    {nftSelecionado.data}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="flex-1 bg-white text-slate-900 font-black py-6 rounded-2xl text-[11px] uppercase tracking-[0.5em] hover:bg-orange-500 hover:text-white transition-all">
                  Download Master 4K
                </button>
                <button
                  className="px-10 border-2 border-white/20 text-white font-black py-6 rounded-2xl text-[11px] uppercase tracking-[0.5em] hover:bg-white/5 transition-all"
                  onClick={() => setNftSelecionado(null)}
                >
                  Voltar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="py-24 border-t border-slate-100 dark:border-slate-900 text-center space-y-6">
        <div className="font-black text-3xl uppercase tracking-tighter text-[#002B99] dark:text-white italic">
          MULHERES <span className="text-orange-500">QUE CODAM</span>
        </div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">
          {" "}
          Audit: Amanda Folly • 2026{" "}
        </p>
      </footer>

      <style jsx global>{`
        .perspective-2000 {
          perspective: 2000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}
