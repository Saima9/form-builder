// app/components/FieldList.tsx
export default function FieldList({ onAddField }: { onAddField: (type: string) => void }) {
  const fieldTypes = ["text", "email", "number", "textarea"];
  return (
    <div className="bg-white p-5 rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">Add Fields</h2>
      <div className="space-y-3">
        {fieldTypes.map((type) => (
          <button
            key={type}
            onClick={() => onAddField(type)}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            ➕ Add {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}