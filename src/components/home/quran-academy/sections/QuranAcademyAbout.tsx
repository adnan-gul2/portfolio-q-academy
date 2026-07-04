"use client";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { brand_slider_params } from "@/constant";
import { PlusIcon, TextArrowIcon } from "@/svg";
import Link from "next/link";
import Image from "next/image";

const aboutStats = [
    {
        id: 1,
        value: "50+",
        index: "01",
        title: "Quran Academies Served",
        desc: "We have helped over 50 Quran academies establish their online presence.",
        delay: ".3",
    },
    {
        id: 2,
        value: "200%",
        index: "02",
        title: "Avg Enrollment Increase",
        desc: "Our clients see an average 200% increase in student enrollments.",
        delay: ".5",
    },
    {
        id: 3,
        value: "100%",
        index: "03",
        title: "Client Satisfaction",
        isBrandSlider: true,
        delay: ".7",
    },
];

const brandImages = [
    { id: 1, img: "/assets/img/brand/brand-1.png", width: 126, height: 22 },
    { id: 2, img: "/assets/img/brand/brand-2.png", width: 73, height: 22 },
    { id: 3, img: "/assets/img/brand/brand-3.png", width: 68, height: 17 },
    { id: 4, img: "/assets/img/brand/brand-1.png", width: 126, height: 22 },
    { id: 5, img: "/assets/img/brand/brand-2.png", width: 73, height: 22 },
    { id: 6, img: "/assets/img/brand/brand-3.png", width: 68, height: 17 },
];

const QuranAcademyAbout = () => {
    return (
        <section className="px-about-area about-skew-anim pb-75">
            <div className="container container-1550">
                <div className="row">
                    <div className="col-xl-3">
                        <span className="px-section-subtitle px-about-subtitle-box">
                            <i>
                                <PlusIcon />
                            </i>
                            Why Choose Us
                        </span>
                    </div>

                    <div className="col-xl-9">
                        <div className="px-about-content-wrap">
                            <h4 className="px-about-title mb-55">
                                <span>We build premium websites</span> exclusively<br />
                                for Quran Academies and<br /> Islamic Education institutions.
                            </h4>

                            <div className="row">
                                <div className="offset-xxl-4 col-xxl-6 offset-xl-4 col-xl-8">
                                    <div className="px-about-content mb-70">
                                        <p>
                                            <span>Our focus is on creating beautiful,</span> functional<br />
                                            websites that help Quran academies attract more<br />
                                            students and streamline their operations.
                                        </p>

                                        <Link
                                            href="/about-us"
                                            className="px-about-link px-doubble-effect"
                                        >
                                            <span>Discover more</span>
                                            <i>
                                                <TextArrowIcon />
                                                <TextArrowIcon />
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-about-info-wrap">
                            <div className="row gx-5">
                                {aboutStats.map((item) => (
                                    <div
                                        key={item.id}
                                        className="col-xl-4 col-lg-4 col-md-6"
                                    >
                                        <div
                                            className="px-about-info mb-5 px-fade-anim"
                                            data-delay={item.delay}
                                        >
                                            <div className="px-about-info-head d-flex justify-content-between">
                                                <h4>
                                                    <span>{item.value.replace(/\D/g, "")}</span>
                                                    {item.value.replace(/\d/g, "")}
                                                </h4>
                                                <em>{item.index}</em>
                                            </div>

                                            <div className="px-about-info-body d-flex flex-column justify-content-between">
                                                <h4>
                                                    {item.title.split(" ").map((word, idx) => (
                                                        <span key={idx}>
                                                            {word} {idx === 1 && <br />}
                                                        </span>
                                                    ))}
                                                </h4>

                                                {!item.isBrandSlider ? (
                                                    <p>{item.desc}</p>
                                                ) : (
                                                    <div className="px-about-brand-slider fix pb-25">
                                                        <div className="px-about-brand-active">
                                                            <div className="slide-transtion">
                                                                <Swiper
                                                                    modules={[FreeMode, Autoplay]}
                                                                    {...brand_slider_params}>
                                                                    {brandImages.map((brand) => (
                                                                        <SwiperSlide key={brand.id}>
                                                                            <div className="px-about-brand">
                                                                                <span>
                                                                                    <Image width={brand.width} height={brand.height} src={brand.img} alt="brand logo" />
                                                                                </span>
                                                                            </div>
                                                                        </SwiperSlide>
                                                                    ))}
                                                                </Swiper>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuranAcademyAbout;
