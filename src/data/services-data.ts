import { ServiceItemDT } from "@/types/service-dt";

export const servicesData: ServiceItemDT[] = [
    {
        id: 1,
        keyValue: "01",
        title: "Quran Academy Website Design",
        image: "/assets/img/service/service-1.jpg",
        description: `Beautiful, conversion-optimized websites designed specifically for Quran academies and Islamic schools.`,
        categories: [
            "Responsive Design",
            "Islamic Aesthetics",
            "Fast Loading",
            "Mobile-First",
        ],
    },
    {
        id: 2,
        keyValue: "02",
        title: "Student Admission Systems",
        image: "/assets/img/service/service-2.jpg",
        description: `Streamlined enrollment systems that make it easy for students to register and join your academy.`,
        categories: [
            "Online Registration",
            "Payment Integration",
            "Auto-Responses",
            "CRM Integration",
        ],
    },
    {
        id: 3,
        keyValue: "03",
        title: "Online Class Booking",
        image: "/assets/img/service/service-3.jpg",
        description: `Intelligent booking systems for scheduling Quran classes with qualified teachers worldwide.`,
        categories: [
            "Teacher Calendar",
            "Timezone Support",
            "Automated Reminders",
            "Video Integration",
        ],
    },
    {
        id: 4,
        keyValue: "04",
        title: "Teacher Profile Management",
        image: "/assets/img/service/service-4.jpg",
        description: `Professional teacher profile pages showcasing qualifications, expertise, and availability.`,
        categories: [
            "Profile Design",
            "Availability Calendar",
            "Student Reviews",
            "Verification Badges",
        ],
    },

    //design studio service data start
    {
        id: 5,
        title: "Branding",
        image: "/assets/img/service/service-2-1.jpg",
        description: `We create impactful brand
identities that differentiate your
business and connect with
your audience.`,
        active: false,
    },
    {
        id: 6,
        title: "Development",
        image: "/assets/img/project/project-1.jpg",
        description: `We create impactful brand
identities that differentiate your
business and connect with
your audience.`,
        active: true,
    },
    {
        id: 7,
        title: "Design support",
        image: "/assets/img/project/project-2.jpg",
        description: `We create impactful brand
identities that differentiate your
business and connect with
your audience.`,
        active: false,
    },
    {
        id: 8,
        title: "Websites",
        image: "/assets/img/project/project-3.jpg",
        description: `We create impactful brand
identities that differentiate your
business and connect with
your audience.`,
        active: false,
    },
    //design studio service data end
    //digital studio service data start
    {
        id: 9,
        title: "Development",
        image: "/assets/img/update/service/service-3/st-service-1.jpg",
        description: "Building scalable, high-performance web and mobile applications.",
        categories: [
            "UX Design",
            "User Testing",
            "Product Prototype",
            "Mobile UI",
            "Web app design",
        ],
    },
    {
        id: 10,
        title: "Marketing",
        image: "/assets/img/update/service/service-3/st-service-2.jpg",
        description: "Driving growth through strategic digital marketing and branding.",
        categories: [
            "UX Design",
            "User Testing",
            "Product Prototype",
            "Mobile UI",
            "Web app design",
        ],
    },
    {
        id: 11,
        title: "Graphics",
        image: "/assets/img/update/service/service-3/st-service-3.jpg",
        description: "Creating visually compelling designs that elevate brand identity.",
        categories: [
            "UX Design",
            "User Testing",
            "Product Prototype",
            "Mobile UI",
            "Web app design",
        ],
    },
    {
        id: 12,
        title: "Technology",
        image: "/assets/img/update/service/service-3/st-service-4.jpg",
        description: "Leveraging modern technologies to deliver innovative solutions.",
        categories: [
            "UX Design",
            "User Testing",
            "Product Prototype",
            "Mobile UI",
            "Web app design",
        ],
    },
    //digital studio service data end
];

// service-2 inner service data start
export const servicesNavItems = [
    "Website Design",
    "Student Systems",
    "Class Booking",
    "SEO & Optimization",
];

export const innerServices = [
    {
        id: 1,
        title: "Website Design",
        descriptions: [
            "Beautiful, conversion-focused websites designed exclusively for Quran academies. Our designs reflect Islamic aesthetics while maintaining modern functionality.",
        ],
        categories: [
            "Responsive Design",
            "Islamic Aesthetics",
            "Mobile-First",
            "Fast Loading",
            "Accessibility",
        ],
        images: [
            "/assets/img/service/inner-service/service-1.jpg",
            "/assets/img/service/inner-service/service-2.jpg",
        ],
    },
    {
        id: 2,
        title: "Student Systems",
        descriptions: [
            "Complete student management systems including enrollment, progress tracking, and communication tools. Help your students succeed with intuitive dashboards.",
            "From registration to graduation, track every student journey with our comprehensive management solutions.",
        ],
        categories: [
            "Online Registration",
            "Progress Tracking",
            "Student Dashboard",
            "Parent Portal",
            "Communication Tools",
            "Payment Processing",
        ],
        images: [
            "/assets/img/service/inner-service/service-3.jpg",
            "/assets/img/service/inner-service/service-4.jpg",
        ],
    },
    {
        id: 3,
        title: "Class Booking",
        descriptions: [
            "Intelligent booking systems that handle timezone differences and automate scheduling. Students can book classes with their preferred teachers effortlessly.",
            "Automated reminders, calendar sync, and seamless video integration for online Quran classes.",
        ],
        categories: [
            "Teacher Calendar",
            "Timezone Support",
            "Automated Reminders",
            "Video Integration",
            "Booking Management",
            "Availability Sync",
        ],
        images: [
            "/assets/img/service/inner-service/service-5.jpg",
            "/assets/img/service/inner-service/service-6.jpg",
        ],
    },
    {
        id: 4,
        title: "SEO & Optimization",
        descriptions: [
            "Get found by more students with our specialized SEO services for Quran academies. We understand the Islamic education market and optimize accordingly.",
        ],
        categories: [
            "Local SEO",
            "Technical SEO",
            "Speed Optimization",
            "Content Strategy",
        ],
        images: [
            "/assets/img/service/inner-service/service-7.jpg",
            "/assets/img/service/inner-service/service-8.jpg",
        ],
    },
];