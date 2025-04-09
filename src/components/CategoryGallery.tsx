'use client';

import { useEffect, useState } from 'react';
import { CldImage } from 'next-cloudinary';

interface GalleryImage {
  public_id: string;
  url: string;
}

interface CategoryGalleryProps {
  category: string;
}

export default function CategoryGallery({ category }: CategoryGalleryProps) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/gallery/${category}`);
        if (!response.ok) throw new Error('Failed to fetch images');
        const data = await response.json();
        setImages(data.images);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [category]);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (images.length === 0) {
    return <div className="p-8 text-center">No images found in this category.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {images.map((image) => (
        <div 
          key={image.public_id}
          className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <CldImage
            src={image.public_id}
            alt={`Image from ${category}`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
} 