import React from "react";
import Navbar from "../components/Navbar";

export default function Result() {
  return (
    <div className="min-h-screen flex flex-col  bg-white p-6">
      <Navbar />
      <div className="flex justify-between items-center px-6 -mx-6 border-y border-gray-300">
        <div className="w-1/2 flex flex-col text-sm text-gray-500 font-light py-2">
          <p>Here's your result (preview)</p>
          <p>File: kinejkt_invoice</p>
        </div>
        <div className="w-1/2 flex justify-between text-sm text-gray-500 font-light py-2">
          <div className="flex gap-3">
            <img
              src="/Search.svg"
              alt="Search"
              className="w-4 h-4 cursor-pointer"
            />
            <img
              src="/Redo.svg"
              alt="Redo"
              className="w-4 h-4 cursor-pointer"
            />
            <img
              src="/Undo.svg"
              alt="Undo"
              className="w-4 h-4 cursor-pointer"
            />
          </div>
          <div className="flex gap-3">
            <img
              src="/Edit.svg"
              alt="Edit"
              className="w-4 h-4 cursor-pointer"
            />
            <img
              src="/Export.svg"
              alt="Export"
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center border-x border-gray-300 ">
        <div className="w-1/2 h-[80vh] bg-gray-100 overflow-auto">
          <div className="min-w-[1000px] min-h-[1200px]"></div>
        </div>
        <div className="w-1/2   ">
          <div className="flex flex-col items-center justify-center  gap-2">
            {/* Judul */}
            <h1 className="text-4xl font-light text-center">
              Choose Processing Mode
            </h1>
            <p className="text-gray-500 font-light text-sm text-center">
              How do you want us to process your document?
            </p>

            {/* Tombol */}
            <div className="flex flex-col gap-4 w-64 mt-10">
              <button className="w-full border border-gray-400 rounded-2xl py-3 text-lg font-light hover:bg-gray-50 transition">
                Automatic
              </button>

              <button
                disabled
                className="w-full border border-gray-300 rounded-2xl py-3 text-lg font-light text-gray-400 cursor-not-allowed"
              >
                Manual
              </button>

              <button
                disabled
                className="w-full border border-gray-300 rounded-2xl py-3 text-lg font-light text-gray-400 cursor-not-allowed"
              >
                Smart Manual
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center py-3 bg-white border-t border-gray-300">
        <div className="w-1/2 flex justify-center items-center gap-2 text-sm text-gray-500 font-light py-2">
          <div className="flex gap-3 mx-4 items-center">
            <div className="bg-white text-xs text-gray-500 rounded-sm outline-1 outline-gray-300 py-1 px-2">
              <img src="/Back.svg" alt="Back" className="h-3 w-3" />
            </div>
            <p>1 of 10</p>
            <div className="bg-white text-xs text-gray-500 rounded-sm outline-1 outline-gray-300 py-1 px-2">
              <img src="/Forward.svg" alt="Forward" className="h-3 w-3" />
            </div>
          </div>

          <div className="border-l border-gray-300 h-6"></div>

          <div className="flex gap-2 mx-4 items-center">
            <img src="/Minus.svg" alt="Zoom Out" className="h-5 w-5" />
            <img src="/Plus.svg" alt="Zoom In" className="h-5 w-5" />
            <div className="bg-white text-xs text-gray-500 rounded-sm outline-1 outline-gray-300 ml-2 py-1 px-2">
              100%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
