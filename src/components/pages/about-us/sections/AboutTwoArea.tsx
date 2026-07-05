import { SmartLink } from "@/components/common";

const AboutTwoArea = () => {
    return (
        <div className="px-inner-about-1-style pt-120 pb-80">
            <div className="container container-1550">
                <div className="row">
                    <div className="col-xl-9">
                        <div className="px-inner-about-1-top mb-70 px-fade-anim">
                            <p>
                                QuranWeb Studio delivers{" "}
                                <span>
                                    premium, purpose-built websites exclusively for Quran academies and Islamic institutions.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="px-inner-about-1-video">
                            <video loop muted autoPlay playsInline>
                                <source src="https://html.aqlova.com/videos/pixora/step-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="px-inner-about-1-content">
                            <div className="px-fade-anim">
                                <p className="mb-20">
                                    Our approach is simple: we focus on
                                    functionality, accessibility, and Islamic aesthetics, ensuring that
                                    every website serves the unique needs of Quran academies.
                                </p>
                            </div>
                            <div className="px-fade-anim">
                                <p className="fw-400 mb-40">
                                    We understand the specific requirements of Islamic education institutions—from student enrollment systems to online class scheduling, teacher profiles to donation portals. Our solutions help Quran academies connect with students and families worldwide, making quality Islamic education accessible to everyone.
                                </p>
                            </div>
                            <div className="px-fade-anim">
                                <SmartLink className="px-btn-black" href="/portfolio-1">Our Portfolio</SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTwoArea;