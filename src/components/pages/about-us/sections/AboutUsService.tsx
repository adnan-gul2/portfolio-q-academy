import AboutServiceItem from "../components/AboutServiceItem";

const services = [
    {
        id: "01",
        title: "Website Design",
        desc: "Beautiful, responsive websites designed specifically for Quran academies and Islamic schools.",
    },
    {
        id: "02",
        title: "Student Management",
        desc: "Complete enrollment, attendance, and progress tracking systems for Islamic institutions.",
    },
    {
        id: "03",
        title: "Online Learning",
        desc: "Integrated booking and scheduling systems for online Quran classes and Hifz programs.",
    },
    {
        id: "04",
        title: "Donation Portals",
        desc: "Secure online donation and Zakat collection systems to support your academy's mission.",
    },
];

const AboutUsService = () => {
    return (
        <div className="aus-service-area pt-80 px-fade-anim">
            <div className="container container-1550">
                <div className="row">

                    {/* Left Title */}
                    <div className="col-lg-4">
                        <div className="aus-service-subtitle-box">
                            <span className="px-section-subtitle">QURAN ACADEMY SOLUTIONS</span>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="col-lg-8">
                        <div className="aus-service-content-wrap">

                            {/* Header Row */}
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="aus-service-content">
                                        <label className="pl-20">Services</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="aus-service-content">
                                        <label>Info</label>
                                    </div>
                                </div>
                            </div>

                            {/* Service Items */}
                            {services.map((item) => (
                                <AboutServiceItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsService;