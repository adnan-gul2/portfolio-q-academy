"use client";
import ServiceTextSlideItem from "../components/ServiceTextSlideItem";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { text_slider_active } from "@/constant";

const sliderItems = [
    "Websites for Quran Academies",
    "Student Management Systems",
    "Online Class Booking",
    "Islamic School Solutions",
    "Websites for Quran Academies",
    "Student Management Systems",
    "Online Class Booking",
    "Islamic School Solutions",
];

const ServiceTextSlider = () => {
    return (
        <div className="px-text-slider-area">
            <div
                className="px-text-slider-wrap px-text-slider-style-5 pt-30"
                style={{ backgroundColor: "#1a5c45" }}
            >
                <div className="px-text-slider-active-2 tp-slider-transtion">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        {...text_slider_active}
                    >
                        {sliderItems.map((item, index) => (
                            <SwiperSlide key={`${item}-${index}`}>
                                <ServiceTextSlideItem item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="px-line-shape mt-10">
                {Array.from({ length: 5 }).map((_, index) => (
                    <span key={`dot-${index}`}></span>
                ))}
            </div>
        </div>
    );
};

export default ServiceTextSlider;