export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* 1. CABEÇALHO SEMÂNTICO */}
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
              <span>0</span>
            </div>
          </div>
        </div>

        {/* Barra de Categorias */}
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

      {/* 2. CONTEÚDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 py-8 flex-1 w-full space-y-12">
        
        {/* LISTAGEM 1: ITENS EM DESTAQUE (10 ITENS MANUAIS COM FUNDO BRANCO) */}
        <section aria-labelledby="itens-destaque-title">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
            <div>
              <h2 id="itens-destaque-title" className="text-2xl font-bold text-slate-900">
                Itens em Destaque
              </h2>
              <p className="text-sm text-slate-500">
                Equipamentos selecionados para pesca de alta performance
              </p>
            </div>
            <span className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded font-semibold">
              10 produtos
            </span>
          </div>

          {/* Grid Responsivo Mobile-First: 1 col mobile, 2 cols tablet (md:), 3 cols desktop (lg:) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Carretilha */}
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
              <span className="bg-sky-100 text-sky-800 text-xs font-semibold px-3 py-1 self-start m-3 rounded-full">
                Acessório
              </span>
              <div className="h-36 relative overflow-hidden bg-white flex items-center justify-center p-2">
                <img 
                  src="/CarretilhaPerfilBaixo.jpg" 
                  alt="Carretilha Perfil Baixo" 
                  className="max-h-full max-w-full object-contain"
                />
                <button aria-label="Favoritar" className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full shadow text-base transition hover:scale-110">
                  🤍
                </button>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Carretilha Perfil Baixo</h3>
                  <p className="text-xs text-slate-500 mt-1">Rolamentos blindados e recolhimento rápido 7.2:1.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xl font-bold text-sky-900">R$ 300,00</span>
                  <button className="bg-sky-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-sky-700">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </article>

            {/* 2. Alicate Balança */}
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 self-start m-3 rounded-full">
                Item Diverso
              </span>
              <div className="h-36 relative overflow-hidden bg-white flex items-center justify-center p-2">
                <img 
                  src="/Alicate_Balança.jpg" 
                  alt="Alicate Balança" 
                  className="max-h-full max-w-full object-contain"
                />
                <button aria-label="Favoritar" className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full shadow text-base transition hover:scale-110">
                  🤍
                </button>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Alicate Balança Pega Peixe</h3>
                  <p className="text-xs text-slate-500 mt-1">Capacidade de até 25kg, com estrutura anticorrosiva.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xl font-bold text-sky-900">R$ 180,00</span>
                  <button className="bg-sky-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-sky-700">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </article>

            {/* 3. Vara Carbono */}
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 self-start m-3 rounded-full">
                Item de Pesca
              </span>
              <div className="h-36 relative overflow-hidden bg-white flex items-center justify-center p-2">
                <img 
                  src="/VaraCarbono.jpg" 
                  alt="Vara de Carbono" 
                  className="max-h-full max-w-full object-contain"
                />
                <button aria-label="Favoritar" className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full shadow text-base transition hover:scale-110">
                  🤍
                </button>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Vara de Carbono 1,80m</h3>
                  <p className="text-xs text-slate-500 mt-1">Ação rápida para arremessos precisos de 10-25lb.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xl font-bold text-sky-900">R$ 200,00</span>
                  <button className="bg-sky-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-sky-700">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </article>

            {/* 4. Isca Artificial */}
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 self-start m-3 rounded-full">
                Isca
              </span>
              <div className="h-36 relative overflow-hidden bg-white flex items-center justify-center p-2">
                <img 
                  src="/IscaArtificial.jpg" 
                  alt="Kit Iscas Artificiais" 
                  className="max-h-full max-w-full object-contain"
                />
                <button aria-label="Favoritar" className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full shadow text-base transition hover:scale-110">
                  🤍
                </button>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Isca Artificial Meia-Água</h3>
                  <p className="text-xs text-slate-500 mt-1">Nado provocante com garatéias reforçadas.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xl font-bold text-sky-900">R$ 45,00</span>
                  <button className="bg-sky-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-sky-700">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </article>

            {/* 5. Linha Multifilamento */}
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
              <span className="bg-sky-100 text-sky-800 text-xs font-semibold px-3 py-1 self-start m-3 rounded-full">
                Acessório
              </span>
              <div className="h-36 relative overflow-hidden bg-white flex items-center justify-center p-2">
                <img 
                  src="/LinhaMulti.jpg" 
                  alt="Linha Multifilamento" 
                  className="max-h-full max-w-full object-contain"
                />
                <button aria-label="Favoritar" className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full shadow text-base transition hover:scale-110">
                  🤍
                </button>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Linha Multifilamento 8X 300m</h3>
                  <p className="text-xs text-slate-500 mt-1">Alta sensibilidade com elasticidade próxima de zero.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xl font-bold text-sky-900">R$ 95,00</span>
                  <button className="bg-sky-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-sky-700">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </article>

            {/* 6. Chapéu Safari */}
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 self-start m-3 rounded-full">
                Vestuário
              </span>
              <div className="h-36 relative overflow-hidden bg-white flex items-center justify-center p-2">
                <img 
                  src="/ChapeuSafari.jpg" 
                  alt="Chapéu Safari" 
                  className="max-h-full max-w-full object-contain"
                />
                <button aria-label="Favoritar" className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full shadow text-base transition hover:scale-110">
                  🤍
                </button>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Chapéu Safari com Proteção UV</h3>
                  <p className="text-xs text-slate-500 mt-1">Proteção solar fator 50+ com capa para pescoço.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xl font-bold text-sky-900">R$ 85,00</span>
                  <button className="bg-sky-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-sky-700">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </article>

            {/* 7. Molinete Resistente */}
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 self-start m-3 rounded-full">
                Item de Pesca
              </span>
              <div className="h-36 relative overflow-hidden bg-white flex items-center justify-center p-2">
                <img 
                  src="/MolineteResistente.jpg" 
                  alt="Molinete Resistente" 
                  className="max-h-full max-w-full object-contain"
                />
                <button aria-label="Favoritar" className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full shadow text-base transition hover:scale-110">
                  🤍
                </button>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Molinete Reforçado 4000</h3>
                  <p className="text-xs text-slate-500 mt-1">Carretel em alumínio e sistema de fricção com drag de 8kg.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xl font-bold text-sky-900">R$ 240,00</span>
                  <button className="bg-sky-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-sky-700">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </article>

            {/* 8. Caixa de Pesca */}
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 self-start m-3 rounded-full">
                Item Diverso
              </span>
              <div className="h-36 relative overflow-hidden bg-white flex items-center justify-center p-2">
                <img 
                  src="/CaixaDePesca.jpg" 
                  alt="Caixa de Pesca" 
                  className="max-h-full max-w-full object-contain"
                />
                <button aria-label="Favoritar" className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full shadow text-base transition hover:scale-110">
                  🤍
                </button>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Caixa de Pesca Multiuso</h3>
                  <p className="text-xs text-slate-500 mt-1">Bandejas articuladas com divisórias ajustáveis para tralhas.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xl font-bold text-sky-900">R$ 160,00</span>
                  <button className="bg-sky-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-sky-700">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </article>

            {/* 9. Passaguá */}
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
              <span className="bg-sky-100 text-sky-800 text-xs font-semibold px-3 py-1 self-start m-3 rounded-full">
                Acessório
              </span>
              <div className="h-36 relative overflow-hidden bg-white flex items-center justify-center p-2">
                <img 
                  src="/Passagua.jpg" 
                  alt="Passaguá de Pesca" 
                  className="max-h-full max-w-full object-contain"
                />
                <button aria-label="Favoritar" className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full shadow text-base transition hover:scale-110">
                  🤍
                </button>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Passaguá Retrátil Emborrachado</h3>
                  <p className="text-xs text-slate-500 mt-1">Rede siliconada que protege os peixes e evita enroscos.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xl font-bold text-sky-900">R$ 110,00</span>
                  <button className="bg-sky-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-sky-700">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </article>

            {/* 10. Luva de Pesca */}
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 self-start m-3 rounded-full">
                Vestuário
              </span>
              <div className="h-36 relative overflow-hidden bg-white flex items-center justify-center p-2">
                <img 
                  src="/LuvaPesca.jpg" 
                  alt="Luva de Pesca" 
                  className="max-h-full max-w-full object-contain"
                />
                <button aria-label="Favoritar" className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full shadow text-base transition hover:scale-110">
                  🤍
                </button>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Luva de Pesca Antiderrapante</h3>
                  <p className="text-xs text-slate-500 mt-1">Dedos livres para manuseio de linha e nós com segurança.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xl font-bold text-sky-900">R$ 75,00</span>
                  <button className="bg-sky-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-sky-700">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* LISTAGEM 2: ALUGUEL DE BARCOS (3 ITENS MANUAIS COM FUNDO BRANCO) */}
        <section aria-labelledby="aluguel-barcos-title" className="pt-6 border-t border-slate-200">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
            <div>
              <h2 id="aluguel-barcos-title" className="text-2xl font-bold text-slate-900">
                Aluguel de Barcos
              </h2>
              <p className="text-sm text-slate-500">
                Embarcações equipadas para passeios e pesca esportiva
              </p>
            </div>
            <span className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded font-semibold">
              3 opções
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Barco 1: Boat Pro */}
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
              <div className="h-44 overflow-hidden bg-white flex items-center justify-center p-2 border-b border-slate-100">
                <img 
                  src="/BoatPro.jpg" 
                  alt="Boat Pro 17ft" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Boat Pro 17ft</h3>
                  <p className="text-xs text-slate-500 mt-1">Motor 90HP, sonar integrado e coletes inclusos.</p>
                  <p className="text-sm text-slate-600 mt-2 font-medium">👥 Capacidade: 4 pessoas</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Diária</span>
                    <span className="text-xl font-bold text-sky-900">R$ 500/dia</span>
                  </div>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg">
                    Reservar
                  </button>
                </div>
              </div>
            </article>

            {/* Barco 2: Bote Pantaneiro */}
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
              <div className="h-44 overflow-hidden bg-white flex items-center justify-center p-2 border-b border-slate-100">
                <img 
                  src="/BotePantaneiro.jpg" 
                  alt="Bote Pantaneiro" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Bote Pantaneiro Alumínio</h3>
                  <p className="text-xs text-slate-500 mt-1">Motor elétrico 44lb, ideal para rios calmos e lagos.</p>
                  <p className="text-sm text-slate-600 mt-2 font-medium">👥 Capacidade: 2 pessoas</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Diária</span>
                    <span className="text-xl font-bold text-sky-900">R$ 300/dia</span>
                  </div>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg">
                    Reservar
                  </button>
                </div>
              </div>
            </article>

            {/* Barco 3: Lancha Marajó */}
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
              <div className="h-44 overflow-hidden bg-white flex items-center justify-center p-2 border-b border-slate-100">
                <img 
                  src="/LanchaMarajo.jpg" 
                  alt="Lancha Marajó Master" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Lancha Marajó Master</h3>
                  <p className="text-xs text-slate-500 mt-1">Motor 150HP, cabine de descanso e rádio VHF náutico.</p>
                  <p className="text-sm text-slate-600 mt-2 font-medium">👥 Capacidade: 5 pessoas</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Diária</span>
                    <span className="text-xl font-bold text-sky-900">R$ 700/dia</span>
                  </div>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg">
                    Reservar
                  </button>
                </div>
              </div>
            </article>

          </div>
        </section>

      </main>

      {/* 3. RODAPÉ INSTITUCIONAL */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-12 py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="text-white font-bold text-base mb-2">Bait &amp; Boat</h4>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Os melhores artigos para a sua pescaria desportiva e aluguer de barcos. Equipamentos selecionados de alta performance.
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
    </div>
  )
}