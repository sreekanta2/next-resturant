"use client";

import { motion } from "framer-motion";

import serviceImage2 from "@/public/images/nutrition-2.jpg";
import serviceImage3 from "@/public/images/nutrition-3.jpg";
import serviceImage4 from "@/public/images/nutrition-4.jpg";
import serviceImage1 from "@/public/images/nutrition-5.jpg";

import LandingBookingPage from "@/components/booking";
import CustomImage from "@/components/Custom-image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import bestImage from "@/public/images/best-fitness-2.jpg";

// 7&Lt@swv_qm3aK3
// ra#kDYgC.ibL(9u
const services = [
  {
    id: "diagnostic-test",
    title: "Balance Body Mind",

    images: [
      {
        src: serviceImage1,
        alt: "Nutrition Plan",
      },
      {
        src: serviceImage2,
        alt: "Nutrition Plan",
      },
    ],
    heading: "15 Years Of Experience In Auto Servicing",
    description:
      "Tempor erat elit rebun at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit.",
    features: ["Quality Servicing", "Expert Workers", "Modern Equipment"],
  },
  {
    id: "engine-servicing",
    title: "Nutrition Plan",

    images: [
      {
        src: serviceImage3,
        alt: "Nutrition Plan",
      },
      {
        src: serviceImage4,
        alt: "Nutrition Plan",
      },
    ],
    heading: "Professional Engine Servicing",
    description:
      "Engine maintenance to ensure peak performance and long-term reliability. Our team of experts provides top-quality service with modern tools.",
    features: [
      "Affordable Pricing",
      "High-Quality Parts",
      "Certified Technicians",
    ],
  },
  {
    id: "tires-replacement",
    title: "Fitness & Performance",

    images: [
      {
        src: serviceImage1,
        alt: "Nutrition Plan",
      },
      {
        src: serviceImage3,
        alt: "Nutrition Plan",
      },
    ],
    heading: "Top-Quality Tire Replacement",
    description:
      "Stay safe on the road with our tire replacement services. We offer high-quality tires for all types of vehicles, ensuring optimal performance.",
    features: ["Premium Tires", "Quick Installation", "Affordable Options"],
  },
  {
    id: "oil-changing",
    title: "Routein Program",

    images: [
      {
        src: serviceImage3,
        alt: "Nutrition Plan",
      },
      {
        src: serviceImage1,
        alt: "Nutrition Plan",
      },
    ],
    heading: "Efficient Oil Changing Service",
    description:
      "Regular oil changes are essential for your car’s health. Our service ensures smooth engine performance and long-term durability.",
    features: [
      "Full Synthetic Options",
      "Quick Service",
      "Eco-Friendly Disposal",
    ],
  },
  {
    id: "oil-changing",
    title: "Weight Loss Program",

    images: [
      {
        src: serviceImage1,
        alt: "Nutrition Plan",
      },
      {
        src: serviceImage2,
        alt: "Nutrition Plan",
      },
    ],
    heading: "Efficient Oil Changing Service",
    description:
      "Regular oil changes are essential for your car’s health. Our service ensures smooth engine performance and long-term durability.",
    features: [
      "Full Synthetic Options",
      "Quick Service",
      "Eco-Friendly Disposal",
    ],
  },
  {
    id: "oil-changing",
    title: "Cardio Exercise",

    images: [
      {
        src: serviceImage4,
        alt: "Nutrition Plan",
      },
      {
        src: serviceImage1,
        alt: "Nutrition Plan",
      },
    ],
    heading: "Efficient Oil Changing Service",
    description:
      "Regular oil changes are essential for your car’s health. Our service ensures smooth engine performance and long-term durability.",
    features: [
      "Full Synthetic Options",
      "Quick Service",
      "Eco-Friendly Disposal",
    ],
  },
];

export default function ServicesTabs() {
  return (
    <div className="w-full  py-16 container">
      <h3 className="text-primary text-sm font-semibold text-center">
        {` // OUR SERVICES //`}
      </h3>
      <h2 className="text-3xl font-bold text-center mt-2">
        Explore Our Services
      </h2>

      <Tabs
        defaultValue="Balance Body Mind"
        className="mt-6 flex flex-col md:flex-row gap-6"
      >
        {/* Left Side - Tabs List */}
        <TabsList className="flex flex-col w-full h-full md:w-1/3 gap-4 rounded-lg bg-muted p-4">
          {services.map((service) => (
            <TabsTrigger
              key={service.id}
              value={service.title}
              className="w-full py-4 flex  items-center justify-start gap-4 text-primary transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:"
            >
              <span className="  md:text-xl font-medium">{service.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Right Side - Tab Content */}
        <div className="w-full    h-fit">
          {services.map((service) => (
            <TabsContent
              key={service.id}
              value={service.title}
              className="flex flex-col items-start md:flex-row gap-6"
            >
              {service?.images.map((image: any) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full  "
                >
                  <CustomImage src={image.src} aspectRatio="1/1" alt="" />
                </motion.div>
              ))}
            </TabsContent>
          ))}
          {/* details */}

          <div className="space-y-8">
            <div className="space-y-4 ">
              <h1 className="text-xl lg:text-2xl text-primary">
                Program Details
              </h1>
              <p className="text-default-600">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to cor-porate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
                Bring to the table win-win survival strategies to ensure
                proactive domination.
              </p>
              <p className="text-default-600">
                At the end of the day, going forward, a new normal that has
                evolved from generation X is on the runway heading towards a
                streamlined cloud solution. User generated content in real-time
                will have multiple touchpoints for offshoring. Capitalize on low
                hanging fruit to identify a ballpark value added activity to
                beta test.
              </p>
            </div>

            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="  col-span-2  text-default-600 ">
                <h2 className="text-xl font-medium  mb-8">
                  Benefit of Training
                </h2>
                <div className=" space-y-8">
                  <h2 className=" font-medium  mb-2">
                    Our personal trainers can help you meet your fitness goals.
                    They can become your teacher, your motivator, your coach,
                    and your friend. Our personal trainers are degreed and
                    certified by an accredited fitness organization.
                  </h2>
                  <div className="space-y-4">
                    <h2 className="  font-medium  mb-2">
                      ✔ Learn to exercise using proper form to prevent injury.
                    </h2>
                    <h2 className="  font-medium  mb-2">
                      ✔ Add diversity to your workout to get over a weight-loss
                      plateau.
                    </h2>

                    <h2 className="text-base font-medium  mb-2">
                      ✔ Boost athletic performance with sport-specific training.
                    </h2>

                    <h2 className=" font-medium  mb-2">
                      ✔ Get the accountability and motivation to get to the gym.
                    </h2>
                  </div>
                </div>
              </div>
              <CustomImage
                src={bestImage}
                aspectRatio="1/1"
                alt=""
                containerClass=" col-span-1 "
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2   rounded-md   ">
              {/* Nutrition Strategies Card */}
              <div className=" p-6    border hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-4">
                  Nutrition Strategies
                </h2>
                <p className="text-gray-600">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches.
                </p>
              </div>

              {/* Regular Consultations Card */}
              <div className=" p-6   border hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-4">
                  Regular Consultations
                </h2>
                <p className="text-gray-600">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches.
                </p>
              </div>

              {/* One to One Training Card */}
              <div className=" p-6   border  hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-4">
                  One to One Training
                </h2>
                <p className="text-gray-600">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches.
                </p>
              </div>

              {/* Video Training Pack Card */}
              <div className=" p-6   border  hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-4">
                  Video Training Pack
                </h2>
                <p className="text-gray-600">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <Accordion
                type="single"
                collapsible
                className="w-full col-span-3 space-y-4"
              >
                <h1 className="text-xl md:text-2xl text-primary my-4">
                  Why Chose us
                </h1>
                <AccordionItem
                  value="item-1"
                  className="border rounded-none shadow-none"
                >
                  <AccordionTrigger>
                    Bring to the table win-win survival strategies.
                  </AccordionTrigger>
                  <AccordionContent>
                    Expound the actual teachings of the great explor-er of the
                    truth, the master-builder of human hap-piness. No one
                    rejects, dislikes, or avoids.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="border rounded-none shadow-none"
                >
                  <AccordionTrigger>
                    To ensure proactive domination.
                  </AccordionTrigger>
                  <AccordionContent>
                    Expound the actual teachings of the great explor-er of the
                    truth, the master-builder of human hap-piness. No one
                    rejects, dislikes, or avoids.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="border rounded-none shadow-none"
                >
                  <AccordionTrigger>
                    Capitalize on low hanging fruit to identify.
                  </AccordionTrigger>
                  <AccordionContent>
                    Expound the actual teachings of the great explor-er of the
                    truth, the master-builder of human hap-piness. No one
                    rejects, dislikes, or avoids.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className="border rounded-none shadow-none"
                >
                  <AccordionTrigger>
                    Activity to beta test. Override the digital divide.
                  </AccordionTrigger>
                  <AccordionContent>
                    Expound the actual teachings of the great explor-er of the
                    truth, the master-builder of human hap-piness. No one
                    rejects, dislikes, or avoids.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="col-span-2">
                <LandingBookingPage />
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
