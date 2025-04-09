import Navigation from '@/components/Navigation'
import PortfolioPageContent from '@/components/PortfolioPageContent'

const categories = [
  {
    title: 'Rodinné fotografie',
    image: '/previews/family.jpg',
    link: '/portfolio/rodinne',
    description: 'Zachycení rodinných momentů a atmosféry',
    emoji: '👨‍👩‍👧‍👦'
  },
  {
    title: 'Firemní fotografie',
    image: '/previews/company.jpg',
    link: '/portfolio/firemni',
    description: 'Profesionální fotografie pro firmy a týmy',
    emoji: '💼'
  },
  {
    title: 'Reportáže',
    image: '/previews/reportage.jpg',
    link: '/portfolio/reportaze',
    description: 'Dokumentování událostí a akcí',
    emoji: '📸'
  },
  {
    title: 'Tematické focení',
    image: '/previews/themed.jpg',
    link: '/portfolio/tematicke',
    description: 'Kreativní a koncepční fotografie',
    emoji: '🎨'
  },
  {
    title: 'Zvířata',
    image: '/previews/animals.jpg',
    link: '/portfolio/zvirata',
    description: 'Portréty zvířat a mazlíčků',
    emoji: '🐾'
  }
]

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PortfolioPageContent categories={categories} />
    </main>
  )
} 