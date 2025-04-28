"use client";

import { useEffect, useState } from "react";
import { TimeSlot } from "./types";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const TrainingSchedule = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const getClassTypeColor = (type: string | undefined) => {
    if (!type) return "";
    switch (type) {
      case "FITNESS":
        return "bg-blue-100 text-blue-800";
      case "BOXING":
        return "bg-red-100 text-red-800";
      case "YOGA":
        return "bg-purple-100 text-purple-800";
      case "CROSSFIT":
        return "bg-green-100 text-green-800";
      case "OPEN GYM":
        return "bg-yellow-100 text-yellow-800";
      case "BODY DUMP":
        return "bg-indigo-100 text-indigo-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className=" container py-16">
      <h1 className="text-3xl font-bold text-center mb-8">
        Training Classes Schedule
      </h1>

      <ScrollArea className="w-full">
        <Table className="min-w-full whitespace-nowrap border rounded-md m-1">
          <TableHeader>
            <TableRow>
              <TableHead className="p-4 text-left ">Time</TableHead>
              {daysOfWeek.map((day) => (
                <TableHead key={day} className="p-4 text-left ">
                  {day}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {timeSlots.map((slot, rowIndex) => (
              <TableRow
                key={slot.id}
                // className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <TableCell className="p-4 font-medium border">
                  {slot.startTime} - {slot.endTime}
                </TableCell>
                {slot.days.map((day, dayIndex) => (
                  <TableCell
                    key={`${slot.id}-${dayIndex}`}
                    className="p-2 border"
                  >
                    {day ? (
                      <div
                        className={`p-3 rounded-md ${getClassTypeColor(
                          day.type
                        )}`}
                      >
                        <div className="font-medium">{day.name}</div>
                        <div className="text-sm">{day.instructor}</div>
                        <div className="text-xs">
                          Max: {day.maxParticipants}
                        </div>
                      </div>
                    ) : (
                      <div className="h-full min-h-[80px]"></div>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default TrainingSchedule;
