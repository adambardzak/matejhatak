"use client";

import { useState } from "react";
import { uploadImage } from "@/lib/uploadImage";

interface UploadStatus {
  fileName: string;
  status: "pending" | "uploading" | "success" | "error";
  url?: string;
  error?: string;
}

export default function BulkUploader() {
  const [uploading, setUploading] = useState(false);
  const [uploadStatuses, setUploadStatuses] = useState<UploadStatus[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !selectedCategory) return;

    setUploading(true);
    const fileArray = Array.from(files);

    // Initialize status for all files
    setUploadStatuses(
      fileArray.map((file) => ({
        fileName: file.name,
        status: "pending",
      }))
    );

    // Upload files one by one
    for (let i = 0; i < fileArray.length; i++) {
      const file = fileArray[i];

      setUploadStatuses((prev) =>
        prev.map((status, index) =>
          index === i ? { ...status, status: "uploading" } : status
        )
      );

      try {
        const url = await uploadImage(file, selectedCategory);
        setUploadStatuses((prev) =>
          prev.map((status, index) =>
            index === i ? { ...status, status: "success", url } : status
          )
        );
      } catch (error) {
        console.error(error);
        setUploadStatuses((prev) =>
          prev.map((status, index) =>
            index === i
              ? { ...status, status: "error", error: "Upload failed" }
              : status
          )
        );
      }
    }

    setUploading(false);
  };

  return (
    <div className="p-4 space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral focus:border-coral"
            required
          >
            <option value="">Choose a category...</option>
            <option value="rodinne">Rodinné</option>
            <option value="firemni">Firemní</option>
            <option value="reportaze">Reportáže</option>
            <option value="tematicke">Tématické</option>
            <option value="zvirata">Zvířata</option>
          </select>
        </div>

        <div>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleUpload}
            disabled={uploading || !selectedCategory}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-coral file:text-white
              hover:file:bg-coral/80
              disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
      </div>

      {/* Upload Status List */}
      <div className="mt-6 space-y-2">
        {uploadStatuses.map((status, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <span className="text-sm truncate flex-1">{status.fileName}</span>
            <span
              className={`text-sm px-2 py-1 rounded ${
                status.status === "success"
                  ? "bg-green-100 text-green-800"
                  : status.status === "error"
                  ? "bg-red-100 text-red-800"
                  : status.status === "uploading"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {status.status === "success"
                ? "✓ Done"
                : status.status === "error"
                ? "✗ Error"
                : status.status === "uploading"
                ? "Uploading..."
                : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
