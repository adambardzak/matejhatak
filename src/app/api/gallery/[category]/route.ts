import { v2 as cloudinary } from 'cloudinary';
import { NextRequest, NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  resource_type: string;
  created_at: string;
  format: string;
  bytes: number;
  width: number;
  height: number;
}

export async function GET(
  _request: NextRequest,
  context: { params: { category: string } }
) {
  try {
    const category = context.params.category;
    
    const result = await cloudinary.search
      .expression(`folder:gallery/${category}/*`)
      .sort_by('created_at', 'desc')
      .max_results(100)
      .execute();

    const images = result.resources.map((resource: CloudinaryResource) => ({
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