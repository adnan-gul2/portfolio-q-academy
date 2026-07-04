
import { portfolioProjects } from "@/data/portfolio-projects";
import ProjectSingleCard from "../../startup-agency/components/ProjectSingleCard";
import { PlusIcon } from "@/svg";

const QuranAcademyProject = () => {
    const displayProjectData = portfolioProjects.slice(0, 6);

    return (
        <section className="px-project-area pt-100 pb-130">
            <div className="container container-1550">
                <div className="px-project-title-wrap mb-80">
                    <div className="row">
                        <div className="col-xl-3">
                            <span className="px-section-subtitle pt-40">
                                <i>
                                    <PlusIcon />
                                </i>
                                Our Portfolio
                            </span>
                        </div>

                        <div className="col-xl-9">
                            <div className="px-project-title-box">
                                <h3 className="px-section-title mb-25 text-effect">
                                    <span>Quran Academy</span>
                                    <span>Websites</span>
                                </h3>
                                <p>
                                    We have helped Quran academies worldwide establish<br />
                                    their online presence and increase student enrollments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-20">
                    {displayProjectData.map((project) => (
                        <ProjectSingleCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuranAcademyProject;
