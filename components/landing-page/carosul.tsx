"use client";

import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export function CarouselDemo() {
  return (
    <section className="relative" id="home">
      <div className="dark:from-primary/20 dark:to-[#0F172A]">
        <Carousel
          className="w-full m-0 p-0"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="m-0 p-0">
            {/* First Carousel Item */}
            <CarouselItem className=" relative banner-bg-1 h-[60vh] lg:h-[100vh] bg-[url(https://i.ibb.co.com/Q3dSdgYB/slider-1.jpg)] bg-cover bg-no-repeat bg-center">
              <div className=" absolute right-0 lg:right-20 top-1/2 transform -translate-y-1/2 px-4 lg:px-10">
                <motion.div
                  className=" max-w-xs md:max-w-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <h1 className="text-white text-3xl lg:text-5xl font-bold">
                    Qualified Car Repair Service Center
                  </h1>
                </motion.div>
              </div>
            </CarouselItem>
            <CarouselItem className=" relative banner-bg-1  h-[60vh] lg:h-[100vh] bg-[url(https://i.ibb.co.com/KzFxwyJg/slider-1-2.jpg)] bg-cover bg-no-repeat bg-center">
              <div className=" absolute right-0 lg:right-20 top-1/2 transform -translate-y-1/2 px-4 lg:px-10">
                <motion.div
                  className=" max-w-xs md:max-w-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <h1 className="text-white text-3xl lg:text-5xl font-bold">
                    Qualified Car Repair Service Center
                  </h1>
                </motion.div>
              </div>
            </CarouselItem>

            {/* Second Carousel Item */}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
