import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumbs";
import Link from "next/link";
import React from "react";

interface PageHeroProps {
  title: string;
  breadcrumbs: string | { label: string; href?: string }[];
  backgroundUrl?: string;
}

const PageHero = ({
  title,
  breadcrumbs,
  backgroundUrl = "https://i.ibb.co.com/d0zMLFXw/error-bg.jpg",
}: PageHeroProps) => {
  // Convert a string breadcrumb into an array
  const breadcrumbList =
    typeof breadcrumbs === "string" ? [{ label: breadcrumbs }] : breadcrumbs;

  // Always include "Home" as the first breadcrumb
  const fullBreadcrumbs = [{ label: "Home", href: "/" }, ...breadcrumbList];

  return (
    <section
      className="h-[60vh] bg-cover bg-no-repeat bg-center   bg-black"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="container pt-52">
        <div className="w-full flex items-center justify-center">
          <div className="flex justify-center flex-col items-center gap-4">
            <h1 className="text-primary-950 text-xl md:text-2xl xl:text-5xl">
              {title}
            </h1>

            {/* Breadcrumbs List */}
            <Breadcrumb>
              <BreadcrumbList>
                {fullBreadcrumbs.map((item, index) => (
                  <React.Fragment key={item.label}>
                    <BreadcrumbItem>
                      {item.href ? (
                        <Link href={item.href}>{item.label}</Link>
                      ) : (
                        <BreadcrumbPage>{item.label}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                    {index < fullBreadcrumbs.length - 1 && (
                      <BreadcrumbSeparator />
                    )}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
