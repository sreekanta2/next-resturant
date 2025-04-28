import React from "react";

import { X } from "lucide-react";
import { CLASS_TYPES, ClassItem } from "../types";

interface ClassModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentClass: {
    slotIndex: number;
    dayIndex: number;
    classData: ClassItem | null;
  };
  setCurrentClass: React.Dispatch<
    React.SetStateAction<{
      slotIndex: number;
      dayIndex: number;
      classData: ClassItem | null;
    }>
  >;
  onSave: () => void;
}

const ClassModal: React.FC<ClassModalProps> = ({
  isOpen,
  onClose,
  currentClass,
  setCurrentClass,
  onSave,
}) => {
  if (!isOpen || !currentClass.classData) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCurrentClass((prev) => ({
      ...prev,
      classData: prev.classData
        ? {
            ...prev.classData,
            [name]: name === "maxParticipants" ? parseInt(value) : value,
          }
        : null,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b p-4 sticky top-0 bg-white">
          <h2 className="text-xl font-bold">
            {currentClass.classData.id ? "Edit Class" : "Add New Class"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Class Name
            </label>
            <input
              type="text"
              name="name"
              value={currentClass.classData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Class name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Class Type
            </label>
            <select
              name="type"
              value={currentClass.classData.type}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select type</option>
              {CLASS_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Instructor
            </label>
            <input
              type="text"
              name="instructor"
              value={currentClass.classData.instructor}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Instructor name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max Participants
            </label>
            <input
              type="number"
              name="maxParticipants"
              value={currentClass.classData.maxParticipants}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              min="1"
              required
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t p-4 sticky bottom-0 bg-white">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
          >
            Save Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassModal;
