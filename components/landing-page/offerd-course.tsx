import { Button } from "../ui/button";

export default function OfferdCourse() {
  return (
    <div className="bg-[url(https://i.ibb.co.com/6057yN8B/fitness-course-bg.jpg)] bg-cover bg-fixed w-full">
      <div className="container">
        <div className="h-96 bg-transparent max-w-xl  font-mono  text-white flex flex-col justify-center   ">
          <h1 className="text-3xl font-bold mb-4  font-mono ">
            6 months Fitness Course
          </h1>
          <h1 className="mb-4  text-lg  ">
            Start working on your body today, and with our individual fitness
            program, already in 90 days you will see a totally different girl in
            the mirror.
          </h1>
          <Button className="max-w-[200px]" color="primary">
            Get Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}
