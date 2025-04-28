"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import thumbnail from "@/public/images/about-video.jpg";
import { Icon } from "@iconify/react";
import { X } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent } from "../ui/dialog";

const AboutUs = ({
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
    <div className=" container  grid grid-cols-1 lg:grid-cols-2 my-14">
      <div className="flex items-center max-w-2xl justify-center">
        <div className="space-y-3">
          <h1 className=" text-xl lg:text-2xl font-medium text-primary">
            About us
          </h1>
          <h2 className="text-base lg:text-lg font-medium text-default-700">
            Our fitness coaches can enable you to meet your wellness objectives.
            They can turn into your instructor, your helper, your mentor and
            your companion.
          </h2>
          <p className="text-base font-medium text-default-600">
            Osed quia consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipisci sed quia non numquam qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
        </div>
      </div>
      <div className=" flex justify-center lg:justify-end">
        <div className={cn("  ", className)}>
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
      </div>
    </div>
  );
};

export default AboutUs;
