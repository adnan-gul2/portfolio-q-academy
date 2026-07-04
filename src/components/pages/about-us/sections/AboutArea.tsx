import { SmartLink } from "@/components/common";

const AboutArea = () => {
    return (
        <div className="px-about-3-area px-inner-about-style pt-120 pb-150">
            <div className="container container-1750">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="px-about-3-text text-center">
                            <h2 className="px-about-3-bigtext">About QuranWeb Studio</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container container-1550">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="px-about-3-subtitle-box">
                            <span className="px-section-subtitle">About us</span>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="px-about-3-content">
                            <p>
                                We are a <span>specialized</span> web studio <br />
                                building premium websites exclusively for <br />
                                Quran academies and <span>Islamic education</span> <br />
                                institutions worldwide.
                            </p>
                            <SmartLink className="px-btn-black" href="/about-us">
                                More About Us
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutArea;