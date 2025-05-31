// app/components/FormPreview.tsx
import React, { useState } from "react";

export default function FormPreview({
  fields,
  onSelectField,
  onDeleteField,
  onReorderFields,
}: {
  fields: any[];
  onSelectField: (i: number) => void;
  onDeleteField: (id: number) => void;
  onReorderFields: (newFields: any[]) => void;
}) {
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [mode, setMode] = useState("desktop");
  const [isReadOnly, setIsReadOnly] = useState(true);

  const handleDragStart = (index: number) => {
    setDragIndex(index);
  };

  const handleDrop = (index: number) => {
    if (dragIndex === null || dragIndex === index) return;
    const reordered = [...fields];
    const [draggedItem] = reordered.splice(dragIndex, 1);
    reordered.splice(index, 0, draggedItem);
    onReorderFields(reordered);
    setDragIndex(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const containerClass = {
    desktop: "w-full",
    tablet: "max-w-md mx-auto",
    mobile: "max-w-xs mx-auto",
  }[mode];

  return (
    <div className="bg-white p-5 rounded-2xl shadow-xl border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          {(["desktop", "tablet", "mobile"] as const).map((m) => (
            <button
              key={m}
              className={`px-3 py-1 rounded text-sm ${
                mode === m
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setMode(m)}
            >
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </button>
          ))}
        </div>
        <label className="flex items-center space-x-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={!isReadOnly}
            onChange={() => setIsReadOnly((prev) => !prev)}
          />
          <span>Enable Input</span>
        </label>
      </div>

      <div className={`p-4 bg-gray-50 rounded-xl ${containerClass}`}>
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Form Preview</h2>

        <form className="space-y-4">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="relative cursor-pointer hover:bg-blue-50 p-3 rounded-lg border bg-white"
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
              onClick={() => onSelectField(index)}
            >
              <div className="flex justify-between items-start mb-1">
                <label className="block text-gray-700 font-medium">{field.label}</label>
                <span className="cursor-move text-gray-400 ml-2" title="Drag to reorder">
                  ⋮⋮
                </span>
              </div>

              {field.type === "textarea" ? (
                <textarea
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder={field.placeholder}
                  required={field.required}
                  minLength={field.minLength}
                  maxLength={field.maxLength}
                  pattern={field.pattern}
                  readOnly={isReadOnly}
                />
              ) : (
                <input
                  type={field.type}
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder={field.placeholder}
                  required={field.required}
                  minLength={field.minLength}
                  maxLength={field.maxLength}
                  pattern={field.pattern}
                  readOnly={isReadOnly}
                />
              )}

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteField(field.id);
                }}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800 font-bold text-lg leading-none"
                aria-label="Delete field"
              >
                &times;
              </button>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}
