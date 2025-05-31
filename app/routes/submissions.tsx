import { useEffect, useState } from "react";

export default function Submissions() {
  const [formIds, setFormIds] = useState<string[]>([]);
  const [selectedForm, setSelectedForm] = useState<string | null>(null);
  const [submissions, setSubmissions] = useState<any[]>([]);

  useEffect(() => {
    const keys = Object.keys(localStorage).filter((key) =>
      key.startsWith("form-")
    );
    const ids = keys.map((k) => k.replace("form-", ""));
    setFormIds(ids);
  }, []);

  const handleView = (id: string) => {
    setSelectedForm(id);
    const data = localStorage.getItem(`submissions-${id}`);
    setSubmissions(data ? JSON.parse(data) : []);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">📋 Submitted Responses</h1>

      {formIds.length === 0 ? (
        <p className="text-gray-500">No forms submitted yet.</p>
      ) : (
        <div className="mb-6">
          <label className="block font-medium mb-2">Select a Form</label>
          <select
            className="border px-3 py-2 rounded w-full"
            onChange={(e) => handleView(e.target.value)}
          >
            <option value="">-- Select Form ID --</option>
            {formIds.map((id) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedForm && (
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Submissions for: <code>{selectedForm}</code>
          </h2>
          {submissions.length === 0 ? (
            <p className="italic text-gray-500">No submissions yet.</p>
          ) : (
            <div className="space-y-4">
              {submissions.map((entry, i) => (
                <div
                  key={i}
                  className="border rounded p-4 bg-gray-50 shadow-sm"
                >
                  <h3 className="font-bold mb-2">Entry #{i + 1}</h3>
                  <ul className="list-disc ml-6">
                    {Object.entries(entry).map(([key, val]) => (
                      <li key={key}>
                        <strong>{key}:</strong> {val}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
