"use client";
import { SiteLogo } from "@/components/svg";
import footerImage from "@/public/images/landing-page/footer.png";
import Link from "next/link";

const Footer = () => {
  // const socials = [
  //   {
  //     icon: facebook,
  //     href: "/",
  //   },
  //   {
  //     icon: github,
  //     href: "/",
  //   },
  //   {
  //     icon: linkedin,
  //     href: "https://www.linkedin.com/company/codeshaper/",
  //   },
  //   {
  //     icon: youtube,
  //     href: "https://www.youtube.com/@codeshaper4181",
  //   },
  //   {
  //     icon: twitter,
  //     href: "https://twitter.com/codeshaperbd",
  //   },
  //   {
  //     icon: dribble,
  //     href: "https://dribbble.com/codeshaperbd",
  //   },
  //   {
  //     icon: behance,
  //     href: "https://www.behance.net/codeshaper",
  //   },
  // ];
  return (
    <footer
      className=" bg-cover bg-center bg-no-repeat relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-default-900/90 dark:before:bg-default-100"
      style={{
        background: `url(${footerImage.src})`,
      }}
    >
      <div className="py-16 2xl:py-[120px]">
        <div className="max-w-[700px] mx-auto flex flex-col items-center relative">
          <Link
            href="/"
            className="inline-flex items-center gap-4 text-primary-foreground"
          >
            <SiteLogo className="w-[50px] h-[52px]" />
            <span className="text-3xl font-semibold">Evora</span>
          </Link>
          <p className="text-base leading-7 text-default-200 dark:text-default-600 text-center mt-3">
            Care is a premium Next.js & Tailwind CSS template designed for
            developers who demand both beauty and performance.
          </p>
          <div className="mt-9 flex justify-center flex-wrap gap-4">
            {/* <Button
              asChild
              variant="outline"
              className="rounded text-primary-foreground border-primary"
            >
              <Link href="#applications">View Demo</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded text-primary-foreground border-primary"
            >
              <Link href="#">Buy Now</Link>
            </Button> */}
          </div>
          {/* <div className="mt-8 flex items-center justify-center flex-wrap gap-5">
            {socials.map((item, index) => (
              <Link
                href={item.href}
                key={`social-link-${index}`}
                target="_blank"
              >
                <Image
                  src={item.icon}
                  alt="social"
                  width={30}
                  height={30}
                  priority={true}
                />
              </Link>
            ))}
          </div> */}
        </div>
      </div>
      <div className="relative bg-default-900 dark:bg-default-50 py-6">
        <div className="container flex flex-col text-center md:text-start md:flex-row gap-2">
          <p className="text-primary-foreground flex-1 text-base xl:text-lg font-medium">
            COPYRIGHT &copy; 2024 Care All rights Reserved
          </p>
          <p className="text-primary-foreground flex-none text-base font-medium">
            Hand-crafted & Made by{" "}
            <Link href="#" className="text-primary hover:underline">
              Devora
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
