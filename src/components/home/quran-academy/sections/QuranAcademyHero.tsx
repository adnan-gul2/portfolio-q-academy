
const services = [
  { id: "01", title: "Quran Academy Website Design" },
  { id: "02", title: "Student Enrollment Systems" },
  { id: "03", title: "Online Class Booking" },
  { id: "04", title: "LMS Integration" },
];

const QuranAcademyHero = () => {

  return (
    <div className="px-hero-area px-hero-bg hero-skew-anim z-index-3">
      <div className="ripple-image px-hero-bg-img"
        style={{
          backgroundImage: "url(/assets/img/hero/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}>
      </div>
      <div className="container container-1550">
        <div className="px-hero-title-wrap pb-110">
          <div className="row align-items-end">
            <div className="col-xl-9">
              <div className="px-hero-title-box">
                <span className="px-hero-subtitle px-fade-anim" data-delay=".3">
                  QuranWeb Studio
                </span>

                <h2 className="px-hero-title px-fade-anim" data-delay=".5">
                  Premium Websites<br />
                  for Quran Academies<br />
                  That Convert
                </h2>
              </div>
            </div>

            <div className="col-xl-3">
              <div
                className="px-hero-info-wrap d-flex justify-content-md-end px-fade-anim"
                data-delay=".5"
                data-fade-from="left"
              >
                <div className="px-hero-info">
                  <p>
                    Specialized in Islamic<br /> education websites.
                  </p>

                  <div className="px-hero-video">
                    <video loop muted autoPlay playsInline>
                      <source
                        src="https://html.aqlova.com/videos/pixora/banner-4-1.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-hero-service-wrap d-flex justify-content-between align-items-center">
          {services.map(({ id, title }) => (
            <div key={id} className="px-hero-service-item">
              <span># {id}</span>
              <span>{title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuranAcademyHero;
