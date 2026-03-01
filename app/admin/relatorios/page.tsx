export default function Relatorios() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#002B99] tracking-tight">Relatórios e Analítico</h1>
          <p className="text-slate-500 mt-1 text-sm">Visualize o impacto e a distribuição das doações por incentivo fiscal.</p>
        </div>
        <div className="flex bg-white border border-slate-200 rounded-lg p-1">
          <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-900">1m</button>
          <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-900">3m</button>
          <button className="px-4 py-1.5 bg-[#002B99] text-white rounded text-xs font-bold shadow-sm">6m</button>
          <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-900">1 ano</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
           <div className="flex justify-between items-start mb-4">
             <div className="w-10 h-10 rounded bg-blue-50 text-[#002B99] flex items-center justify-center"><span className="material-icons">payments</span></div>
             <span className="text-green-500 text-xs font-bold flex items-center gap-1"><span className="material-icons text-[14px]">trending_up</span> +12%</span>
           </div>
           <p className="text-slate-500 text-sm font-medium mb-1">Total Arrecadado</p>
           <h2 className="text-3xl font-black text-slate-900">R$ 1.2M</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
           <div className="flex justify-between items-start mb-4">
             <div className="w-10 h-10 rounded bg-purple-50 text-purple-600 flex items-center justify-center"><span className="material-icons">group</span></div>
             <span className="text-green-500 text-xs font-bold flex items-center gap-1"><span className="material-icons text-[14px]">trending_up</span> +5%</span>
           </div>
           <p className="text-slate-500 text-sm font-medium mb-1">Doadores Ativos</p>
           <h2 className="text-3xl font-black text-slate-900">4.532</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
           <div className="flex justify-between items-start mb-4">
             <div className="w-10 h-10 rounded bg-orange-50 text-orange-500 flex items-center justify-center"><span className="material-icons">rocket_launch</span></div>
             <span className="text-green-500 text-xs font-bold flex items-center gap-1"><span className="material-icons text-[14px]">trending_up</span> +8%</span>
           </div>
           <p className="text-slate-500 text-sm font-medium mb-1">Projetos Financiados</p>
           <h2 className="text-3xl font-black text-slate-900">128</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
           <div className="flex justify-between items-start mb-4">
             <div className="w-10 h-10 rounded bg-pink-50 text-pink-500 flex items-center justify-center"><span className="material-icons">receipt_long</span></div>
             <span className="text-red-500 text-xs font-bold flex items-center gap-1"><span className="material-icons text-[14px]">trending_down</span> -2%</span>
           </div>
           <p className="text-slate-500 text-sm font-medium mb-1">Ticket Médio</p>
           <h2 className="text-3xl font-black text-slate-900">R$ 265</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Distribuição por Incentivo Fiscal</h3>
              <p className="text-sm text-[#002B99]">Volume total em R$</p>
            </div>
            <button className="text-slate-400 hover:text-slate-900"><span className="material-icons">more_horiz</span></button>
          </div>
          <div className="h-64 flex items-end justify-around pb-6 gap-2 sm:gap-4 relative border-b border-slate-100 mt-10">
            {/* Gráfico de Barras CSS Puro */}
            <div className="w-12 sm:w-16 bg-blue-100 rounded-t-sm h-[80%] relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">80%</div></div>
            <div className="w-12 sm:w-16 bg-blue-200 rounded-t-sm h-[45%] relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">45%</div></div>
            <div className="w-12 sm:w-16 bg-blue-300 rounded-t-sm h-[60%] relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">60%</div></div>
            <div className="w-12 sm:w-16 bg-[#002B99] rounded-t-sm h-[100%] relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-[#002B99] opacity-0 group-hover:opacity-100 transition-opacity">100%</div></div>
            <div className="w-12 sm:w-16 bg-blue-500 rounded-t-sm h-[30%] relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">30%</div></div>
          </div>
          <div className="flex justify-around text-xs text-[#002B99] font-medium pt-4 uppercase">
            <span>Rouanet</span><span>FIA</span><span>Idoso</span><span>Esporte</span><span>Próprio</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Top Projetos</h3>
          <div className="space-y-4 flex-1">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-blue-100 text-[#002B99] flex items-center justify-center font-black text-sm">1</div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Tech para Meninas</p>
                  <p className="text-[10px] text-[#002B99]">Lei Rouanet</p>
                </div>
              </div>
              <span className="font-black text-slate-900">R$ 450k</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-slate-200 text-slate-600 flex items-center justify-center font-black text-sm">2</div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Code Bootcamp SP</p>
                  <p className="text-[10px] text-[#002B99]">Lei do Esporte</p>
                </div>
              </div>
              <span className="font-black text-slate-900">R$ 320k</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-slate-200 text-slate-600 flex items-center justify-center font-black text-sm">3</div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Inclusão Digital</p>
                  <p className="text-[10px] text-[#002B99]">FIA</p>
                </div>
              </div>
              <span className="font-black text-slate-900">R$ 210k</span>
            </div>
          </div>
          <button className="text-[#002B99] font-bold text-sm text-left mt-4 hover:underline flex items-center">
            Ver todos os projetos <span className="material-icons text-[16px] ml-1">arrow_forward</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-900">Últimas Doações</h3>
          <button className="text-[#002B99] text-sm font-bold hover:underline">Exportar CSV</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="text-slate-900 text-[10px] uppercase font-black tracking-widest border-b border-slate-100">
              <tr>
                <th className="px-6 py-4">Doador</th>
                <th className="px-6 py-4">Projeto</th>
                <th className="px-6 py-4">Incentivo</th>
                <th className="px-6 py-4">Data</th>
                <th className="px-6 py-4 text-right">Valor</th>
                <th className="px-6 py-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">AB</div>
                  <span className="font-medium text-slate-900">Alice B.</span>
                </td>
                <td className="px-6 py-4 text-[#002B99]">Tech para Meninas</td>
                <td className="px-6 py-4"><span className="bg-blue-50 text-[#002B99] px-2 py-1 rounded text-[10px] font-bold">Rouanet</span></td>
                <td className="px-6 py-4 text-[#002B99]">12 Out, 2023</td>
                <td className="px-6 py-4 text-right font-medium">R$ 1.500,00</td>
                <td className="px-6 py-4 text-center"><span className="material-icons text-green-500 text-[18px]">check_circle</span></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">MT</div>
                  <span className="font-medium text-slate-900">Maria T.</span>
                </td>
                <td className="px-6 py-4 text-[#002B99]">Inclusão Digital</td>
                <td className="px-6 py-4"><span className="bg-orange-50 text-orange-600 px-2 py-1 rounded text-[10px] font-bold">FIA</span></td>
                <td className="px-6 py-4 text-[#002B99]">11 Out, 2023</td>
                <td className="px-6 py-4 text-right font-medium">R$ 5.000,00</td>
                <td className="px-6 py-4 text-center"><span className="material-icons text-green-500 text-[18px]">check_circle</span></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold">JP</div>
                  <span className="font-medium text-slate-900">Empresa XPTO</span>
                </td>
                <td className="px-6 py-4 text-[#002B99]">Code Bootcamp SP</td>
                <td className="px-6 py-4"><span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded text-[10px] font-bold">Esporte</span></td>
                <td className="px-6 py-4 text-[#002B99]">10 Out, 2023</td>
                <td className="px-6 py-4 text-right font-medium">R$ 50.000,00</td>
                <td className="px-6 py-4 text-center"><span className="material-icons text-yellow-500 text-[18px]">schedule</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}