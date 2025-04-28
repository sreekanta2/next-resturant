import CustomImage from "@/components/Custom-image";
import { Button } from "@/components/ui/button";
import bestImage from "../../public/images/landing-page/best-fitness-two.jpg";

export default function Intro() {
  return (
    <div className="   gird grid-cols-1 md:grid-cols-2 gap-8 py-8 ">
      <div className="container   py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="bg-primary  ">
            <CustomImage
              src={bestImage}
              aspectRatio="3/4"
              alt=""
              containerClass=" ml-6 mt-4 cols-span-1"
            />
          </div>
          <div className=" space-y-12 col-span-2">
            <h2 className="text-4xl font-medium text-default-600 mb-8">
              Justein A Personal Health Coach
            </h2>
            <div className=" space-y-8">
              <p className=" font-medium text-default-600 mb-2">
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
              <p className="text-default-600">
                Podcasting operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail. Keeping your eye
                on the ball while performing a deep dive on the start-up
                mentality to derive convergence on cross-platform integration.
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits.
              </p>
            </div>
            <Button className="primary"> Download CV</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
