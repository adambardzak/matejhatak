import CategoryGallery from "@/components/CategoryGallery";

type GalleryPageProps = Promise<{
  category: string;
}>;

export default async function GalleryPage(params: GalleryPageProps) {
  const category = (await params).category;
  const categoryTitles: Record<string, string> = {
    rodinne: "Rodinné",
    firemni: "Firemní",
    reportaze: "Reportáže",
    tematicke: "Tématické",
    zvirata: "Zvířata",
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {categoryTitles[category] || category}
      </h1>
      <CategoryGallery category={category} />
    </div>
  );
}
