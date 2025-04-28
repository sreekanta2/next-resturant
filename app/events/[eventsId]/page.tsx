import ShaaredLayout from "@/app/layout/shared-layout";
import CustomImage from "@/components/Custom-image";
import BasicMap from "@/components/maps-google/basic-map";
import PageHero from "@/components/page-hero";
import gallery13 from "@/public/images/event/events-details.jpg";

const photos = [
  {
    id: 1,
    width: 570,
    height: 210,
    url: gallery13,
    category: "Yoga",
    src: { large: "https://example.com/large/image1" },
    alt: "Yoga Image",
  },
];
export default function page() {
  return (
    <ShaaredLayout>
      <PageHero
        title="Single Events"
        breadcrumbs={[
          { href: "/events", label: "events" },
          { href: "/1", label: "1" },
        ]}
      />
      <div className="bg-background py-16">
        <div className="container  flex flex-col lg:flex-row gap-8 ">
          <div className="lg:w-3/5 border bg-card pb-4  ">
            <CustomImage
              src={gallery13}
              className="w-full"
              alt=""
              aspectRatio="16/9"
            />

            <div className="px-4 mt-10">
              <div className="space-y-8">
                <h1 className="text-xl font-bold my-4">
                  Compitition of resweling at state level
                </h1>
                <div className="text-default-600 space-y-4">
                  <h1
                    className="text-lg font-medium text-default-700
              "
                  >
                    Description of event
                  </h1>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia conse-quuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut
                    aliquid ex ea commodi consequatur? Quis autem vel eum iure
                    reprehenderit
                  </p>
                </div>
                <div className="text-default-600 space-y-4">
                  <h1
                    className="text-lg font-medium text-default-700
              "
                  >
                    More About Events
                  </h1>
                  <p>
                    - Nam libero tempore, cum soluta nobis est eligendi opti
                  </p>
                  <p>
                    - Wumque nihil impedit quo minus id quod maxime placeat
                    facere
                  </p>
                  <p>- Possimus, omnis Ut enim ad minima veniam</p>
                  <p>
                    - Temporibus autem quibusdam et aut officiis debitis aut
                    rerum
                  </p>
                  <p>
                    - At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui
                  </p>
                  <p>
                    - Et harum quidem rerum facilis est et expedita distinctio
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-4">
                <h1 className="text-xl ">Location</h1>
                <BasicMap height={300} />
              </div>
            </div>
          </div>

          <div className="lg:w-2/5">
            <div className="w-full rounded-lg overflow-hidden shadow-lg bg-card border border-default-200 p-4">
              <p className="text-default-700 text-base">
                <span className="font-semibold">Time:</span>
              </p>
              <div className="mb-4">
                <p className="text-default-700 text-base">
                  <span className="font-semibold">Date:</span> 19 August 2017
                  (Saturday)
                </p>
                <p className="text-default-700 text-base">
                  <span className="font-semibold">Time:</span> 8:00 am – 10:00
                  am
                </p>
              </div>
              <div className="mb-4">
                <p className="text-default-700 text-base">
                  <span className="font-semibold">Location:</span>
                </p>
                <p className="text-default-700 text-base italic">
                  56, Marborne, Suite, Oxyone
                  <br />
                  NY 18565
                </p>
              </div>
              <div>
                <p className="text-default-700 text-base font-semibold mb-2">
                  Hourly Schedule:
                </p>
                <ul className="list-disc list-inside">
                  <li className="text-default-700 text-base">
                    <span className="font-semibold">9:00 am</span> Breakfast
                  </li>
                  <li className="text-default-700 text-base">
                    <span className="font-semibold">11:00 am</span> Global
                    Meeting
                  </li>
                  <li className="text-default-700 text-base">
                    <span className="font-semibold">1:00 pm</span> Introductory
                    Networking Session
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Event details */}
        </div>
      </div>
    </ShaaredLayout>
  );
}
