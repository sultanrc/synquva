import React from "react";

export default function Upload() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="flex items-center justify-center bg-white rounded-2xl border border-gray-300 p-8 h-[calc(100vh-60px)] w-[calc(100vw-60px)] items-center justify-center">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 flex flex-col items-center justify-center hover:border-blue-400 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-400 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 8l-3-3m3 3l3-3"
            />
          </svg>
          <p className="text-gray-600 mb-4">Click to upload or drag PDF here</p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Upload File
          </button>
        </div>
      </div>
    </div>
  );
}
