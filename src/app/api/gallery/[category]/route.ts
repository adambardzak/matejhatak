import { v2 as cloudinary } from 'cloudinary';
import { NextRequest, NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface RouteContext {
  params: {
    category: string;
  };
}

export async function GET(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { category } = context.params;
    
    const result = await cloudinary.search
      .expression(`folder:gallery/${category}/*`)
      .sort_by('created_at', 'desc')
      .max_results(100)
      .execute();

    const images = result.resources.map((resource: any) => ({
      public_id: resource.public_id,
      url: resource.secure_url
    }));

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Gallery fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gallery' },
      { status: 500 }
    );
  }
} 