import StartupAgencyServiceItem from "../../startup-agency/components/StartupAgencyServiceItem";
import SmartLink from "@/components/common/SmartLink";
import { PlusIcon } from "@/svg";

const quranAcademyServices = [
  {
    id: 1,
    keyValue: "01",
    title: "Quran Academy Website Design",
    description: "Beautiful, conversion-optimized websites designed specifically for Quran academies.",
    categories: ["Responsive Design", "Islamic Aesthetics", "Fast Loading", "Mobile-First"],
  },
  {
    id: 2,
    keyValue: "02",
    title: "Student Enrollment Systems",
    description: "Streamlined enrollment systems that make it easy for students to register and join your academy.",
    categories: ["Online Registration", "Payment Integration", "Auto-Responses", "CRM Integration"],
  },
  {
    id: 3,
    keyValue: "03",
    title: "Online Class Booking",
    description: "Intelligent booking systems for scheduling Quran classes with qualified teachers.",
    categories: ["Teacher Calendar", "Timezone Support", "Automated Reminders", "Video Integration"],
  },
  {
    id: 4,
    keyValue: "04",
    title: "LMS Integration",
    description: "Learning management systems tailored for Quran education with progress tracking.",
    categories: ["Progress Tracking", "Student Dashboard", "Course Management", "Certificates"],
  },
];

const QuranAcademyService = () => {
  return (
    <div className="px-service-area service-skew-anim px-service-bg pt-120 pb-140 z-index-2 tp-section-bg">
      <div className="container container-1550">

        <div className="px-service-title-wrap mb-60">
          <div className="row">
            <div className="col-xl-3">
              <div className="px-service-subtitle-box pt-40">
                <span className="px-section-subtitle white-style">
                  <i><PlusIcon strokeColor="currentcolor" /></i>
                  Our Services
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="px-service-title-box d-flex justify-content-between align-items-center">
                <h3 className="px-section-title white-style mb-0 text-effect">
                  Services.
                </h3>
                <SmartLink className="px-btn-white" href="/service-1">
                  View All Services
                </SmartLink>
              </div>
            </div>
          </div>
        </div>

        <div className="px-service-accordion-wrap">
          <div className="accordion" id="accordionExample">
            {quranAcademyServices.map((service, index) => (
              <div key={service.id} className="px-service-accordion-item">
                <div className="accordion-item">
                  <h2 className="accordion-header" id={`heading${service.id}`}>
                    <button
                      className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${service.id}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${service.id}`}
                    >
                      <span className="px-service-number">{service.keyValue}</span>
                      <span className="px-service-title-text">{service.title}</span>
                    </button>
                  </h2>
                  <div
                    id={`#collapse${service.id}`}
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    aria-labelledby={`heading${service.id}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="px-service-desc">{service.description}</p>
                      <div className="px-service-tags">
                        {service.categories.map((cat, idx) => (
                          <span key={idx} className="px-service-tag">{cat}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuranAcademyService;
