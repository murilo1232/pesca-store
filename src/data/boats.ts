// Declaração do type do item da listagem secundária (Requisito Fase 3)
export type Boat = {
  id: number
  name: string
  dailyRate: number
  capacity: number
  description: string
  imageUrl: string
}

// Vetor com os 3 barcos para aluguer
export const boats: Boat[] = [
  {
    id: 1,
    name: 'Boat Pro 17ft',
    dailyRate: 500.0,
    capacity: 4,
    description: 'Motor 90HP, sonar integrado e coletes inclusos.',
    imageUrl: '/BoatPro.jpg'
  },
  {
    id: 2,
    name: 'Bote Pantaneiro Alumínio',
    dailyRate: 300.0,
    capacity: 2,
    description: 'Motor elétrico 44lb, ideal para rios calmos e lagos.',
    imageUrl: '/BotePantaneiro.jpg'
  },
  {
    id: 3,
    name: 'Lancha Marajó Master',
    dailyRate: 700.0,
    capacity: 5,
    description: 'Motor 150HP, cabine de descanso e rádio VHF náutico.',
    imageUrl: '/LanchaMarajo.jpg'
  }
]