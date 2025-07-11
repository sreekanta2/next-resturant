"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import thumbnail from "@/public/images/awards-1.jpg";
import { Icon } from "@iconify/react";
import { X } from "lucide-react";
import Image from "next/image";
const AddBlock = ({
  className,
  image = thumbnail,
  title = "Storage capacity",
  desc = " Out of your total storage on Premium Plan, you have used up 40%.",
}: {
  className?: string;
  image?: any;
  title?: string;
  desc?: string;
}) => {
  const [openVideo, setOpenVideo] = useState(false);
  return (
    <>
      <div
        className={cn(
          "bg-primary dark:bg-default-400 text-primary-foreground pt-5 pb-4 px-4  rounded  m-3 hidden xl:block",
          className
        )}
      >
        <div className={cn("text-base font-semibold text-primary-foreground")}>
          {" "}
          {title}
        </div>
        <div className={cn(" text-sm text-primary-foreground")}>{desc}</div>
        <div className="mt-4 relative">
          <Image
            src={image}
            alt="footer-thumbnail"
            className="w-full h-full"
            priority={true}
          />
          <Button
            size="icon"
            type="button"
            color="secondary"
            className="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40"
            onClick={() => setOpenVideo(true)}
          >
            <Icon
              icon="heroicons:play-16-solid"
              className="w-5 h-5 text-white"
            />
          </Button>
        </div>
        <div className="text-sm font-semibold  text-primary-foreground flex items-center gap-2 mt-4">
          Upgrade Now
          <Icon icon="heroicons:arrow-long-right" className="w-5 h-5" />{" "}
        </div>
      </div>
      <Dialog open={openVideo}>
        <DialogContent size="lg" className="p-0" hiddenCloseIcon>
          <Button
            size="icon"
            onClick={() => setOpenVideo(false)}
            className="absolute -top-4 -right-4 bg-default-900"
          >
            <X className="w-6 h-6" />
          </Button>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/8D6b3McyhhU?si=zGOlY311c21dR70j"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddBlock;
