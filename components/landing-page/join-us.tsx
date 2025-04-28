import bestImage from "../../public/images/landing-page/best-fitness-two.jpg";
import CustomImage from "../Custom-image";
export default function Join() {
  return (
    <div className=" bg-primary gird grid-cols-1 md:grid-cols-2 gap-8 py-8">
      <div className="container   py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <CustomImage
            src={bestImage}
            aspectRatio="3/4"
            alt=""
            containerClass="  cols-span-1"
          />
          <div className="  col-span-2">
            <h2 className="text-4xl font-medium text-white mb-8">
              Join with best fitness coach
            </h2>
            <div className=" space-y-8">
              <h2 className=" font-medium text-white mb-2">
                Our personal trainers can help you meet your fitness goals. They
                can become your teacher, your motivator, your coach, and your
                friend. Our personal trainers are degreed and certified by an
                accredited fitness organization.
              </h2>
              <div className="space-y-4">
                <h2 className="  font-medium text-white mb-2">
                  ✔ Learn to exercise using proper form to prevent injury.
                </h2>
                <h2 className="  font-medium text-white mb-2">
                  ✔ Add diversity to your workout to get over a weight-loss
                  plateau.
                </h2>

                <h2 className="text-base font-medium text-white mb-2">
                  ✔ Boost athletic performance with sport-specific training.
                </h2>

                <h2 className=" font-medium text-white mb-2">
                  ✔ Get the accountability and motivation to get to the gym.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
