import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file = data.get('file') as File;
    const category = data.get('category') as string;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64String = buffer.toString('base64');
    
    // Upload to Cloudinary in category-specific folder
    const result = await cloudinary.uploader.upload(
      `data:${file.type};base64,${base64String}`,
      {
        folder: `gallery/${category || 'uncategorized'}`,
        resource_type: 'auto',
        transformation: {
          quality: 'auto:good',
          fetch_format: 'auto',
        },
      }
    );

    return NextResponse.json({ 
      url: result.secure_url,
      public_id: result.public_id,
      category 
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    );
  }
} 