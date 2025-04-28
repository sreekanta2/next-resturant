import ImgContainer from "@/components/img-container";
import PageHero from "@/components/page-hero";
import gallery11 from "@/public/images/event/events-1.jpg";
import gallery12 from "@/public/images/event/events-2.jpg";
import gallery14 from "@/public/images/event/events-3.jpg";
import gallery13 from "@/public/images/event/events-4.jpg";

import { Clock, MapPin } from "lucide-react";
import Link from "next/link";
import ShaaredLayout from "../layout/shared-layout";
export const metadata = {
  title: "events",
};
const photos = [
  {
    id: 1,
    width: 570,
    height: 210,
    url: gallery11,
    category: "Yoga",
    src: { large: "https://example.com/large/image1" },
    alt: "Yoga Image",
  },
  {
    id: 2,
    width: 570,
    height: 210,
    url: gallery12,
    category: "Workouts",
    src: { large: "https://example.com/large/image2" },
    alt: "Workout Image",
  },
  {
    id: 2,
    width: 570,
    height: 210,
    url: gallery13,
    category: "Workouts",
    src: { large: "https://example.com/large/image2" },
    alt: "Workout Image",
  },
  {
    id: 2,
    width: 570,
    height: 210,
    url: gallery14,
    category: "Workouts",
    src: { large: "https://example.com/large/image2" },
    alt: "Workout Image",
  },
];
export default function EventsPage() {
  return (
    <ShaaredLayout>
      <PageHero title="Events" breadcrumbs="events" />

      <div className="container">
        <div className="  grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          {/* card */}
          {photos.map((photo) => (
            <div className="border rounded-md ">
              <ImgContainer photo={photo} sizes={600} />

              <div className="w-full  flex flex-col md:flex-row gap-8 p-8">
                <span className="w-24 h-24 p-3   bg-primary text-center  text-white  text-3xl font-bold">
                  17 nov
                </span>

                <div className="w-full space-y-4">
                  <Link
                    href={`/events/${1}`}
                    className="font-bold text-default-800  text-lg hover:text-primary"
                  >
                    International compitition for resling at state level
                  </Link>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span> 6:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>524, Loyalod , Suite B 23, Moyralwal, NY</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ShaaredLayout>
  );
}
