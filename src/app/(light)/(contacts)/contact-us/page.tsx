
import { ContactUsAbout, ContactUsArea, ContactUsInfoArea, ContactUsTopIntro } from "@/components/contact/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - QuranWeb Studio | Get a Free Consultation",
    description: "Contact us for a free consultation about your Quran academy website project. We specialize in building premium websites for Islamic education institutions.",
};
const page = () => {
    return (
        <main>
            <ContactUsTopIntro />
            <ContactUsArea/>
            <ContactUsAbout/>
            <ContactUsInfoArea/>
        </main>
    );
};

export default page;