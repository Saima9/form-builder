// app/components/FieldEditor.tsx
export default function FieldEditor({ field, onChange }: { field: any; onChange: (f: any) => void }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-xl border mt-6">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Edit Field</h2>
      <div className="space-y-3">
        <input
          type="text"
          value={field.label}
          onChange={(e) => onChange({ ...field, label: e.target.value })}
          className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Label"
        />
        <input
          type="text"
          value={field.placeholder}
          onChange={(e) => onChange({ ...field, placeholder: e.target.value })}
          className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Placeholder"
        />
        <input
          type="number"
          value={field.minLength || ""}
          onChange={(e) => onChange({ ...field, minLength: parseInt(e.target.value) || undefined })}
          className="w-full border px-3 py-2 rounded-md"
          placeholder="Min Length"
        />
        <input
          type="number"
          value={field.maxLength || ""}
          onChange={(e) => onChange({ ...field, maxLength: parseInt(e.target.value) || undefined })}
          className="w-full border px-3 py-2 rounded-md"
          placeholder="Max Length"
        />
        <input
          type="text"
          value={field.pattern || ""}
          onChange={(e) => onChange({ ...field, pattern: e.target.value })}
          className="w-full border px-3 py-2 rounded-md"
          placeholder="Pattern (e.g., ^\\d{10}$)"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={field.required}
            onChange={(e) => onChange({ ...field, required: e.target.checked })}
            className="accent-blue-600"
          />
          <span>Required</span>
        </label>
      </div>
    </div>
  );
}