"use client";

import { CountUp } from "countup.js";
import { Check } from "lucide-react";
import { useEffect, useRef } from "react";

const counters = [
  { id: 1, icon: <Check size={50} />, label: "Years of Experience", count: 15 },
  {
    id: 2,

    label: "Years of Health Coaching Experience",
    count: 20,
  },
  {
    id: 3,

    label: "Contest attended aboutFitness",
    count: 25,
  },
  {
    id: 4,

    label: "CHappy Customer with my exercise plans",
    count: 450,
  },
];

export default function CounterPage() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && counterRefs.current[index]) {
            const countUp = new CountUp(
              counterRefs.current[index],
              counters[index].count,
              {
                duration: 2,
                separator: ",",
              }
            );

            if (!countUp.error) {
              countUp.start();
              observerRef.current?.unobserve(entry.target); // Stop observing after counting starts
            } else {
              console.error(countUp.error);
            }
          }
        });
      },
      { threshold: 0.5 } // 50% of the element must be visible
    );

    counterRefs.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="counter-bg-1 h-auto py-14 md:py-20">
      <div className=" container h-full text-default-100">
        <div className="w-full h-full flex flex-col md:flex-row justify-center md:justify-between gap-6 items-center">
          {counters.map((counter, index) => (
            <div
              key={counter.id}
              className="flex flex-col justify-center items-center gap-4 text-primary"
            >
              <div className="text-center text-primary">
                <span
                  ref={(el) => {
                    counterRefs.current[index] = el;
                  }}
                  className="text-2xl md:text-4xl font-bold tracking-tight"
                >
                  0
                </span>
                <p className="text-base max-w-xs">{counter.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
