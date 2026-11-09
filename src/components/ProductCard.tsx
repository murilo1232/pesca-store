import type { Product } from '../data/products'

type ProductCardProps = {
  product: Product
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
}

export function ProductCard({ product, isFavorite, onToggleFavorite }: ProductCardProps) {
  return (
    <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
      <span className="bg-sky-100 text-sky-800 text-xs font-semibold px-3 py-1 self-start m-3 rounded-full">
        {product.category}
      </span>
      <div className="h-36 relative overflow-hidden bg-white flex items-center justify-center p-2">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="max-h-full max-w-full object-contain"
        />
        <button 
          type="button"
          onClick={() => onToggleFavorite(product.id)}
          aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"} 
          className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full shadow text-base transition hover:scale-110 cursor-pointer"
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-slate-800 text-lg">{product.name}</h3>
          <p className="text-xs text-slate-500 mt-1">{product.description}</p>
        </div>
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xl font-bold text-sky-900">
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
          <button className="bg-sky-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-sky-700">
            Ver Detalhes
          </button>
        </div>
      </div>
    </article>
  )
}