import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-full mb-4 px-6">
      <img src="/logo.png" alt="logo" className="h-8 w-26" />
      <button className="px-3 py-1 bg-white text-sm text-gray-500 rounded-lg outline-1 outline-gray-300 hover:bg-blue-700 hover:text-white transition">
        Log Out
      </button>
    </div>
  );
}
