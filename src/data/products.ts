// Declaração do type do item da listagem principal (Requisito Fase 3)
export type Product = {
  id: number
  name: string
  category: string
  price: number
  description: string
  imageUrl: string
}

// Vetor com os 10 produtos de pesca
export const products: Product[] = [
  {
    id: 1,
    name: 'Carretilha Perfil Baixo',
    category: 'Acessório',
    price: 300.0,
    description: 'Rolamentos blindados e recolhimento rápido 7.2:1.',
    imageUrl: '/CarretilhaPerfilBaixo.jpg'
  },
  {
    id: 2,
    name: 'Alicate Balança Pega Peixe',
    category: 'Item Diverso',
    price: 180.0,
    description: 'Capacidade de até 25kg, com estrutura anticorrosiva.',
    imageUrl: '/Alicate_Balança.jpg'
  },
  {
    id: 3,
    name: 'Vara de Carbono 1,80m',
    category: 'Item de Pesca',
    price: 200.0,
    description: 'Ação rápida para arremessos precisos de 10-25lb.',
    imageUrl: '/VaraCarbono.jpg'
  },
  {
    id: 4,
    name: 'Isca Artificial Meia-Água',
    category: 'Isca',
    price: 45.0,
    description: 'Nado provocante com garatéias reforçadas.',
    imageUrl: '/IscaArtificial.jpg'
  },
  {
    id: 5,
    name: 'Linha Multifilamento 8X 300m',
    category: 'Acessório',
    price: 95.0,
    description: 'Alta sensibilidade com elasticidade próxima de zero.',
    imageUrl: '/LinhaMulti.jpg'
  },
  {
    id: 6,
    name: 'Chapéu Safari com Proteção UV',
    category: 'Vestuário',
    price: 85.0,
    description: 'Proteção solar fator 50+ com capa para pescoço.',
    imageUrl: '/ChapeuSafari.jpg'
  },
  {
    id: 7,
    name: 'Molinete Reforçado 4000',
    category: 'Item de Pesca',
    price: 240.0,
    description: 'Carretel em alumínio e sistema de fricção com drag de 8kg.',
    imageUrl: '/MolineteResistente.jpg'
  },
  {
    id: 8,
    name: 'Caixa de Pesca Multiuso',
    category: 'Item Diverso',
    price: 160.0,
    description: 'Bandejas articuladas com divisórias ajustáveis para tralhas.',
    imageUrl: '/CaixaDePesca.jpg'
  },
  {
    id: 9,
    name: 'Passaguá Retrátil Emborrachado',
    category: 'Acessório',
    price: 110.0,
    description: 'Rede siliconada que protege os peixes e evita enroscos.',
    imageUrl: '/Passagua.jpg'
  },
  {
    id: 10,
    name: 'Luva de Pesca Antiderrapante',
    category: 'Vestuário',
    price: 75.0,
    description: 'Dedos livres para manuseio de linha e nós com segurança.',
    imageUrl: '/LuvaPesca.jpg'
  }
]