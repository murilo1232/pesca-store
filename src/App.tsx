import { useEffect, useState } from 'react'
import { type Product } from './data/products'
import { boats } from './data/boats'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'
import { BoatList } from './components/BoatList'
import { Footer } from './components/Footer'

const API_URL = 'https://my.api.mockaroo.com/products.json?key=fb37b430'

export default function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [favoriteIds, setFavoriteIds] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function fetchProducts() {
    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch(API_URL)

      if (!response.ok) {
        throw new Error(`Erro ao carregar produtos (Status: ${response.status})`)
      }

      const data: Product[] = await response.json()
      setProducts(data)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Não foi possível carregar os produtos. Tente novamente.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

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
        {isLoading ? (
          <section className="space-y-6" aria-label="Carregando produtos">
            <div className="flex items-center justify-between">
              <div className="h-7 w-56 bg-slate-200 rounded animate-pulse" />
              <span className="text-sm font-medium text-sky-700 animate-pulse">
                Carregando produtos...
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 p-4 space-y-4 animate-pulse"
                >
                  <div className="h-44 w-full bg-slate-200 rounded-lg" />
                  <div className="h-4 w-24 bg-slate-200 rounded" />
                  <div className="h-5 w-3/4 bg-slate-200 rounded" />
                  <div className="h-4 w-full bg-slate-200 rounded" />
                  <div className="h-9 w-full bg-slate-200 rounded-lg" />
                </div>
              ))}
            </div>
          </section>
        ) : error ? (
          <section
            role="alert"
            className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-6 text-center space-y-4"
          >
            <h2 className="text-lg font-semibold">Ops! Algo deu errado ao buscar os produtos</h2>
            <p className="text-sm text-red-700">{error}</p>
            <button
              type="button"
              onClick={fetchProducts}
              className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition"
            >
              Tentar novamente
            </button>
          </section>
        ) : (
          <ProductList
            products={products}
            favoriteIds={favoriteIds}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        <BoatList boats={boats} />
      </main>

      {/* 3. Rodapé Institucional */}
      <Footer />
    </div>
  )
}