import { MenuItem } from "@/types/menu-dt";

export const lightMenu: MenuItem[] = [
  {
    id: 1,
    type: "dropdown",
    label: "Home",
    href: "/",
    links: [
      { label: "Home", href: "/" },
    ],
  },

  {
    id: 2,
    type: "dropdown",
    label: "About Us",
    href: "/about-us",
    links: [
      { label: "About Us", href: "/about-us" },
    ],
  },

  {
    id: 3,
    type: "dropdown",
    label: "Services",
    href: "#",
    links: [
      { label: "All Services", href: "/service-1" },
      { label: "Quran Academy Website Design", href: "/service-1" },
      { label: "Student Admission Systems", href: "/service-1" },
      { label: "Online Class Booking", href: "/service-1" },
      { label: "LMS Integration", href: "/service-1" },
    ],
  },

  {
    id: 4,
    type: "dropdown",
    label: "Portfolio",
    href: "#",
    links: [
      { label: "Our Projects", href: "/portfolio-1" },
      { label: "Quran Academy Websites", href: "/portfolio-1" },
      { label: "Islamic School Projects", href: "/portfolio-1" },
    ],
  },

  {
    id: 5,
    type: "dropdown",
    label: "Contact",
    isLastMenu: true,
    href: "/contact-us",
    links: [
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
];
