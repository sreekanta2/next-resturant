import { StaticImageData } from "next/image";
import CustomImage from "../Custom-image";

export type TDoctor = {
  id: number;
  image: StaticImageData;
  name: string;
  rating: number;
  qualification: string;
  location: string;
  consultations: number;
};

export default function DoctorCard({ doctor }: { doctor: TDoctor }) {
  return (
    <div className="bg-background shadow-lg rounded-lg   text-left border">
      <div className="p-0 border-b-0">
        <div className="w-full   relative overflow-hidden  ">
          <CustomImage
            aspectRatio="1/1"
            src={doctor?.image}
            alt={doctor?.name}
            fill
            className="object-cover cursor-pointer duration-500 hover:scale-110 transition-transform group-hover:opacity-50"
            quality={100}
          />
        </div>
      </div>

      <div className=" bg-primary w-full p-2 text-center text-white  ">
        <h1>NUTRSION</h1>
      </div>
    </div>
  );
}
