import { useState } from 'react'
import { products } from './data/products'
import { boats } from './data/boats'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'
import { BoatList } from './components/BoatList'
import { Footer } from './components/Footer'

export default function App() {
  // Estado para armazenar os IDs dos produtos favoritados (Requisito Fase 3)
  const [favoriteIds, setFavoriteIds] = useState<number[]>([])

  // Função para adicionar ou remover um item dos favoritos
  function handleToggleFavorite(id: number) {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* 1. Cabeçalho com o contador de favoritos atualizado em tempo real */}
      <Header favoritesCount={favoriteIds.length} />

      {/* 2. Conteúdo Principal com as duas listagens dinâmicas */}
      <main className="max-w-6xl mx-auto px-4 py-8 flex-1 w-full space-y-12">
        <ProductList
          products={products}
          favoriteIds={favoriteIds}
          onToggleFavorite={handleToggleFavorite}
        />

        <BoatList boats={boats} />
      </main>

      {/* 3. Rodapé Institucional */}
      <Footer />
    </div>
  )
}