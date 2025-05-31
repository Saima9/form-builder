


import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white p-8">
      <h1 className="text-5xl font-extrabold text-blue-900 mb-6">Form Builder</h1>
      <p className="max-w-xl text-center mb-8 text-lg text-blue-800">
        Create beautiful, functional forms with drag-and-drop, validation, and live preview.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <Link
          to="/builder"
          className="bg-blue-700 text-white px-8 py-4 rounded shadow hover:bg-blue-800 transition text-xl font-semibold"
        >
          🚀 Go to Form Builder
        </Link>

        <Link
          to="/submissions"
          className="text-white-700 bg-blue-700 underline self-center md:self-auto text-lg px-7 py-4 rounded shadow hover:bg-blue-800 transition"
        >
          📋 View Submitted Responses
        </Link>
      </div>
    </main>
  );
}

