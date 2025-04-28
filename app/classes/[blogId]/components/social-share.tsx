import dribble from "@/public/images/social/dribble-1.png";
import facebook from "@/public/images/social/facebook-1.png";
import linkedin from "@/public/images/social/linkedin-1.png";
import twitter from "@/public/images/social/twitter-1.png";
import Image from "next/image";
import Link from "next/link";
export default function SocialShare() {
  const socials = [
    {
      icon: facebook,
      href: "https://www.facebook.com",
    },

    {
      icon: linkedin,
      href: "https://www.linkedin.com/",
    },

    {
      icon: twitter,
      href: "https://twitter.com",
    },
    {
      icon: dribble,
      href: "https://dribbble.com",
    },
  ];
  return (
    <div className="border rounded-md  bg-card">
      <h1 className=" p-4">Social share</h1>

      <hr />
      <div className=" flex items-center  p-4  flex-wrap gap-5">
        {socials.map((item, index) => (
          <Link href={item.href} key={`social-link-${index}`} target="_blank">
            <Image
              src={item.icon}
              alt="social"
              width={30}
              height={30}
              priority={true}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
