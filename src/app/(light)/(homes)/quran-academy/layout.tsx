
import { MainFooter, QuranAcademyHeader } from "@/components/layout";
import { ClientProviders } from "@/providers";

export default function QuranAcademyLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <ClientProviders>
            <QuranAcademyHeader />
            <div id="smooth-wrapper" style={{ backgroundColor: "#f5f5f5" }}>
                <div id="smooth-content">
                    {children}
                    <MainFooter />
                </div>
            </div>
        </ClientProviders>
    );
}
