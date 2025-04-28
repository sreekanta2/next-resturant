"use client";

import BasicMap from "@/components/maps-google/basic-map";
import PageHero from "@/components/page-hero";
import { motion } from "framer-motion";
import ShaaredLayout from "../layout/shared-layout";
import ContactForm from "./components/contact-form";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ContactPage() {
  return (
    <ShaaredLayout>
      <PageHero title="Contact " breadcrumbs="contact" />

      <div className="container my-16">
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left my-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Address Section */}
          <motion.div
            className="border p-8 rounded-md bg-card space-y-4"
            variants={cardVariants}
          >
            <h3 className="text-xl font-bold uppercase mb-3 text-default-600">
              Address
            </h3>
            <p className="text-default-600">
              19, Middletown, NJ, 3348
              <br />
              United States
            </p>
            <p className="text-default-600 mt-2">
              31 S Division Street, Montour, IA, 50133
              <br />
              United States
            </p>
          </motion.div>

          {/* Open Hours Section */}
          <motion.div
            className="border p-8 rounded-md bg-card space-y-4"
            variants={cardVariants}
          >
            <h3 className="text-lg font-bold uppercase mb-3">Open Hours</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <div className="text-default-600 space-y-2">
                <p>Monday - Thursday</p>
                <p>Friday</p>
                <p>Saturday</p>
                <p>Sunday</p>
              </div>
              <div className="text-default-600 text-right space-y-2">
                <p>8 am - 8 pm</p>
                <p>8 am - 6 pm</p>
                <p>9 am - 4 pm</p>
                <p>Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Customer Support Section */}
          <motion.div
            className="border p-4 space-y-3 bg-card"
            variants={cardVariants}
          >
            <h3 className="text-lg font-bold uppercase mb-3">
              Customer Support
            </h3>
            <p className="text-default-600">+1 123 456-7890</p>
            <p className="text-default-600">+1 123 456-7890</p>
            <p className="text-default-600 mt-2">promotors@email.com</p>
            <p className="text-default-600">contact@email.com</p>
          </motion.div>
        </motion.div>
        <ContactForm />
        <BasicMap />
      </div>
    </ShaaredLayout>
  );
}
