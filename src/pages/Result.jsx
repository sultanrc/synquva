import React from "react";
import Navbar from "../components/Navbar";

export default function Result() {
  return (
    <div className="min-h-screen flex flex-col  bg-white p-6">
      <Navbar />
      <div className="bg-black flex justify-between items-center px-6 -mx-6 mb-4 outline-1 outline-gray-300 ">
        <div className="w-1/2 bg-slate-100 flex flex-col text-sm text-gray-500 font-light">
          <p>Here's your result (preview)</p>
          <p>File: kinejkt_invoice</p>
        </div>
        <button className="px-3 py-1 bg-white text-sm text-gray-500 rounded-lg outline-1 outline-gray-300 hover:bg-blue-700 hover:text-white transition">
          Log Out
        </button>
      </div>
    </div>
  );
}
