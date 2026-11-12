import type { Product } from '../data/products'
import { ProductCard } from './ProductCard'

type ProductListProps = {
  products: Product[]
  favoriteIds: number[]
  onToggleFavorite: (id: number) => void
}

export function ProductList({ products, favoriteIds, onToggleFavorite }: ProductListProps) {
  return (
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
          {products.length} produtos
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favoriteIds.includes(product.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  )
}