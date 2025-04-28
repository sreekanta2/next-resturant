import React from "react";

import { Edit, Plus, Trash2 } from "lucide-react";
import { ClassItem, DAYS_OF_WEEK, TimeSlot } from "../types";

interface ScheduleTableProps {
  timeSlots: TimeSlot[];
  setTimeSlots: React.Dispatch<React.SetStateAction<TimeSlot[]>>;
  setCurrentClass: React.Dispatch<
    React.SetStateAction<{
      slotIndex: number;
      dayIndex: number;
      classData: ClassItem | null;
    }>
  >;
  setIsClassModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTimeSlot: React.Dispatch<
    React.SetStateAction<{
      id: string;
      startTime: string;
      endTime: string;
      isNew: boolean;
    }>
  >;
  setIsTimeSlotModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({
  timeSlots,
  setTimeSlots,
  setCurrentClass,
  setIsClassModalOpen,
  setCurrentTimeSlot,
  setIsTimeSlotModalOpen,
}) => {
  const getClassTypeColor = (type: string) => {
    switch (type) {
      case "FITNESS":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "BOXING":
        return "bg-red-100 text-red-800 border-red-200";
      case "YOGA":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "CROSSFIT":
        return "bg-green-100 text-green-800 border-green-200";
      case "OPEN GYM":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "BODY DUMP":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleAddClass = (slotIndex: number, dayIndex: number) => {
    setCurrentClass({
      slotIndex,
      dayIndex,
      classData: {
        id: "",
        name: "",
        type: "DEFAULT_TYPE",
        instructor: "",
        maxParticipants: 20,
      },
    });
    setIsClassModalOpen(true);
  };

  const handleEditClass = (slotIndex: number, dayIndex: number) => {
    const classData = timeSlots[slotIndex].days[dayIndex];
    if (classData) {
      setCurrentClass({ slotIndex, dayIndex, classData: { ...classData } });
      setIsClassModalOpen(true);
    }
  };

  const handleDeleteClass = (slotIndex: number, dayIndex: number) => {
    setTimeSlots((prev) => {
      const newSlots = [...prev];
      newSlots[slotIndex].days[dayIndex] = null;
      return newSlots;
    });
  };

  const handleEditTimeSlot = (slotIndex: number) => {
    const slot = timeSlots[slotIndex];
    setCurrentTimeSlot({
      id: slot.id,
      startTime: slot.startTime,
      endTime: slot.endTime,
      isNew: false,
    });
    setIsTimeSlotModalOpen(true);
  };

  const handleDeleteTimeSlot = (slotId: string) => {
    setTimeSlots((prev) => prev.filter((slot) => slot.id !== slotId));
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 sm:p-4 text-left min-w-[120px] sm:min-w-[140px]">
                Time
              </th>
              {DAYS_OF_WEEK.map((day) => (
                <th key={day} className="p-3 sm:p-4 text-left min-w-[140px]">
                  {day}
                </th>
              ))}
              <th className="p-3 sm:p-4 text-left min-w-[80px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((slot, slotIndex) => (
              <tr
                key={slot.id}
                className={slotIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="p-3 sm:p-4 border relative group">
                  <div className="font-medium">
                    {slot.startTime} - {slot.endTime}
                  </div>
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleEditTimeSlot(slotIndex)}
                      className="p-1 text-gray-600 hover:text-blue-600"
                      title="Edit time slot"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteTimeSlot(slot.id)}
                      className="p-1 text-gray-600 hover:text-red-600"
                      title="Delete time slot"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>

                {slot.days.map((day, dayIndex) => (
                  <td
                    key={`${slot.id}-${dayIndex}`}
                    className="p-2 sm:p-3 border min-w-[140px] h-24"
                  >
                    {day ? (
                      <div
                        className={`p-2 sm:p-3 rounded-md h-full flex flex-col border ${getClassTypeColor(
                          day.type
                        )}`}
                      >
                        <div className="font-medium truncate">{day.name}</div>
                        <div className="text-sm mb-1 truncate">
                          {day.instructor}
                        </div>
                        <div className="text-xs">
                          Max: {day.maxParticipants}
                        </div>
                        <div className="mt-auto flex justify-end gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditClass(slotIndex, dayIndex);
                            }}
                            className="p-1 text-gray-700 hover:text-blue-600"
                            title="Edit class"
                          >
                            <Edit size={14} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteClass(slotIndex, dayIndex);
                            }}
                            className="p-1 text-gray-700 hover:text-red-600"
                            title="Delete class"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAddClass(slotIndex, dayIndex)}
                        className="w-full h-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded border border-dashed border-gray-300"
                      >
                        <Plus size={18} />
                      </button>
                    )}
                  </td>
                ))}

                <td className="p-2 sm:p-3 border">
                  <div className="flex justify-center gap-1">
                    <button
                      onClick={() => handleEditTimeSlot(slotIndex)}
                      className="p-1 text-gray-600 hover:text-blue-600"
                      title="Edit time slot"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteTimeSlot(slot.id)}
                      className="p-1 text-gray-600 hover:text-red-600"
                      title="Delete time slot"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleTable;
