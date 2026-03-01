"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Visão Geral", path: "/admin", icon: "dashboard" },
    { name: "Aprovação de Projetos", path: "/admin/projetos", icon: "folder_open" },
    { name: "Conformidade MROSC", path: "/admin/mrosc", icon: "assignment_turned_in" },
    { name: "Relatórios e Analítico", path: "/admin/relatorios", icon: "bar_chart" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      
      {/* Barra Lateral Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-slate-200 fixed h-full z-10">
        <div className="h-20 flex items-center px-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#002B99] rounded text-white flex items-center justify-center font-black">{"</>"}</div>
            <span className="font-bold text-[#002B99] text-sm uppercase tracking-wide">Admin MQC</span>
          </div>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.path} href={item.path} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${isActive ? "bg-blue-50 text-[#002B99]" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}>
                <span className="material-icons text-[20px]">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all font-medium text-sm">
            <span className="material-icons text-[20px]">logout</span>
            Sair da conta
          </Link>
        </div>
      </aside>

      {/* Fundo escuro mobile */}
      {menuOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Menu Mobile */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform lg:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
         <div className="h-20 flex items-center justify-between px-6 border-b border-slate-100">
          <span className="font-bold text-[#002B99]">Admin MQC</span>
          <button onClick={() => setMenuOpen(false)}>
            <span className="material-icons">close</span>
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} onClick={() => setMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm ${pathname === item.path ? "bg-blue-50 text-[#002B99]" : "text-slate-500"}`}>
              <span className="material-icons text-[20px]">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Área Principal */}
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen overflow-x-hidden">
        {/* Cabeçalho Superior */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-slate-500" onClick={() => setMenuOpen(true)}>
              <span className="material-icons">menu</span>
            </button>
            <div className="hidden md:flex items-center bg-slate-100 rounded-lg px-3 py-2 w-64 lg:w-96">
              <span className="material-icons text-slate-400 text-lg mr-2">search</span>
              <input type="text" placeholder="Buscar projetos, ONGs..." className="bg-transparent border-none outline-none text-sm w-full text-slate-700" />
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="text-slate-400 hover:text-slate-600 relative">
              <span className="material-icons">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 sm:pl-6 border-l border-slate-200 cursor-pointer">
              <div className="w-9 h-9 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">AS</div>
              <div className="hidden sm:block text-right">
                <p className="text-sm font-bold text-slate-900 leading-none">Ana Silva</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Super Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Conteúdo Dinâmico */}
        <div className="p-4 sm:p-8 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}