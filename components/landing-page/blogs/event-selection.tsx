import Link from "next/link";

const EventSection = () => {
  return (
    <div className="col-span-1 space-y-4 ">
      <h1 className=" text-xl lg:text-2xl font-medium text-primary  ">
        Events
      </h1>
      <div className="bg-success text-white p-4 rounded-md space-y-4">
        <div className="border-b pb-4">
          <Link
            href={""}
            className="text-base lg:text-lg font-medium text-default-100 hover:text-primary"
          >
            Rest your way to health and vitality for health.
          </Link>
          <p className="text-primary-950">10-21-2025</p>
        </div>
        <div className="border-b pb-4">
          <Link
            href={""}
            className="text-base lg:text-lg font-medium text-default-100 hover:text-primary"
          >
            Rest your way to health and vitality for health.
          </Link>
          <p className="text-primary-950">10-21-2025</p>
        </div>
        <div className="border-b pb-4">
          <Link
            href={""}
            className="text-base lg:text-lg font-medium text-default-100 hover:text-primary"
          >
            Rest your way to health and vitality for health.
          </Link>
          <p className="text-primary-950">10-21-2025</p>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
