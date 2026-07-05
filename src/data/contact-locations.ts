import { ContactLocation } from "@/types/contact-dt";

export const contactLocations: ContactLocation[] = [
  {
    id:1,
    city: "Dubai, UAE",
    email: "info@quranwebstudio.com",
    phone: "+971 4 123 4567",
    image: "/assets/img/contact/contact-us/contact-us-thumb-1.jpg",
    mapLink: "https://www.google.com/maps",
    speed: "1",
  },
  {
    id:2,
    city: "London, UK",
    email: "uk@quranwebstudio.com",
    phone: "+44 20 1234 5678",
    image: "/assets/img/contact/contact-location-2.jpg",
    mapLink: "https://www.google.com/maps",
    speed: ".9",
    isActive: true,
    extraClass: "mt-60",
  },
  {
    id:3,
    city: "Global Remote",
    email: "support@quranwebstudio.com",
    phone: "Available 24/7",
    image: "/assets/img/contact/contact-location-3.jpg",
    mapLink: "https://www.google.com/maps",
    speed: "1",
  },
];