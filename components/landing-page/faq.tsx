import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const Faq = () => {
  return (
    <section className="py-16 2xl:py-[120px] bg-default-100" id="faq">
      <div className="container">
        <div className="max-w-[670px] mx-auto mb-14">
          <h2 className="text-center text-xl xl:text-3xl xl:leading-[46px] font-semibold text-default-900 mb-3">
            <span className="text-primary">FAQs</span>
          </h2>
          <p className="text-base xl:leading-7 text-center text-default-700 ">
            <strong> Got Questions?</strong> We've compiled a list of answers to
            your frequently asked questions. If you can't find what you're
            looking for here, don't hesitate to reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
          <div>
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="item-1" className="bg-background">
                <AccordionTrigger className="text-base xl:text-lg text-left font-medium text-default-900">
                  Are all listed frameworks included in the purchase?
                </AccordionTrigger>
                <AccordionContent className="text-sm xl:text-base text-default-700">
                  Yes, the package contains all the frameworks and technologies
                  mentioned.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-background">
                <AccordionTrigger className="text-base xl:text-lg text-left font-medium text-default-900">
                  Do I need to pay for upgrades?
                </AccordionTrigger>
                <AccordionContent className="text-sm xl:text-base text-default-700">
                  No, once you purchase a license, all future updates are
                  included at no additional cost.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-background">
                <AccordionTrigger className="text-base xl:text-lg text-left font-medium text-default-900">
                  What does the "Regular" license cover?
                </AccordionTrigger>
                <AccordionContent className="text-sm xl:text-base text-default-700">
                  The Regular license allows you or one client to use the
                  template in a single end product where end users are not
                  charged. The price includes both the item cost and a buyer
                  fee.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-background">
                <AccordionTrigger className="text-base xl:text-lg text-left font-medium text-default-900">
                  What does the "Extended" license cover?
                </AccordionTrigger>
                <AccordionContent className="text-sm xl:text-base text-default-700">
                  The Extended license allows you or one client to use the
                  template in a single end product where end users can be
                  charged. The price includes the item cost and a buyer fee.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="item-1" className="bg-background">
                <AccordionTrigger className="text-base xl:text-lg text-left font-medium text-default-900">
                  Can I customize the templates to match my brand?
                </AccordionTrigger>
                <AccordionContent className="text-sm xl:text-base text-default-700">
                  Yes, all templates are fully customizable. You can easily
                  change colors, fonts, layouts, and more by editing the
                  provided SCSS/CSS files or using built-in configuration
                  options.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-background">
                <AccordionTrigger className="text-base xl:text-lg text-left font-medium text-default-900">
                  How do I install your templates?
                </AccordionTrigger>
                <AccordionContent className="text-sm xl:text-base text-default-700">
                  After purchasing, download the template files from
                  ThemeForest. Follow the included documentation to install
                  dependencies using npm install or yarn install, and then run
                  the development server using npm run dev or yarn dev.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-background">
                <AccordionTrigger className="text-base xl:text-lg text-left font-medium text-default-900">
                  Do your templates include a backend?
                </AccordionTrigger>
                <AccordionContent className="text-sm xl:text-base text-default-700">
                  Most of my templates are frontend-only, but some may include a
                  basic backend or API setup. Check the project description for
                  details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-background">
                <AccordionTrigger className="text-base xl:text-lg text-left font-medium text-default-900">
                  How can I get help with Devora ?
                </AccordionTrigger>
                <AccordionContent className="text-sm xl:text-base text-default-700">
                  For assistance, head over to our{" "}
                  <Link
                    href="https://codeshaperbd.freshdesk.com/support/login"
                    target="_blank"
                    className="text-primary"
                  >
                    support portal
                  </Link>{" "}
                  , register, and submit a ticket. Our dedicated support team is
                  ready to tackle any issues you might face.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
