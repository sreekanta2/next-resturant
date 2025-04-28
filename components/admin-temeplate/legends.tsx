import React from "react";
import { CLASS_TYPES } from "../types";

const Legend: React.FC = () => {
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

  return (
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
      {CLASS_TYPES.map((type) => (
        <div key={type} className="flex items-center text-sm">
          <div
            className={`w-3 h-3 mr-2 rounded-sm ${getClassTypeColor(type)}`}
          ></div>
          <span>{type}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
