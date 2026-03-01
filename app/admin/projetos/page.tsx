export default function AprovacaoProjetos() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Aprovação de Projetos</h1>
          <p className="text-slate-500 mt-1 text-sm">Gerencie as solicitações e analise os detalhes para aprovação.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
            <span className="material-icons text-[18px]">filter_list</span> Filtros
          </button>
          <button className="bg-[#002B99] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-all">
            <span className="material-icons text-[18px]">download</span> Exportar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <p className="text-slate-500 text-sm font-medium">Pendentes</p>
            <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center"><span className="material-icons text-[14px]">schedule</span></div>
          </div>
          <h2 className="text-3xl font-black text-slate-900">12</h2>
          <p className="text-slate-400 text-xs mt-1">+2 desde ontem</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <p className="text-slate-500 text-sm font-medium">Aprovados</p>
            <div className="w-6 h-6 rounded-full bg-green-100 text-green-500 flex items-center justify-center"><span className="material-icons text-[14px]">check</span></div>
          </div>
          <h2 className="text-3xl font-black text-slate-900">45</h2>
          <p className="text-green-500 text-xs mt-1 font-bold">+15% este mês</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <p className="text-slate-500 text-sm font-medium">Rejeitados</p>
            <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center"><span className="material-icons text-[14px]">close</span></div>
          </div>
          <h2 className="text-3xl font-black text-slate-900">3</h2>
          <p className="text-slate-400 text-xs mt-1">Estável</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <p className="text-slate-500 text-sm font-medium">Total Projetos</p>
            <div className="w-6 h-6 rounded-full bg-blue-100 text-[#002B99] flex items-center justify-center"><span className="material-icons text-[14px]">folder</span></div>
          </div>
          <h2 className="text-3xl font-black text-slate-900">60</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-full">
        
        {/* Lista Lateral Esquerda */}
        <div className="xl:col-span-1 space-y-4">
          <h3 className="font-bold text-slate-900 mb-2">Solicitações Recentes</h3>
          
          <div className="bg-white p-4 rounded-xl border-2 border-[#002B99] shadow-md cursor-pointer relative overflow-hidden">
            <div className="absolute top-3 right-3 w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center text-white text-xs font-black">TE</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Tech para Elas</h4>
                <p className="text-xs text-slate-500">ONG: Mulheres do Futuro</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-orange-600 bg-orange-50 px-2 py-1 rounded text-[10px] font-bold">Pendente</span>
              <span className="text-[10px] text-slate-400">Há 2 horas</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 cursor-pointer hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-700 rounded flex items-center justify-center text-white text-xs font-black">BA</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Bootcamp AfroTech</h4>
                <p className="text-xs text-slate-500">ONG: AfroCode Brasil</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-orange-600 bg-orange-50 px-2 py-1 rounded text-[10px] font-bold">Pendente</span>
              <span className="text-[10px] text-slate-400">Ontem</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 opacity-60">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-slate-200 rounded flex items-center justify-center text-slate-500 text-xs font-black">ID</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Inclusão Digital Senior</h4>
                <p className="text-xs text-slate-500">ONG: Idade Ativa</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-[10px] font-bold">Aprovado</span>
              <span className="text-[10px] text-slate-400">15 Out</span>
            </div>
          </div>
        </div>

        {/* Visão de Detalhe Direita */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#002B99] rounded-full blur-3xl opacity-30 -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-orange-500 text-white text-[10px] font-black uppercase px-2 py-1 rounded">Pendente</span>
                <span className="text-slate-300 text-xs">ID: #PRJ-2023-089</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black mb-2">Tech para Elas: Capacitação Fullstack</h2>
              <p className="text-slate-300 text-sm">Submetido em 18 de Outubro de 2023</p>
            </div>
          </div>

          <div className="p-8 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 pb-8 border-b border-slate-100">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center text-[#002B99] shrink-0"><span className="material-icons">domain</span></div>
                <div>
                  <p className="text-xs text-slate-500 font-bold mb-1 uppercase tracking-wider">Organização</p>
                  <p className="font-bold text-slate-900">Associação Mulheres do Futuro</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center text-[#002B99] shrink-0"><span className="material-icons">mail</span></div>
                <div>
                  <p className="text-xs text-slate-500 font-bold mb-1 uppercase tracking-wider">Contato Responsável</p>
                  <p className="font-bold text-slate-900">Mariana Souza</p>
                  <p className="text-sm text-[#002B99]">mariana@mulheresdofuturo.org</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center text-[#002B99] shrink-0"><span className="material-icons">badge</span></div>
                <div>
                  <p className="text-xs text-slate-500 font-bold mb-1 uppercase tracking-wider">CNPJ</p>
                  <p className="font-bold text-slate-900">12.345.678/0001-90</p>
                  <p className="text-xs text-green-600 font-bold flex items-center mt-1"><span className="material-icons text-[14px] mr-1">check_circle</span> CNPJ Ativo e Regular</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center text-[#002B99] shrink-0"><span className="material-icons">place</span></div>
                <div>
                  <p className="text-xs text-slate-500 font-bold mb-1 uppercase tracking-wider">Localização</p>
                  <p className="font-bold text-slate-900">São Paulo, SP</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-4">Descrição do Projeto</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                O projeto "Tech para Elas" visa capacitar 50 mulheres em situação de vulnerabilidade social na região metropolitana de São Paulo. O curso terá duração de 6 meses, cobrindo fundamentos de desenvolvimento web Fullstack (HTML, CSS, JavaScript, React e Node.js).
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100 flex gap-4 justify-end">
              <button className="px-6 py-2 border border-red-200 text-red-600 font-bold rounded-lg hover:bg-red-50 text-sm transition-colors">Rejeitar</button>
              <button className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 text-sm transition-colors">Aprovar Projeto</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}