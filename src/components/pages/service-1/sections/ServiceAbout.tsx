import { SmartLink } from "@/components/common";
import { TextArrowIcon } from "@/svg";

const ServiceAbout = () => {
    return (
        <div className="px-about-4-area px-about-5-style px-inner-service-2-style pt-120 pb-70">
            <div className="container container-1550">
                <div className="row">
                    <div className="col-xl-10">
                        <div className="px-about-4-title-box mb-55">
                            <h3 className="px-section-title ff-inter px-fade-anim">
                                DEDICATED TO EMPOWERING <br />
                                QURAN ACADEMIES WITH MODERN <br />
                                WEB SOLUTIONS THAT INSPIRE <br />
                                LEARNING AND GROWTH.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-xl-5 col-xl-5">
                        <div className="px-about-4-content">
                            <div className="px-fade-anim">
                                <p>
                                    <span>We specialize in building beautiful,</span> functional <br />
                                    websites tailored specifically for Quran academies <br />
                                    and Islamic educational institutions worldwide.
                                </p>
                            </div>
                            <div className="px-fade-anim">
                                <SmartLink className="px-about-4-link px-doubble-effect" href="/about-us">
                                    <span>Discover more</span>
                                    <i>
                                        <TextArrowIcon />
                                        <TextArrowIcon />
                                    </i>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAbout;