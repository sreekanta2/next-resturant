"use client";

import { Clock, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { ClassItem, TimeSlot } from "../types";
import ClassModal from "./class-modal";
import Legend from "./legends";
import ScheduleTable from "./schedule-table";
import TimeSlotModal from "./timeslots";

const AdminTrainingSchedule = () => {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClassModalOpen, setIsClassModalOpen] = useState(false);
  const [isTimeSlotModalOpen, setIsTimeSlotModalOpen] = useState(false);

  const [currentClass, setCurrentClass] = useState<{
    slotIndex: number;
    dayIndex: number;
    classData: ClassItem | null;
  }>({ slotIndex: -1, dayIndex: -1, classData: null });

  const [currentTimeSlot, setCurrentTimeSlot] = useState<{
    id: string;
    startTime: string;
    endTime: string;
    isNew: boolean;
  }>({ id: "", startTime: "", endTime: "", isNew: true });

  // Redirect if not authenticated
  // useEffect(() => {
  //   if (status === "unauthenticated") redirect("/admin/login");
  // }, [status]);

  // Fetch schedule data
  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock data - replace with API call
        const mockData: TimeSlot[] = [
          {
            id: "1",
            startTime: "06:00",
            endTime: "07:00",
            days: [
              {
                id: "101",
                name: "FITNESS CLASS",
                type: "FITNESS",
                instructor: "Robert Cape",
                maxParticipants: 20,
              },
              {
                id: "102",
                name: "BOXING GYM",
                type: "BOXING",
                instructor: "Robert Cape",
                maxParticipants: 15,
              },
              null,
              null,
              null,
              {
                id: "103",
                name: "CROSSFIT PRO",
                type: "CROSSFIT",
                instructor: "Robert Cape",
                maxParticipants: 25,
              },
              null,
            ],
          },
          {
            id: "2",
            startTime: "07:00",
            endTime: "08:00",
            days: Array(7).fill(null),
          },
          {
            id: "3",
            startTime: "08:00",
            endTime: "09:00",
            days: [
              null,
              {
                id: "104",
                name: "YOGA FLOW",
                type: "YOGA",
                instructor: "Sarah Smith",
                maxParticipants: 18,
              },
              null,
              {
                id: "105",
                name: "BODY DUMP",
                type: "BODY DUMP",
                instructor: "Mike Johnson",
                maxParticipants: 22,
              },
              null,
              null,
              null,
            ],
          },
        ];

        setTimeSlots(mockData);
      } catch (error) {
        console.error("Failed to fetch schedule:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSaveClass = () => {
    if (!currentClass.classData) return;

    setTimeSlots((prev) => {
      const newSlots = [...prev];
      const newClass = {
        ...currentClass.classData,
        id: currentClass.classData?.id || `class-${Date.now()}`,
      };

      newSlots[currentClass.slotIndex].days[currentClass.dayIndex] = {
        ...newClass,
        name: newClass.name || "",
        type: newClass.type || "DEFAULT_TYPE", // Ensure type is always defined
        instructor: newClass.instructor || "Unknown Instructor", // Ensure instructor is always defined
        maxParticipants: newClass.maxParticipants ?? 0, // Ensure maxParticipants is always defined
      };
      return newSlots;
    });

    setIsClassModalOpen(false);
  };

  const handleSaveTimeSlot = () => {
    if (!currentTimeSlot.startTime || !currentTimeSlot.endTime) return;

    if (currentTimeSlot.isNew) {
      // Add new time slot
      const newSlot: TimeSlot = {
        id: `slot-${Date.now()}`,
        startTime: currentTimeSlot.startTime,
        endTime: currentTimeSlot.endTime,
        days: Array(7).fill(null),
      };
      setTimeSlots((prev) => [...prev, newSlot]);
    } else {
      // Update existing time slot
      setTimeSlots((prev) =>
        prev.map((slot) =>
          slot.id === currentTimeSlot.id
            ? {
                ...slot,
                startTime: currentTimeSlot.startTime,
                endTime: currentTimeSlot.endTime,
              }
            : slot
        )
      );
    }

    setIsTimeSlotModalOpen(false);
  };

  const handleAddTimeSlot = () => {
    setCurrentTimeSlot({
      id: "",
      startTime: "",
      endTime: "",
      isNew: true,
    });
    setIsTimeSlotModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Admin Training Schedule
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <div className="text-sm text-gray-600 flex items-center">
            <Clock className="mr-1" /> {timeSlots.length} time slots
          </div>
          <button
            onClick={handleAddTimeSlot}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            <PlusCircle size={18} />
            Add Time Slot
          </button>
        </div>
      </div>

      <ScheduleTable
        timeSlots={timeSlots}
        setTimeSlots={setTimeSlots}
        setCurrentClass={setCurrentClass}
        setIsClassModalOpen={setIsClassModalOpen}
        setCurrentTimeSlot={setCurrentTimeSlot}
        setIsTimeSlotModalOpen={setIsTimeSlotModalOpen}
      />

      <ClassModal
        isOpen={isClassModalOpen}
        onClose={() => setIsClassModalOpen(false)}
        currentClass={currentClass}
        setCurrentClass={setCurrentClass}
        onSave={handleSaveClass}
      />

      <TimeSlotModal
        isOpen={isTimeSlotModalOpen}
        onClose={() => setIsTimeSlotModalOpen(false)}
        currentTimeSlot={currentTimeSlot}
        setCurrentTimeSlot={setCurrentTimeSlot}
        onSave={handleSaveTimeSlot}
      />

      <Legend />
    </div>
  );
};

export default AdminTrainingSchedule;
