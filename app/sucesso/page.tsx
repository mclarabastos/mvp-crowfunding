"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function ConteudoSucesso() {
  const searchParams = useSearchParams();
  const [darkMode, setDarkMode] = useState(false);
  const [mostrarAnimacao, setMostrarAnimacao] = useState(true);
  const [revelarConteudo, setRevelarConteudo] = useState(false);

  const valorDoadoXLM = Number(searchParams.get("xlm")) || 100;
  const tipo = searchParams.get("tipo") || "PF";
  const nftId = Number(searchParams.get("nft")) || 1;
  const projetoNome = searchParams.get("projeto") || "Bootcamp Fullstack Periferia";

  const cotacaoXLM = 0.5432;
  const valorTotalBRL = valorDoadoXLM * cotacaoXLM;

  const taxaAdminPct = tipo === "PF" ? 0.07 : 0.05;
  const valorTaxa = valorTotalBRL * taxaAdminPct;
  const valorLiquido = valorTotalBRL - valorTaxa;

  // Lista bruta dos 15 NFTs para renderização dinâmica
  const nftsPossiveis = [
    { id: 1, nome: "Gênesis Supporter", cor: "from-[#002B99] to-blue-600", icon: "code", raridade: "COMUM" },
    { id: 2, nome: "Alpha Dev", cor: "from-orange-500 to-orange-700", icon: "terminal", raridade: "RARO" },
    { id: 3, nome: "Mentor Node", cor: "from-emerald-500 to-teal-700", icon: "hub", raridade: "ÉPICO" },
    { id: 4, nome: "Stellar Pioneer", cor: "from-purple-600 to-indigo-800", icon: "auto_awesome", raridade: "LENDÁRIO" },
    { id: 5, nome: "Byte Sister", cor: "from-rose-500 to-red-700", icon: "biotech", raridade: "COMUM" },
    { id: 6, nome: "Data Queen", cor: "from-yellow-500 to-orange-600", icon: "dataset", raridade: "RARO" },
    { id: 7, nome: "Logic Lady", cor: "from-blue-400 to-blue-700", icon: "psychology", raridade: "COMUM" },
    { id: 8, nome: "Web3 Woman", cor: "from-indigo-700 to-purple-900", icon: "language", raridade: "ÉPICO" },
    { id: 9, nome: "Cloud Angel", cor: "from-sky-400 to-blue-500", icon: "cloud_done", raridade: "COMUM" },
    { id: 10, nome: "Security Shield", cor: "from-slate-800 to-black", icon: "admin_panel_settings", raridade: "LENDÁRIO" },
    { id: 11, nome: "Front-End Flow", cor: "from-pink-500 to-rose-600", icon: "brush", raridade: "RARO" },
    { id: 12, nome: "Back-End Base", cor: "from-teal-600 to-emerald-800", icon: "storage", raridade: "COMUM" },
    { id: 13, nome: "UI/UX Vision", cor: "from-orange-400 to-orange-600", icon: "visibility", raridade: "RARO" },
    { id: 14, nome: "Blockchain Boss", cor: "from-blue-900 to-indigo-950", icon: "link", raridade: "ÉPICO" },
    { id: 15, nome: "Impact Master", cor: "from-emerald-600 to-green-800", icon: "verified", raridade: "LENDÁRIO" },
  ];

  const nftData = nftsPossiveis.find(n => n.id === nftId) || nftsPossiveis[0];

  useEffect(() => {
    const timerAnimacao = setTimeout(() => {
      setRevelarConteudo(true); 
      setTimeout(() => {
        setMostrarAnimacao(false); 
      }, 200);
    }, 1000); 
    return () => clearTimeout(timerAnimacao);
  }, []);

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
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-200 overflow-x-hidden">
      
      {mostrarAnimacao && (
        <div className={`fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center transition-opacity duration-300 ${revelarConteudo ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="relative flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_30px_5px_rgba(255,255,255,0.8)] z-10 animate-pulse"></div>
            <div className="absolute border border-white/60 rounded-full animate-[stellarExpand_1s_cubic-bezier(0.15,0,0.15,1)_forwards]"></div>
            <div className="absolute border border-blue-500/30 rounded-full animate-[stellarExpand_1s_cubic-bezier(0.15,0,0.15,1)_0.05s_forwards]"></div>
          </div>
          <div className="absolute bottom-20">
             <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.6em]">Validando Blocos</p>
          </div>
        </div>
      )}

      <div className={`transition-all duration-[800ms] ease-out ${!revelarConteudo ? 'blur-[100px] scale-95 opacity-0' : 'blur-0 scale-100 opacity-100'}`}>
        
        <main className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start font-sans">
          
          <div className="lg:col-span-6 bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden text-center transition-all duration-500 relative">
            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-12 flex flex-col items-center space-y-6">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-[0_10px_40px_rgba(16,185,129,0.3)] animate-bounce">
                <span className="material-icons text-4xl font-black">check</span>
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                  Impacto Confirmado
                </h1>
                <p className="text-slate-500 dark:text-emerald-400 font-bold uppercase text-[10px] tracking-[0.3em]">
                  Sua contribuição para {projetoNome} foi registrada
                </p>
              </div>
            </div>

            <div className="p-12 space-y-10 flex flex-col items-center">
              <div className="space-y-2">
                <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">VALOR TOTAL DOADO</p>
                <h2 className="text-6xl font-black text-[#002B99] dark:text-blue-400 tracking-tighter">
                  R$ {valorTotalBRL.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </h2>
                <p className="text-xs font-black text-slate-400 bg-slate-100 dark:bg-slate-700 px-4 py-1 rounded-full inline-block">
                  ≈ {valorDoadoXLM.toFixed(2)} XLM
                </p>
              </div>

              <div className="w-full space-y-6 border-y border-slate-100 dark:border-slate-700 py-8 text-left">
                <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                  <span className="flex items-center gap-3 text-slate-400">
                    <span className="material-icons text-lg">receipt_long</span> HASH TRANSACTION
                  </span>
                  <span className="text-[#002B99] dark:text-blue-400 font-mono tracking-tighter italic">Stellar_f{Math.random().toString(16).slice(2, 10)}</span>
                </div>
                <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                  <span className="flex items-center gap-3 text-slate-400">
                    <span className="material-icons text-lg">calendar_today</span> DATA E HORA
                  </span>
                  <span className="text-slate-900 dark:text-white uppercase">28 FEV 2026, 22:50</span>
                </div>
                <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                  <span className="flex items-center gap-3 text-slate-400">
                    <span className="material-icons text-lg">payments</span> TAXAS OPERACIONAIS ({tipo === "PF" ? "7%" : "5%"})
                  </span>
                  <span className="text-rose-500 font-black">- R$ {valorTaxa.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                </div>
                
                <div className="pt-6 border-t border-dashed border-slate-200 dark:border-slate-700 flex justify-between items-center">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-rose-50 dark:bg-rose-900/20 rounded-full flex items-center justify-center">
                         <span className="material-icons text-rose-500">favorite</span>
                      </div>
                      <span className="font-black text-slate-900 dark:text-white uppercase text-[10px] tracking-widest">VALOR LÍQUIDO NO PROJETO</span>
                   </div>
                   <span className="text-3xl font-black text-emerald-600 tracking-tighter">
                     R$ {valorLiquido.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                   </span>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-[2rem] flex gap-6 border border-blue-100 dark:border-blue-800 text-left relative overflow-hidden">
                <span className="material-icons text-3xl text-[#002B99] dark:text-blue-400 relative z-10">info</span>
                <p className="text-[10px] leading-relaxed font-black text-blue-800 dark:text-blue-300 uppercase tracking-[0.15em] relative z-10 italic">
                  Transparência radical em cada bloco. O Impact NFT gerado prova permanentemente sua contribuição via Stellar Network.
                </p>
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-12 -mt-12"></div>
              </div>

              <div className="w-full space-y-4 pt-4">
                <Link href="/dashboard" className="block w-full">
                  <button className="w-full bg-[#002B99] hover:bg-blue-800 text-white font-black py-6 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,43,153,0.3)] transition-all active:scale-95 text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-3">
                    ACESSAR MEU DASHBOARD <span className="material-icons text-sm">dashboard</span>
                  </button>
                </Link>
                <button className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-black py-6 rounded-[1.5rem] flex items-center justify-center gap-3 hover:bg-slate-50 transition-all text-[11px] uppercase tracking-[0.3em]">
                  <span className="material-icons text-lg">cloud_download</span> BAIXAR CERTIFICADO PDF
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-12 text-center flex flex-col items-center">
            <div className="bg-white dark:bg-slate-800 rounded-[3.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700 w-full group transition-all duration-700 relative">
              <div className={`relative aspect-square bg-gradient-to-br ${nftData.cor} overflow-hidden group flex flex-col items-center justify-center cursor-crosshair`}>
                
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl opacity-50 -mr-32 -mt-32 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-black/20 rounded-full blur-[100px] opacity-30 -ml-40 -mb-40"></div>

                <div className="relative h-full w-full flex flex-col items-center justify-center text-white p-12 space-y-8 z-10">
                  <div className="absolute top-10 right-10 bg-white text-slate-900 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 shadow-2xl">
                    <span className="material-icons text-sm">stars</span> NOVO NFT MINTADO
                  </div>

                  <div className="w-32 h-32 bg-white/10 backdrop-blur-2xl rounded-[2rem] border border-white/20 flex items-center justify-center shadow-[inset_0_0_40px_rgba(255,255,255,0.2)] group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-[1500ms] ease-in-out">
                    <span className="material-icons text-7xl">{nftData.icon}</span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                       <h3 className="text-5xl font-black uppercase leading-none tracking-tighter">{nftData.nome}</h3>
                       <h4 className="text-2xl font-black uppercase tracking-[0.2em] opacity-60">ID #{nftId.toString().padStart(2, '0')}</h4>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-12 h-1 bg-white/30 rounded-full"></div>
                       <p className="text-[11px] font-black tracking-[0.4em] uppercase opacity-90">DOAÇÃO: {valorDoadoXLM.toFixed(2)} XLM</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-10 left-10 text-left font-mono text-[8px] opacity-50 uppercase tracking-widest space-y-1">
                     <p>Issuer: MQC_GENESIS_DAO</p>
                     <p>Network: Stellar Mainnet</p>
                     <p>Status: Soulbound Verified</p>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <div className="p-12 flex flex-col items-center text-center space-y-8 font-sans">
                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">Seu Impact NFT</h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-black uppercase tracking-[0.3em] max-w-sm">
                    Este colecionável digital intransferível prova que você ajudou a transformar {projetoNome} em realidade.
                  </p>
                </div>

                <div className="w-full bg-slate-50 dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-left space-y-2 group-hover:border-orange-500 transition-colors">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em]">COLEÇÃO GÊNESIS v2</span>
                    <span className="text-[10px] font-black uppercase text-orange-500 tracking-[0.3em]">RARIDADE: {nftData.raridade}</span>
                  </div>
                  <p className="text-xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none">MULHERES QUE CODAM • {projetoNome}</p>
                </div>

                <div className="w-full space-y-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">PROPAGUE SEU IMPACTO NAS REDES</p>
                  <div className="flex gap-4">
                    <button className="flex-1 bg-[#1DA1F2] hover:bg-[#1a91da] text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 text-[10px] uppercase tracking-widest transition-all shadow-xl active:scale-95">
                      <span className="material-icons text-lg">share</span> X
                    </button>
                    <button className="flex-1 bg-[#0077B5] hover:bg-[#006396] text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 text-[10px] uppercase tracking-widest transition-all shadow-xl active:scale-95">
                      <span className="material-icons text-lg">link</span> LINKEDIN
                    </button>
                    <button className="w-16 h-16 bg-slate-100 dark:bg-slate-700 text-slate-500 rounded-2xl flex items-center justify-center hover:bg-slate-200 transition-all">
                      <span className="material-icons text-2xl">qr_code_2</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-12 text-slate-400 font-black">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em]">
                <span className="material-icons text-blue-500">lock</span> PAGAMENTO SEGURO
              </div>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em]">
                <span className="material-icons text-orange-500">verified_user</span> BLOCKCHAIN VERIFICADO
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx global>{`
        @keyframes stellarExpand {
          0% { width: 0; height: 0; opacity: 1; border-width: 30px; filter: blur(0px); }
          100% { width: 400vw; height: 400vw; opacity: 0; border-width: 1px; filter: blur(20px); }
        }
      `}</style>
    </div>
  );
}

export default function SucessoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center"></div>}>
      <ConteudoSucesso />
    </Suspense>
  );
}