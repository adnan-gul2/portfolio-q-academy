import { ServiceAbout, ServiceBanner, ServiceCapsule, ServiceOfferings, ServiceTextSlider,ServiceTestimonial, ServiceBrand, ServiceStep,ServiceFaq, ServiceSocial } from "@/components/pages/service-1/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services - QuranWeb Studio | Quran Academy Website Design",
    description: "Professional web design services for Quran academies including website design, student enrollment systems, class booking, LMS integration, and SEO optimization.",
};
const page = () => {
    return (
        <main>
            <ServiceBanner />
            <ServiceTextSlider />
            <ServiceAbout />
            <ServiceOfferings />
            <ServiceCapsule />
            <ServiceTestimonial/>
            <ServiceBrand/>
            <ServiceStep sectionSpacing="mb-140"/>
            <ServiceFaq/>
            <ServiceSocial/>
        </main>
    );
};

export default page;


