import { TextArrowIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const serviceData = [
    {
        id: 1,
        icon: "/assets/img/service/icon/icon-1.png",
        title: "Quran Academy Websites",
        desc: `Beautiful, responsive website design
tailored specifically for Quran academies
and Islamic schools.`,
        link: "/service-1",
    },
    {
        id: 2,
        icon: "/assets/img/service/icon/icon-2.png",
        title: "Student Management",
        desc: `Complete enrollment and attendance
systems for managing Quran students
and tracking progress.`,
        link: "/service-1",
    },
    {
        id: 3,
        icon: "/assets/img/service/icon/icon-3.png",
        title: "Online Booking",
        desc: `Integrated scheduling systems for
online Quran classes and Hifz
program enrollments.`,
        link: "/service-1",
    },
    {
        id: 4,
        icon: "/assets/img/service/icon/icon-4.png",
        title: "Donation Portals",
        desc: `Secure online donation and Zakat
collection systems to support your
academy's mission.`,
        link: "/service-1",
    },
];

const ServiceOfferings = () => {
    return (
        <div className="px-service-5-area">
            <div className="container container-1550">
                <div className="row">
                    {serviceData.map((item) => (
                        <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                            <div className="px-service-5-item mb-25">
                                <div className="px-service-5-icon">
                                    <Image className="img-fluid w-auto h-auto" width={90} height={60} src={item.icon} alt="Service icon" />
                                </div>

                                <div className="px-service-5-content">
                                    <h4 className="px-service-5-title">
                                        <Link className="px-line-lr" href={item.link}>
                                            {item.title}
                                        </Link>
                                    </h4>

                                    <p>{item.desc}</p>
                                </div>

                                <div className="px-service-5-link">
                                    <Link className="px-doubble-effect" href={item.link}>
                                        View details
                                        <i>
                                            <TextArrowIcon />
                                            <TextArrowIcon />
                                        </i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceOfferings;