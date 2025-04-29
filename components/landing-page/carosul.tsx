"use client";

import image from "@/public/images/hero-img.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

export function CarouselDemo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <section className="relative    " id="home">
      <div className="dark:from-primary/20 dark:to-[#0F172A] relative flex   md:h-screen w-full items-center justify-center   bg-gradient-to-b from-primary/20 to-[#0F172A]">
        <div className="relative h-[120vh]   lg:h-screen w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://demo.awaikenthemes.com/assets/videos/spicyhunt-video.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-[#0F172A] dark:from-primary/20 dark:to-[#0F172A]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="flex w-full">
            <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
            <div className="relative z-10 flex flex-col lg:flex-row w-full items-center justify-between gap-8 px-4 text-center text-white md:px-8 lg:px-16 min-h-screen py-12 lg:py-0">
              {/* Text Content - Left Side */}
              <motion.div
                className="text-left max-w-2xl order-2 lg:order-1 mt-8 lg:mt-0"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
                  variants={itemVariants}
                >
                  Art of Fine Dining
                </motion.h1>

                <motion.p
                  className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-gray-100 font-medium"
                  variants={itemVariants}
                >
                  Dining redefined with every bite
                </motion.p>

                <motion.p
                  className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-200"
                  variants={itemVariants}
                >
                  Immerse yourself in a dining experience like no other, where
                  every dish is a masterpiece of flavor, crafted with care and
                  precision.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                  variants={itemVariants}
                >
                  <motion.button
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book a Table
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Image - Right Side */}
              <motion.div
                className="flex items-center justify-center h-full order-1 lg:order-2 w-full lg:w-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: "spring" }}
              >
                <div className="flex-shrink-0    animate-bounce-slow rounded-full overflow-hidden shadow-lg w-64 mt-20 h-64 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <Image
                    src={image}
                    width={400}
                    height={400}
                    alt="Fine Dining"
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
