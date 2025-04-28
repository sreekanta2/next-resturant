import ImgContainer from "@/components/img-container";
import PageHero from "@/components/page-hero";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShaaredLayout from "../layout/shared-layout";
import { images } from "./components/data";
export const metadata = {
  title: "gallery",
};
export default function Page() {
  const tabsTrigger = [
    "All",
    "Yoga",
    "Fitness",
    "Weight Loss",
    "Nutrition",
    "Workouts",
  ];

  return (
    <ShaaredLayout>
      <PageHero title="Gallery" breadcrumbs="gallery" />
      <section className="container py-16">
        <Tabs defaultValue="All" className="mt-6 flex flex-col">
          {/* Left Side - Tabs List */}
          <ScrollArea>
            <TabsList className="flex w-fit h-full gap-4 rounded-lg bg-muted p-4">
              {tabsTrigger.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="w-fit flex items-center justify-start gap-4 text-default-700 transition-all duration-300 data-[state=active]:text-primary"
                >
                  <span className="md:text-xl font-medium">{category}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          {/* Content Area */}
          {tabsTrigger.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="w-full my-16 grid grid-cols-gallery auto-rows-[10px]">
                {images
                  .filter((image) =>
                    category === "All" ? true : image.category === category
                  ) // Show all images if "All" is selected
                  .map((image) => (
                    <ImgContainer key={image.id} photo={image} sizes={250} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </ShaaredLayout>
  );
}
