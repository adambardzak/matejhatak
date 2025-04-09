"use client";

import BulkUploader from "@/components/BulkUploader";

export default function UploadPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Upload Images</h1>
      <BulkUploader />
    </div>
  );
}
