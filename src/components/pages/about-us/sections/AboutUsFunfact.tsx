import AnimatedCounterTwo from "@/components/shared/MetricsCounter/AnimatedCounterTwo";

const funfacts = [
    {
        id: 1,
        end: 150,
        suffix: "+",
        label: "Quran Academies Served",
        delay: ".3",
    },
    {
        id: 2,
        end: 8,
        suffix: "+",
        label: "Years Serving Islamic Education",
        delay: ".5",
    },
    {
        id: 3,
        end: 200,
        suffix: "+",
        label: "Websites Launched",
        delay: ".7",
    },
    {
        id: 4,
        end: 97,
        suffix: "%",
        label: "Academies Satisfied",
        delay: ".8",
    },
];
const AboutUsFunfact = () => {
    return (
        <div className="ar-funfact-area px-funfact-inner-style pb-100 px-fade-anim">
            <div className="container">
                <div className="row">
                    {funfacts.map((item) => (
                        <div className="col-xl-3 col-lg-4 col-sm-6" key={item.id}>
                            <div className="ar-funfact-item mb-45 tp_fade_anim"
                                data-delay={item.delay}
                            >
                                <h4>
                                    <AnimatedCounterTwo min={0} max={item.end} />
                                    {item.suffix}
                                </h4>
                                <span>{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUsFunfact;