export default function MROSC() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Conformidade MROSC</h1>
          <p className="text-slate-500 mt-1 text-sm">Analise e valide os relatórios de execução financeira para garantir a conformidade.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
            <span className="material-icons text-[18px]">download</span> Exportar Dados
          </button>
          <button className="bg-[#002B99] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-all">
            <span className="material-icons text-[18px]">add</span> Novo Relatório
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
           <div className="flex justify-between items-start mb-2">
             <p className="text-slate-500 text-sm font-medium">Pendentes de Análise</p>
             <div className="w-8 h-8 rounded bg-orange-50 text-orange-500 flex items-center justify-center"><span className="material-icons text-[16px]">assignment_late</span></div>
           </div>
           <h2 className="text-4xl font-black text-slate-900">12</h2>
           <p className="text-orange-500 text-xs mt-2 font-bold flex items-center gap-1"><span className="material-icons text-[14px]">error_outline</span> Ação necessária</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-[#002B99]"></div>
           <div className="flex justify-between items-start mb-2">
             <p className="text-slate-500 text-sm font-medium">Em Análise</p>
             <div className="w-8 h-8 rounded bg-blue-50 text-[#002B99] flex items-center justify-center"><span className="material-icons text-[16px]">analytics</span></div>
           </div>
           <h2 className="text-4xl font-black text-slate-900">8</h2>
           <p className="text-[#002B99] text-xs mt-2 font-medium flex items-center gap-1"><span className="material-icons text-[14px]">schedule</span> Média de 2 dias</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
           <div className="flex justify-between items-start mb-2">
             <p className="text-slate-500 text-sm font-medium">Aprovados (Mês)</p>
             <div className="w-8 h-8 rounded bg-green-50 text-green-500 flex items-center justify-center"><span className="material-icons text-[16px]">check_circle</span></div>
           </div>
           <h2 className="text-4xl font-black text-slate-900">45</h2>
           <p className="text-green-500 text-xs mt-2 font-medium flex items-center gap-1"><span className="material-icons text-[14px]">trending_up</span> +12% vs mês anterior</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
           <div className="flex justify-between items-start mb-2">
             <p className="text-slate-500 text-sm font-medium">ONGs Ativas</p>
             <div className="w-8 h-8 rounded bg-purple-50 text-purple-600 flex items-center justify-center"><span className="material-icons text-[16px]">groups</span></div>
           </div>
           <h2 className="text-4xl font-black text-slate-900">28</h2>
           <p className="text-purple-600 text-xs mt-2 font-medium flex items-center gap-1"><span className="material-icons text-[14px]">add_circle</span> 2 novas este mês</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-8">
        <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex overflow-x-auto w-full md:w-auto space-x-2 pb-2 md:pb-0 hide-scrollbar">
            <button className="px-4 py-2 bg-[#002B99] text-white rounded-lg text-sm font-bold whitespace-nowrap">Todos</button>
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50 whitespace-nowrap flex items-center gap-2">Pendentes <span className="bg-orange-100 text-orange-600 px-1.5 rounded-full text-[10px]">12</span></button>
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50 whitespace-nowrap">Em Análise</button>
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50 whitespace-nowrap">Aprovados</button>
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50 whitespace-nowrap">Rejeitados</button>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2">
              <span className="material-icons text-[18px]">filter_list</span> Filtros
            </button>
            <button className="flex-1 md:flex-none px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2">
              <span className="material-icons text-[18px]">sort</span> Ordenar
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-white text-slate-900 text-[11px] font-black border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">ONG / Organização</th>
                <th className="px-6 py-4">Projeto Referência</th>
                <th className="px-6 py-4">Data de Envio</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Documentação</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-red-50 text-red-500 flex items-center justify-center text-xs font-bold shrink-0">AV</div>
                  <div>
                    <p className="font-bold text-slate-900">ONG Amor e Vida</p>
                    <p className="text-[10px] text-slate-500">CNPJ: 12.345.678/0001-90</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="font-bold text-slate-900">Educação para Todos</p>
                  <p className="text-[10px] text-slate-500">ID: #PROJ-2023-089</p>
                </td>
                <td className="px-6 py-4 text-slate-600 font-medium">12 Out 2023, 14:30</td>
                <td className="px-6 py-4"><span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Pendente</span></td>
                <td className="px-6 py-4"><button className="flex items-center gap-2 text-[#002B99] bg-blue-50 px-3 py-1.5 rounded text-xs font-bold hover:bg-blue-100"><span className="material-icons text-[16px] text-red-500">picture_as_pdf</span> Visualizar PDF</button></td>
                <td className="px-6 py-4 text-right flex items-center justify-end gap-3">
                  <button className="text-slate-500 hover:text-slate-900 text-xs font-bold">Detalhes</button>
                  <button className="bg-[#002B99] text-white px-3 py-1.5 rounded text-xs font-bold flex items-center gap-1 hover:bg-blue-800"><span className="material-icons text-[14px]">check</span> Aprovar</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0">IE</div>
                  <div>
                    <p className="font-bold text-slate-900">Instituto Esperança</p>
                    <p className="text-[10px] text-slate-500">CNPJ: 98.765.432/0001-10</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="font-bold text-slate-900">Reflorestamento Urbano</p>
                  <p className="text-[10px] text-slate-500">ID: #PROJ-2023-112</p>
                </td>
                <td className="px-6 py-4 text-slate-600 font-medium">10 Out 2023, 09:15</td>
                <td className="px-6 py-4"><span className="bg-blue-50 text-[#002B99] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max"><span className="w-1.5 h-1.5 rounded-full bg-[#002B99]"></span> Em Análise</span></td>
                <td className="px-6 py-4"><button className="flex items-center gap-2 text-[#002B99] bg-blue-50 px-3 py-1.5 rounded text-xs font-bold hover:bg-blue-100"><span className="material-icons text-[16px] text-red-500">picture_as_pdf</span> Visualizar PDF</button></td>
                <td className="px-6 py-4 text-right">
                   <button className="border border-slate-200 text-slate-600 px-3 py-1.5 rounded text-xs font-bold hover:bg-slate-50">Continuar Análise</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-yellow-50 text-yellow-600 flex items-center justify-center text-xs font-bold shrink-0">AC</div>
                  <div>
                    <p className="font-bold text-slate-900">Associação Crescer</p>
                    <p className="text-[10px] text-slate-500">CNPJ: 45.678.901/0001-22</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="font-bold text-slate-900">Cultura na Periferia</p>
                  <p className="text-[10px] text-slate-500">ID: #PROJ-2023-045</p>
                </td>
                <td className="px-6 py-4 text-slate-600 font-medium">05 Out 2023, 16:45</td>
                <td className="px-6 py-4"><span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Aprovado</span></td>
                <td className="px-6 py-4"><button className="flex items-center gap-2 text-[#002B99] bg-blue-50 px-3 py-1.5 rounded text-xs font-bold hover:bg-blue-100"><span className="material-icons text-[16px] text-red-500">picture_as_pdf</span> Visualizar PDF</button></td>
                <td className="px-6 py-4 text-right">
                   <button className="text-slate-400 hover:text-slate-900"><span className="material-icons">more_vert</span></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <p>Mostrando 1 a 3 de 12 resultados</p>
          <div className="flex gap-1">
             <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50"><span className="material-icons text-[16px]">chevron_left</span></button>
             <button className="w-8 h-8 rounded bg-[#002B99] text-white font-bold flex items-center justify-center">1</button>
             <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50">2</button>
             <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50"><span className="material-icons text-[16px]">chevron_right</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}