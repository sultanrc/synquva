import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      <h1 className="text-3xl font-bold mb-4">Landing Page</h1>
      <p className="text-gray-600 mb-6">Welcome to Synquva</p>
      <Link to="/upload">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Go to Upload
        </button>
      </Link>
    </div>
  );
}
