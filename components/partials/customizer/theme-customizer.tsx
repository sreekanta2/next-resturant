"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import SelectTheme from "./select-theme";

import { Settings } from "@/components/svg";
import { ScrollArea } from "@/components/ui/scroll-area";
import RadiusInit from "./radius";
import SidebarImage from "./sidebar-image";

const ThemeCustomize = ({
  trigger = (
    <div className="fixed right-4 bottom-4 z-50">
      <Button size="icon" className=" relative h-12 w-12  rounded-full ">
        <Settings className="h-7 w-7 animate-spin" />
      </Button>
    </div>
  ),
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        side="right"
        overlayClass=" bg-transparent backdrop-blur-none"
        className="lg:w-3/4 w-full max-w-full md:max-w-sm px-6 pt-0 pb-6"
      >
        <SheetHeader className=" text-start border-b -mx-6 px-6 py-4 shadow-sm md:shadow-none">
          <SheetTitle className=" text-base  font-medium ">
            Theme Customize
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100%-120px)] -mx-6 px-6">
          <div className=" space-y-8 mt-3">
            <SelectTheme />

            <SidebarImage />
            <RadiusInit />
          </div>
        </ScrollArea>
        <SheetFooter className="py-4 gap-3 lg:flex justify-between hidden  "></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ThemeCustomize;
