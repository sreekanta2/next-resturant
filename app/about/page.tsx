import PageHero from "@/components/page-hero";
import ShaaredLayout from "../layout/shared-layout";
import Intro from "./intro";

export default function page() {
  return (
    <ShaaredLayout>
      <PageHero title="About me" breadcrumbs="about" />

      <div className="container py-16">
        <Intro />
      </div>
    </ShaaredLayout>
  );
}
