export type ClassType =
  | "FITNESS"
  | "BOXING"
  | "YOGA"
  | "CROSSFIT"
  | "OPEN GYM"
  | "BODY DUMP"
  | "DEFAULT_TYPE";

export interface ClassItem {
  id: string;
  name: string;
  type: ClassType;
  instructor: string;
  maxParticipants: number;
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  days: (ClassItem | null)[];
}

export const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;
export const CLASS_TYPES: ClassType[] = [
  "FITNESS",
  "BOXING",
  "YOGA",
  "CROSSFIT",
  "OPEN GYM",
  "BODY DUMP",
  "DEFAULT_TYPE",
];
