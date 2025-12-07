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
    <div className="w-full max-w-xl mx-auto mt-10">
      <div
        className={`border-2 border-dashed rounded-lg p-10 text-center transition-colors duration-200 ease-in-out ${
          isDragging
            ? "border-blue-500 bg-blue-900/20"
            : "border-gray-700 hover:border-gray-600 bg-gray-800/30"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
        />

        {file ? (
          <div className="space-y-4">
            <p className="text-lg font-medium text-gray-200">Selected file:</p>
            <p className="text-gray-400 break-all">{file.name}</p>
            <button
              onClick={() => setFile(null)}
              className="text-sm text-red-400 hover:text-red-300 underline"
            >
              Remove
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
            </div>
            <p className="text-lg text-gray-300">
              Drag & drop your resume here
            </p>
            <p className="text-sm text-gray-500">or</p>
            <label
              htmlFor="fileInput"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition-colors"
            >
              Browse Files
            </label>
          </div>
        )}
      </div>

      {file && (
        <div className="mt-6 text-center">
          <button
            onClick={handleUpload}
            disabled={uploading}
            className={`px-6 py-3 rounded-md text-white font-medium transition-colors ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {uploading ? "Processing..." : "Generate Portfolio"}
          </button>
        </div>
      )}

      {message && (
        <div
          className={`mt-4 text-center p-3 rounded ${
            message.includes("success")
              ? "bg-green-900/30 text-green-200 border border-green-800"
              : "bg-red-900/30 text-red-200 border border-red-800"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
