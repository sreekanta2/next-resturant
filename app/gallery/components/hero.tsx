import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumbs";
import Link from "next/link";

const GalleyHero = () => {
  return (
    <section
      className="   h-[60vh] bg-[url(https://i.ibb.co.com/d0zMLFXw/error-bg.jpg)] bg-cover bg-no-repeat bg-center"
      id="home"
    >
      <div className="container pt-52">
        <div className=" w-full   flex items-center justify-center   ">
          <div className=" flex justify-center flex-col items-center gap-4">
            <h1 className=" text-default-100 text-xl md:text-2xl xl:text-5xl">
              Gallery
            </h1>

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link href="/">Home</Link>
                </BreadcrumbItem>

                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>gallery</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleyHero;
