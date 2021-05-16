import React from 'react';

const Project = ({data}) => {
    const renderProjectSkills = (list) => {
        const skillList = list.split(', ');
        return skillList.map((skill) => {
            return <span>{skill}</span>
        });
    };

    const renderCardProject = data.map((project, index) => {
        return (
            <div className="col-lg-6 mb-4 projects__card" key={index}>
                <div className="projects__image-container">
                    <a href={project.link}>
                        <img className="w-100 projects__image" src={`${window.imagePath}/${project.screenshot}`} alt="project screenshot" />

                        <div className="projects__image-header">
                            <h4>{project.name}</h4>
                            <div className="projects__image-header--tech">
                                {renderProjectSkills(project.tech_list)}
                            </div>
                        </div>
                    </a>
                </div>

                <div className="mb-4 projects__details">
                    <div>
                        <p>
                            {project.description}
                        </p>
                        <div className="projects__details-social-media">
                                    <span className="me-3"><a href={project.link}><img width="25" src="./images/link.svg"
                                                                            alt="link" /></a></span>
                            <span className="me-3"><a href={project.github_link}><img width="25" src="./images/github-project.svg"
                                                                    alt="github" /></a></span>
                        </div>
                    </div>
                </div>

            </div>
        );
    });

    return (
        <div className="row justify-content-center projects" data-aos="fade-up" data-aos-delay="50"
             data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div className="col-lg-12 pt-small-5 pb-small-5 pt-10 pb-20">
                <div className="section-tags">
                    <div id="projects"></div>
                </div>
                <h2 className="tan mb-4">Projects</h2>
                <div className="row">
                    {renderCardProject}
                </div>
            </div>
        </div>
    );
};

export default Project;