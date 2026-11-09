export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-12 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div>
          <h4 className="text-white font-bold text-base mb-2">Bait &amp; Boat</h4>
          <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
            Os melhores artigos para a sua pescaria desportiva e aluguel de barcos. Equipamentos selecionados de alta performance.
          </p>
        </div>
        <div className="md:text-right flex flex-col justify-between text-xs text-slate-400 space-y-1">
          <p>Atendimento: (46) 99999-0000 | Pato Branco - PR</p>
          <p className="text-slate-500 pt-2 border-t border-slate-800">
            © 2026 Bait &amp; Boat. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}