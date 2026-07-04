import { QuranAcademyHero, QuranAcademyAbout, QuranAcademyProject, QuranAcademyService, QuranAcademyCTA } from "@/components/home/quran-academy";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "QuranWeb Studio - Premium Websites for Quran Academies | Islamic Education Website Design",
    description: "We build premium websites for Quran Academies that increase student enrollments, improve trust, and automate admissions. Specialized in Islamic education website design.",
    keywords: "Quran Academy Website Design, Islamic School Website Development, Online Quran Academy Website, Quran Learning Platform Development, Islamic Education Website Design",
};
const page = () => {
    return (
        <main>
            <QuranAcademyHero />
            <QuranAcademyAbout />
            <QuranAcademyProject />
            <QuranAcademyService />
            <QuranAcademyCTA />
        </main>
    );
};

export default page;
