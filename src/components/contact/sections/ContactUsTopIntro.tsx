import { BigArrowIcon, ScrollDownArrowIcon } from "@/svg/ArrowIcons";
import { ScrollLink } from "../../common/ScrollLink";
import Image from "next/image";

const ContactUsTopIntro = () => {
    return (
        <div className="tp-contact-us-ptb pt-200 p-relative">
            <div className="container container-1230">
                <div className="tp-contact-us-wrap-ptb">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="tp-contact-us-heading tp_fade_anim" data-delay=".3">
                                <div className="tp-contact-us-title-box d-flex align-items-center mb-20">
                                    <span className="tp-section-subtitle pre tp_fade_anim">Get in touch</span>
                                    <div>
                                        <BigArrowIcon />
                                    </div>
                                </div>
                                <h3 className="tp-section-title pb-30">Let us build your{" "}
                                    <span className="shape-1">
                                        <Image width={65} height={65} src="/assets/img/contact/title-shape-1.webp" alt="shape" />
                                    </span> <br />Quran Academy website
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-8">
                            <div className="tp-contact-us-text tp_fade_anim">
                                <p className="m-0">Book a free consultation and discover how we can transform <br /> your Quran academy's online presence to attract more students.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-contact-us-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tp-contact-us-text smooth">
                                <ScrollLink className="px-line-lr" target="#down">
                                    <p>
                                      <ScrollDownArrowIcon/>{" "}
                                       Scroll to explore
                                    </p>
                                </ScrollLink>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tp-contact-us-text d-none d-md-block text-md-end">
                                <p>Free Consultation Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsTopIntro;