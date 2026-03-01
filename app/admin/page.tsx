export default function Dashboard() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Visão Geral do Admin</h1>
          <p className="text-slate-500 mt-1 text-sm">Acompanhe o desempenho da plataforma e métricas principais.</p>
        </div>
        <button className="bg-[#002B99] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-all">
          <span className="material-icons text-[18px]">download</span> Exportar Relatório
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
           <div className="flex justify-between items-start mb-4">
             <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center"><span className="material-icons text-[20px]">payments</span></div>
             <span className="text-green-500 text-xs font-bold flex items-center gap-1"><span className="material-icons text-[14px]">trending_up</span> +15%</span>
           </div>
           <p className="text-slate-500 text-sm font-medium mb-1">Total Arrecadado</p>
           <h2 className="text-3xl font-black text-slate-900">R$ 1.250.000</h2>
           <p className="text-slate-400 text-xs mt-1">≈ 2.5M XLM</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
           <div className="flex justify-between items-start mb-4">
             <div className="w-10 h-10 rounded-full bg-blue-50 text-[#002B99] flex items-center justify-center"><span className="material-icons text-[20px]">group</span></div>
             <span className="text-green-500 text-xs font-bold flex items-center gap-1"><span className="material-icons text-[14px]">trending_up</span> +5%</span>
           </div>
           <p className="text-slate-500 text-sm font-medium mb-1">Doadores Ativos</p>
           <h2 className="text-3xl font-black text-slate-900">3.420</h2>
           <p className="text-slate-400 text-xs mt-1">No último mês</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
           <div className="flex justify-between items-start mb-4">
             <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center"><span className="material-icons text-[20px]">folder</span></div>
             <span className="text-green-500 text-xs font-bold flex items-center gap-1"><span className="material-icons text-[14px]">trending_up</span> +2%</span>
           </div>
           <p className="text-slate-500 text-sm font-medium mb-1">Projetos em Análise</p>
           <h2 className="text-3xl font-black text-slate-900">12</h2>
           <p className="text-slate-400 text-xs mt-1">Aguardando aprovação</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Arrecadação Mensal</h3>
              <p className="text-sm text-slate-500">Comparativo XLM vs BRL</p>
            </div>
            <div className="flex bg-slate-100 rounded-lg p-1">
              <button className="px-3 py-1 bg-white shadow-sm rounded text-xs font-bold text-slate-800">Mensal</button>
              <button className="px-3 py-1 rounded text-xs font-bold text-slate-500 hover:text-slate-800">Anual</button>
            </div>
          </div>
          <div className="flex-1 border-b-2 border-l-2 border-slate-100 relative min-h-[200px] flex items-end">
            {/* Gráfico Simulado com CSS puro para estabilidade */}
            <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
               <path d="M0,80 Q25,75 50,60 T100,20 L100,100 L0,100 Z" fill="rgba(0,43,153,0.05)" />
               <path d="M0,80 Q25,75 50,60 T100,20" fill="none" stroke="#002B99" strokeWidth="2" />
               <circle cx="50" cy="60" r="2" fill="white" stroke="#002B99" strokeWidth="1" />
               <circle cx="100" cy="20" r="2" fill="white" stroke="#002B99" strokeWidth="1" />
            </svg>
          </div>
          <div className="flex justify-between text-xs text-slate-400 mt-2">
            <span>Sem 1</span><span>Sem 2</span><span>Sem 3</span><span>Sem 4</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Atividade Recente</h3>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            
            <div className="relative flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-50 border-2 border-white flex items-center justify-center shrink-0 z-10 text-green-600">
                <span className="material-icons text-[16px]">attach_money</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Nova doação recebida</p>
                <p className="text-xs text-slate-500 mt-0.5">Maria S. doou 500 XLM para Educação Tech</p>
                <p className="text-[10px] text-slate-400 mt-1">Há 15 min</p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 border-2 border-white flex items-center justify-center shrink-0 z-10 text-[#002B99]">
                <span className="material-icons text-[16px]">rocket_launch</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Novo projeto submetido</p>
                <p className="text-xs text-slate-500 mt-0.5">Bootcamp Frontend aguarda revisão</p>
                <p className="text-[10px] text-slate-400 mt-1">Há 2 horas</p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-50 border-2 border-white flex items-center justify-center shrink-0 z-10 text-orange-500">
                <span className="material-icons text-[16px]">warning</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Alerta do Sistema</p>
                <p className="text-xs text-slate-500 mt-0.5">Backup automático realizado com sucesso.</p>
                <p className="text-[10px] text-slate-400 mt-1">Há 5 horas</p>
              </div>
            </div>

          </div>
          <button className="w-full mt-6 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
            Ver todas atividades
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-900">Projetos em Destaque</h3>
          <button className="text-[#002B99] text-sm font-bold hover:underline">Gerenciar todos</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
              <tr>
                <th className="px-6 py-4">Nome do Projeto</th>
                <th className="px-6 py-4">Líder</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-900">Tech para Elas</td>
                <td className="px-6 py-4 text-slate-500">Mariana Souza</td>
                <td className="px-6 py-4"><span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">Pendente</span></td>
                <td className="px-6 py-4"><button className="text-[#002B99] font-bold text-xs">Analisar</button></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-900">Inclusão Digital Senior</td>
                <td className="px-6 py-4 text-slate-500">Carlos Lima</td>
                <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Aprovado</span></td>
                <td className="px-6 py-4"><button className="text-slate-400 font-bold text-xs">Visualizar</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}