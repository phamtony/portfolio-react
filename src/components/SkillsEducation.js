import React from 'react';

const SkillsEducation = ({data}) => {
    const renderSkills = (list) => {
        const skillList = list.split(',');
        return skillList.join(' | ');
    };

    const renderEducationList = data.education.map((ed, index) => {
        return (
            <div key={index}>
                <h6 className="mb-0">{ed.school} | {ed.time}</h6>
                <p>{ed.degree}</p>
            </div>
        );
    });

    return (
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"
             data-aos-easing="ease-in-out">
            <div className="col-lg-12 pt-small-5 pb-small-5 pt-10 pb-20">
                <div className="section-tags">
                    <div id="skills"></div>
                </div>
                <div className="row">

                    <div className="col-lg-6 pb-4 pb-lg-0 pe-lg-4">
                        <h2 className="tan mb-4">Skills</h2>
                        <h6 className="mb-0"><strong>Language</strong></h6>
                        <p>{renderSkills(data.skills.language)}</p>

                        <h6 className="mb-0"><strong>Framework/Library</strong></h6>
                        <p>{renderSkills(data.skills.framework_library)}</p>

                        <h6 className="mb-0"><strong>Database</strong></h6>
                        <p>{renderSkills(data.skills.database)}</p>

                        <h6 className="mb-0"><strong>Other</strong></h6>
                        <p>{renderSkills(data.skills.misc)}</p>
                    </div>

                    <div className="col-lg-6 ps-lg-4">
                        <h2 className="tan mb-4">Education</h2>
                        {renderEducationList}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsEducation;