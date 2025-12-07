"use client";

import { useState, useCallback } from "react";

export default function FileDropZone() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

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
        setMessage("File uploaded successfully! Generating portfolio...");
        // You can redirect or update UI here
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
      {/* 5. File Drop Area */}
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

        <div className="p-4 rounded-full bg-[#1A1A1A] mb-4 group-hover:scale-110 transition-transform duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
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

      {/* 6. Primary CTA Button */}
      <button
        onClick={handleUpload}
        className="w-full py-4 rounded-xl bg-[#EAEAEA] text-black font-semibold text-lg hover:scale-[1.02] transition-transform duration-200 flex items-center justify-center gap-2"
      >
        {uploading ? "Creating..." : "Create My Portfolio Now"}
        {!uploading && <span>→</span>}
      </button>

      {/* 7. Secondary Link */}
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
