import { Save, X } from "lucide-react";
import React from "react";

interface TimeSlotModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTimeSlot: {
    id: string;
    startTime: string;
    endTime: string;
    isNew: boolean;
  };
  setCurrentTimeSlot: React.Dispatch<
    React.SetStateAction<{
      id: string;
      startTime: string;
      endTime: string;
      isNew: boolean;
    }>
  >;
  onSave: () => void;
}

const TimeSlotModal: React.FC<TimeSlotModalProps> = ({
  isOpen,
  onClose,
  currentTimeSlot,
  setCurrentTimeSlot,
  onSave,
}) => {
  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentTimeSlot((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-bold">
            {currentTimeSlot.isNew ? "Add Time Slot" : "Edit Time Slot"}
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
              Start Time
            </label>
            <input
              type="time"
              name="startTime"
              value={currentTimeSlot.startTime}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Time
            </label>
            <input
              type="time"
              name="endTime"
              value={currentTimeSlot.endTime}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t p-4">
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
            <Save size={18} />
            {currentTimeSlot.isNew ? "Add Slot" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeSlotModal;
