import type { Boat } from '../data/boats'
import { BoatCard } from './BoatCard'

type BoatListProps = {
  boats: Boat[]
}

export function BoatList({ boats }: BoatListProps) {
  return (
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
          {boats.length} opções
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boats.map((boat) => (
          <BoatCard key={boat.id} boat={boat} />
        ))}
      </div>
    </section>
  )
}