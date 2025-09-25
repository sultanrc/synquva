import React from "react";

export default function Upload() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <div className="flex justify-between w-full mb-4">
        <img src="/logo.png" alt="logo" className="h-8 w-26" />
        <button className="px-2 py-1 bg-white text-gray-500 rounded-lg outline-1 outline-gray-400 hover:bg-blue-700 transition">
          Log Out
        </button>
      </div>
      <div
        className="flex flex-col items-center justify-center rounded-2xl border border-gray-300 p-8 h-[calc(100vh-100px)] w-full gap-10"
        style={{
          backgroundColor: "#e5e5f7",
          opacity: 0.8,
          backgroundImage:
            "radial-gradient(#DDDCDA 1px, transparent 1px), radial-gradient(#DDDCDA 1px, #FFFFFF 1px)",
          backgroundSize: "10px 10px",
          backgroundPosition: "0 0, 5px 5px",
        }}
      >
        <div className="flex justify-center items-center flex-col gap-2">
          <h1 className="text-4xl font-bold">Start by uploading your file</h1>
          <h2 className="text-md font-light text-gray-600">
            We’ll process it into structured data you can review and export.
          </h2>
        </div>
        <div className=" bg-white p-2 flex flex-col items-center justify-center rounded-lg outline-1 outline-gray-300">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 flex flex-col items-center justify-center hover:border-blue-400 transition bg-white/80">
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
            <p className="text-gray-600 mb-4">
              Click to upload or drag PDF here
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Upload File
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
