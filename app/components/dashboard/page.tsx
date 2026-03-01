"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [doacoes, setDoacoes] = useState([]);
  const [totalBRL, setTotalBRL] = useState(0);

  // Lista mestre dos 15 NFTs para conferência on-chain
  const nftsMestre = [
    { id: 1, nome: "Gênesis Supporter", cor: "bg-[#002B99]", icon: "code" },
    { id: 2, nome: "Alpha Dev", cor: "bg-orange-500", icon: "terminal" },
    { id: 3, nome: "Mentor Node", cor: "bg-emerald-500", icon: "hub" },
    { id: 4, nome: "Stellar Pioneer", cor: "bg-purple-600", icon: "auto_awesome" },
    { id: 5, nome: "Byte Sister", cor: "bg-rose-500", icon: "biotech" },
    { id: 6, nome: "Data Queen", cor: "bg-yellow-500", icon: "dataset" },
    { id: 7, nome: "Logic Lady", cor: "bg-blue-400", icon: "psychology" },
    { id: 8, nome: "Web3 Woman", cor: "bg-indigo-700", icon: "language" },
    { id: 9, nome: "Cloud Angel", cor: "bg-sky-400", icon: "cloud_done" },
    { id: 10, nome: "Security Shield", cor: "bg-slate-900", icon: "admin_panel_settings" },
    { id: 11, nome: "Front-End Flow", cor: "bg-pink-500", icon: "brush" },
    { id: 12, nome: "Back-End Base", cor: "bg-teal-600", icon: "storage" },
    { id: 13, nome: "UI/UX Vision", cor: "bg-orange-400", icon: "visibility" },
    { id: 14, nome: "Blockchain Boss", cor: "bg-blue-900", icon: "link" },
    { id: 15, nome: "Impact Master", cor: "bg-emerald-600", icon: "verified" },
  ];

  // Base dos 6 Projetos Fictícios
  const projetosBase = [
    { id: "1", nome: "Bootcamp Fullstack Periferia", meta: 150000, img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" },
    { id: "2", nome: "Tech Leaders for Tomorrow", meta: 80000, img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" },
    { id: "3", nome: "Hackathon Mulheres Negras Tech", meta: 50000, img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80" },
    { id: "4", nome: "Node.js Girls Rio", meta: 60000, img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" },
    { id: "5", nome: "CyberSeguranca na Favela", meta: 120000, img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" },
    { id: "6", nome: "Web3 para Lideranças Femininas", meta: 30000, img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80" },
  ];

  useEffect(() => {
    const dadosLocais = JSON.parse(localStorage.getItem("doacoes") || "[]");
    setDoacoes(dadosLocais);
    
    const soma = dadosLocais.reduce((acc: number, curr: any) => acc + curr.valorBRL, 0);
    setTotalBRL(soma);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        
        {/* HEADER DO DASHBOARD */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div className="space-y-4">
              <h1 className="text-7xl font-black tracking-tighter uppercase leading-[0.8] italic">
                Painel de<br />
                <span className="text-orange-500 not-italic">Impacto</span>
              </h1>
              <p className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400">
                Sincronizado com a Rede Stellar • Registros On-Chain
              </p>
           </div>
           
           <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border-2 border-slate-100 dark:border-slate-800 shadow-2xl flex items-center gap-8">
              <div className="w-16 h-16 bg-yellow-400 rounded-[1.5rem] flex items-center justify-center shadow-xl transform -rotate-3">
                 <span className="material-icons text-[#002B99] text-4xl">account_balance_wallet</span>
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Stellar Address</p>
                 <p className="text-xl font-black text-slate-900 dark:text-white font-mono leading-none mt-1">G...{Math.random().toString(36).substring(7).toUpperCase()}</p>
              </div>
           </div>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           <div className="bg-[#002B99] p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group border-b-[12px] border-orange-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400 rounded-full opacity-10 -mr-20 -mt-20 blur-3xl group-hover:opacity-20 transition-opacity"></div>
              <p className="text-[11px] font-black uppercase tracking-[0.5em] opacity-60 mb-8">Investimento Social Total</p>
              <h3 className="text-6xl font-black tracking-tighter italic leading-none">R$ {totalBRL.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h3>
              <div className="mt-10 flex items-center gap-4 bg-white/10 w-fit px-6 py-2 rounded-full">
                 <span className="material-icons text-yellow-400 text-sm">bolt</span>
                 <span className="text-[10px] font-black uppercase tracking-widest">Ativo na Mainnet</span>
              </div>
           </div>

           <div className="bg-white dark:bg-slate-900 p-12 rounded-[4rem] border-2 border-slate-100 dark:border-slate-800 shadow-2xl space-y-8">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.5em]">Iniciativas Apoiadas</p>
              <h3 className="text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-none italic">
                {Array.from(new Set(doacoes.map((d: any) => d.projetoId))).length.toString().padStart(2, '0')}
              </h3>
              <div className="w-16 h-2 bg-orange-500 rounded-full"></div>
           </div>

           <div className="bg-white dark:bg-slate-900 p-12 rounded-[4rem] border-2 border-slate-100 dark:border-slate-800 shadow-2xl space-y-8">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.5em]">Colecionáveis Impact</p>
              <h3 className="text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-none italic">
                {doacoes.length.toString().padStart(2, '0')}
              </h3>
              <div className="w-16 h-2 bg-emerald-500 rounded-full"></div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
           
           {/* HISTÓRICO DE APOIO DINÂMICO */}
           <div className="lg:col-span-8 space-y-12">
              <div className="flex items-center justify-between border-b-[6px] border-slate-100 dark:border-slate-800 pb-8">
                 <h2 className="text-4xl font-black uppercase tracking-tighter italic">Projetos Apoiados</h2>
                 <span className="bg-[#002B99] text-white px-6 py-2 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl">Real-time</span>
              </div>

              {doacoes.length === 0 ? (
                <div className="bg-white dark:bg-slate-900 p-20 rounded-[4rem] text-center border-2 border-dashed border-slate-200 dark:border-slate-800 opacity-50">
                   <span className="material-icons text-7xl mb-6">history</span>
                   <p className="font-black uppercase tracking-[0.4em] text-sm">Nenhuma doação registrada ainda.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-8">
                   {doacoes.map((doacao: any) => {
                     const projInfo = projetosBase.find(p => p.id === doacao.projetoId) || projetosBase[0];
                     return (
                        <div key={doacao.id} className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl flex flex-col md:flex-row items-center gap-12 group hover:border-orange-500 transition-all duration-500">
                           <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden shadow-2xl shrink-0 group-hover:scale-105 transition-transform duration-500">
                              <img src={projInfo.img} className="w-full h-full object-cover" alt={doacao.projetoNome} />
                           </div>
                           <div className="flex-1 space-y-6 text-center md:text-left">
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                 <h3 className="text-2xl font-black uppercase tracking-tighter italic">{doacao.projetoNome}</h3>
                                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{doacao.data}</span>
                              </div>
                              <div className="flex flex-wrap justify-center md:justify-start gap-8">
                                 <div className="flex items-center gap-3">
                                    <span className="material-icons text-[#002B99] dark:text-blue-400">payments</span>
                                    <span className="text-sm font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">R$ {doacao.valorBRL.toLocaleString()}</span>
                                 </div>
                                 <div className="flex items-center gap-3">
                                    <span className="material-icons text-orange-500">token</span>
                                    <span className="text-sm font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">{doacao.valorXLM} XLM</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     );
                   })}
                </div>
              )}
           </div>

           {/* GALERIA DE 15 NFTS INTEGRADA */}
           <div className="lg:col-span-4 space-y-12">
              <div className="bg-white dark:bg-slate-900 p-12 rounded-[5rem] border border-slate-100 dark:border-slate-800 shadow-2xl space-y-12 relative overflow-hidden">
                 <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-orange-500 rounded-[2rem] flex items-center justify-center text-white shadow-2xl mx-auto mb-6 transform rotate-6 animate-pulse">
                       <span className="material-icons text-4xl">stars</span>
                    </div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter">Impact NFTs</h2>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Coleção Gênesis v2</p>
                 </div>

                 <div className="grid grid-cols-3 gap-6">
                    {/* Renderiza os NFTs ganhos e preenche com placeholders até 15 */}
                    {nftsMestre.map((nft) => {
                       const possuído = doacoes.some((d: any) => d.nftId === nft.id);
                       return (
                        <div key={nft.id} className={`group relative aspect-square rounded-[2rem] overflow-hidden border-4 transition-all duration-500 p-3 shadow-inner ${possuído ? 'border-orange-500 bg-white dark:bg-slate-800' : 'border-slate-50 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 opacity-20 grayscale'}`}>
                           <div className={`${nft.cor} w-full h-full rounded-2xl flex items-center justify-center text-white shadow-2xl transition-transform ${possuído ? 'group-hover:scale-110 group-hover:rotate-6' : ''}`}>
                              <span className="material-icons text-2xl">{nft.icon}</span>
                           </div>
                           {possuído && (
                             <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                                <p className="text-[8px] font-black text-white text-center uppercase tracking-tighter leading-none">{nft.nome}</p>
                             </div>
                           )}
                        </div>
                       );
                    })}
                 </div>

                 <button className="w-full bg-slate-50 dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 text-[12px] font-black uppercase py-6 rounded-[2rem] tracking-[0.5em] hover:bg-white dark:hover:bg-slate-900 transition-all shadow-xl active:scale-95">
                    OpenSea Explorer
                 </button>
              </div>

              {/* CTA DE NOVAS DOAÇÕES */}
              <div className="bg-[#002B99] p-12 rounded-[4rem] text-white space-y-10 shadow-2xl relative overflow-hidden border-b-[12px] border-orange-500">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600 rounded-full opacity-20 -mr-20 -mt-20 blur-3xl"></div>
                 <h3 className="text-[12px] font-black uppercase tracking-[0.6em] opacity-60 italic">Decodificando o Sistema</h3>
                 
                 <p className="text-xl font-black uppercase tracking-tighter leading-none italic">
                    Sua jornada de impacto<br /> não para por aqui.
                 </p>

                 <Link href="/projetos" className="block pt-4">
                    <button className="w-full bg-yellow-400 text-[#002B99] font-black py-7 rounded-[2.5rem] text-[12px] uppercase tracking-[0.5em] shadow-[0_20px_50px_rgba(250,204,21,0.3)] active:scale-95 transition-all group">
                       Mintar Novo Impacto <span className="material-icons group-hover:translate-x-4 transition-transform ml-4">bolt</span>
                    </button>
                 </Link>
              </div>
           </div>

        </div>

      </main>

      <footer className="py-24 border-t border-slate-100 dark:border-slate-800 text-center space-y-12 bg-white dark:bg-slate-950 mt-20">
         <div className="font-black text-4xl uppercase tracking-tighter text-[#002B99] dark:text-white italic">
            MULHERES <span className="text-orange-500">QUE CODAM</span>
         </div>
         <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.8em]"> Decodificando o sistema • 2026 </p>
         <div className="flex justify-center gap-16 text-slate-200">
            <span className="material-icons text-4xl">terminal</span>
            <span className="material-icons text-4xl">language</span>
            <span className="material-icons text-4xl">shield</span>
         </div>
         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest opacity-20">Auditado por Amanda Folly</p>
      </footer>

    </div>
  );
}