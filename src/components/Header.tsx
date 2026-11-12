type HeaderProps = {
  favoritesCount: number
}

export function Header({ favoritesCount }: HeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-sky-600 text-white p-2 rounded-lg font-bold text-xl">
            🐟
          </div>
          <div>
            <h1 className="text-xl font-bold text-sky-950 tracking-tight leading-tight">
              Bait &amp; Boat
            </h1>
            <p className="text-xs text-slate-500 hidden sm:block">
              Equipamentos e Aluguel de Embarcações
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col text-right text-xs text-slate-500">
            <span className="font-semibold text-slate-700">📍 Pato Branco - PR</span>
            <span>📞 (46) 99999-0000</span>
          </div>
          <div className="flex items-center gap-1.5 bg-rose-50 text-rose-600 px-3 py-1.5 rounded-full border border-rose-200 text-sm font-semibold">
            <span>❤️</span>
            <span>{favoritesCount}</span>
          </div>
        </div>
      </div>

      <nav className="bg-sky-900 text-white overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-2 py-2 text-sm font-medium whitespace-nowrap">
          <button className="bg-sky-700 px-3 py-1 rounded-md text-white">Todas</button>
          <button className="hover:bg-sky-800 px-3 py-1 rounded-md text-sky-100">Varas</button>
          <button className="hover:bg-sky-800 px-3 py-1 rounded-md text-sky-100">Molinetes</button>
          <button className="hover:bg-sky-800 px-3 py-1 rounded-md text-sky-100">Barcos</button>
          <button className="hover:bg-sky-800 px-3 py-1 rounded-md text-sky-100">Iscas</button>
          <button className="hover:bg-sky-800 px-3 py-1 rounded-md text-sky-100">Chapéus</button>
          <button className="hover:bg-sky-800 px-3 py-1 rounded-md text-sky-100">Redes</button>
          <button className="hover:bg-sky-800 px-3 py-1 rounded-md text-sky-100">Diversos</button>
        </div>
      </nav>
    </header>
  )
}