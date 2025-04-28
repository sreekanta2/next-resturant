import PageHero from "@/components/page-hero";
import ShaaredLayout from "../layout/shared-layout";
import ServicesTabs from "./components/services-page";
export const metadata = {
  title: "services",
};
export default function ServicePage() {
  return (
    <ShaaredLayout>
      <PageHero title="Services" breadcrumbs="services" />
      <ServicesTabs />
    </ShaaredLayout>
  );
}
{
  /* <PageHero
  title="Doctors"
  breadcrumbs={[
    { label: "Doctors", href: "/doctors" },
    { label: "Dr. Smith" }, // No href means it's the current page
  ]}
/>; */
}
