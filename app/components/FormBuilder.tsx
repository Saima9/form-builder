// app/components/FormBuilder.tsx
import { useState, useEffect } from "react";
import FieldList from "./FieldList";
import FieldEditor from "./FieldEditor";
import FormPreview from "./FormPreview";
import ShareLink from "./ShareLink";
import { predefinedTemplates } from "../data/templates";

export default function FormBuilder() {
  const [fields, setFields] = useState<any[]>([]);
  const [selectedFieldIndex, setSelectedFieldIndex] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("form-builder-template");
    if (saved) setFields(JSON.parse(saved));
  }, []);

  const groupedFields = fields.reduce((acc, field) => {
    const step = field.step || 0;
    if (!acc[step]) acc[step] = [];
    acc[step].push(field);
    return acc;
  }, {} as Record<number, any[]>);

  const totalSteps = Object.keys(groupedFields).length || 1;

  const addField = (type: string) => {
    const newField = {
      id: Date.now() + Math.random(),
      type,
      label: `${type.charAt(0).toUpperCase() + type.slice(1)} Label`,
      placeholder: "",
      required: false,
      minLength: undefined,
      maxLength: undefined,
      pattern: "",
      step: currentStep,
    };
    setFields([...fields, newField]);
    setSelectedFieldIndex(fields.length);
  };

  const updateField = (index: number, updatedField: any) => {
    const updatedFields = [...fields];
    updatedFields[index] = updatedField;
    setFields(updatedFields);
  };

  const deleteField = (id: number) => {
    const updatedFields = fields.filter((field) => field.id !== id);
    setFields(updatedFields);

    if (
      selectedFieldIndex !== null &&
      fields[selectedFieldIndex] &&
      fields[selectedFieldIndex].id === id
    ) {
      setSelectedFieldIndex(null);
    }
  };

  const loadTemplate = (templateName: string) => {
    const template = predefinedTemplates[templateName];
    if (template) {
      setFields(template.map((f) => ({ ...f, id: Date.now() + Math.random(), step: 0 })));
      setCurrentStep(0);
      setSelectedFieldIndex(null);
    }
  };

  const saveToLocal = () => {
    localStorage.setItem("form-builder-template", JSON.stringify(fields));
    alert("Template saved locally!");
  };

  const handleReorder = (reorderedFields: any[]) => {
    const allOther = fields.filter(f => f.step !== currentStep);
    setFields([...allOther, ...reorderedFields]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4">
      <FieldList onAddField={addField} />

      <div className="md:col-span-2">
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => loadTemplate("contactUs")}
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-1 rounded"
          >
            📥 Load Contact Us Template
          </button>
          <button
            onClick={saveToLocal}
            className="bg-green-100 hover:bg-green-200 text-green-800 px-3 py-1 rounded"
          >
            💾 Save Template Locally
          </button>
        </div>

        <FormPreview
          fields={groupedFields[currentStep] || []}
          onSelectField={setSelectedFieldIndex}
          onDeleteField={deleteField}
          onReorderFields={handleReorder}
        />
      </div>

      <div>
        {selectedFieldIndex !== null && fields[selectedFieldIndex] && (
          <FieldEditor
            field={fields[selectedFieldIndex]}
            onChange={(updatedField) => updateField(selectedFieldIndex, updatedField)}
          />
        )}
        <ShareLink fields={fields} />
      </div>
    </div>
  );
}
