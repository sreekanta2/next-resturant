import DashBoardLayoutProvider from "@/provider/dashboard.layout.provider";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <DashBoardLayoutProvider>{children}</DashBoardLayoutProvider>;
}
