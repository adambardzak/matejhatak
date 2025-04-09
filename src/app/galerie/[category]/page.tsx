import CategoryGallery from '@/components/CategoryGallery';

interface GalleryPageProps {
  params: {
    category: string;
  };
}

export default function GalleryPage({ params }: GalleryPageProps) {
  const categoryTitles: Record<string, string> = {
    rodinne: 'Rodinné',
    firemni: 'Firemní',
    reportaze: 'Reportáže',
    tematicke: 'Tématické',
    zvirata: 'Zvířata'
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {categoryTitles[params.category] || params.category}
      </h1>
      <CategoryGallery category={params.category} />
    </div>
  );
} 