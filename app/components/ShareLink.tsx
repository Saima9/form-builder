import { useState } from "react";

export default function ShareLink({ fields }: { fields: any[] }) {
  const [link, setLink] = useState("");

  const generateLink = () => {
    const encoded = encodeURIComponent(JSON.stringify(fields));
    const url = `${window.location.origin}/form?data=${encoded}`;
    setLink(url);
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-xl border mt-6">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">Share Form</h2>
      <button
        onClick={generateLink}
        className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
      >
        🔗 Generate Shareable Link
      </button>
      {link && (
        <div className="mt-3 text-sm break-words text-blue-700 underline">
          {link}
        </div>
      )}
    </div>
  );
}
