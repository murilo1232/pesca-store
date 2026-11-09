import type { Boat } from '../data/boats'

type BoatCardProps = {
  boat: Boat
}

export function BoatCard({ boat }: BoatCardProps) {
  return (
    <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
      <div className="h-44 overflow-hidden bg-white flex items-center justify-center p-2 border-b border-slate-100">
        <img 
          src={boat.imageUrl} 
          alt={boat.name} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800">{boat.name}</h3>
          <p className="text-xs text-slate-500 mt-1">{boat.description}</p>
          <p className="text-sm text-slate-600 mt-2 font-medium">👥 Capacidade: {boat.capacity} pessoas</p>
        </div>
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 block">Diária</span>
            <span className="text-xl font-bold text-sky-900">
              {boat.dailyRate.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}/dia
            </span>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg">
            Reservar
          </button>
        </div>
      </div>
    </article>
  )
}