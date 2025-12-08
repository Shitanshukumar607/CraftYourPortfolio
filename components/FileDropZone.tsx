"use client";

import { ArrowRight, Upload } from "lucide-react";
import { useCallback, useState } from "react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { useRouter } from "next/navigation";

export default function FileDropZone() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const { setPortfolioData } = usePortfolioStore();
  const router = useRouter();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      setMessage("");
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setMessage("");
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setPortfolioData(data.message);
        router.push("/builder");
      } else {
        setMessage("Upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage("An error occurred during upload.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full max-w-[600px] mx-auto flex flex-col gap-6">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput")?.click()}
        className={`
          relative group cursor-pointer
          flex flex-col items-center justify-center
          w-full py-16 px-4
          border-2 border-dashed rounded-2xl
          transition-all duration-300 ease-in-out
          ${
            isDragging
              ? "border-white bg-white/5"
              : "border-[#2A2A2A] hover:border-gray-600 hover:bg-[#1A1A1A]"
          }
        `}
      >
        <input
          id="fileInput"
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFileChange}
        />

        <div className="p-4 rounded-full bg-[#1A1A1A] mb-4 group-hover:scale-105 transition-transform duration-300">
          <Upload size={28} className="text-gray-400" />
        </div>

        <h3 className="text-lg font-medium text-white mb-2">
          {file ? file.name : "Drop your resume here"}
        </h3>
        <p className="text-sm text-gray-500">Supported File Types: PDF</p>

        {uploading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl backdrop-blur-sm">
            <div className="text-white">Processing...</div>
          </div>
        )}
      </div>

      {message && (
        <div className="text-center text-sm text-red-400">{message}</div>
      )}

      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 ${
          !file || uploading
            ? "bg-gray-600 text-gray-400 cursor-not-allowed"
            : "bg-[#EAEAEA] text-black hover:scale-[1.02]"
        }`}
      >
        {uploading ? "Creating..." : file ? "Submit" : "Create Portfolio Now"}
        <ArrowRight />
      </button>

      <div className="text-center space-y-1">
        <p className="text-sm text-gray-500">
          Don’t have a resume? No problem!
        </p>
        <a
          href="#"
          className="text-sm text-gray-400 underline hover:text-white transition-colors"
        >
          Create portfolio manually instead →
        </a>
      </div>
    </div>
  );
}
