import React from 'react';
import { useTranslation } from 'react-i18next';
import { personalData } from '../data/personalData';
import { calculateExperience } from '../utils/dateUtils';
import portraitImg from '../assets/portrait.jpeg';

const About: React.FC = () => {
  const { t } = useTranslation();
  const experienceYears = calculateExperience(personalData.startDate);

  return (
    <main id="about">
      <h1 className="lg-heading">
        {t('about.title.first')} <span className="text-secondary">{t('about.title.second')}</span>
      </h1>
      <h2 className="small-heading">{t('about.subtitle')}</h2>
      <div className="about-info">
        <img src={portraitImg} alt="Portrait" className="bio-img" />
        <div className="bio">
          <h3 className="text-secondary bio-title">{t('about.bio.title')}</h3>
          <p>
            {t('about.bio.content', { years: experienceYears })}
          </p>
        </div>

        <div className="job job-1">
          <h3 className="me-info">{t('about.skills')}</h3>
          <div id="Skills">
            {personalData.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <h4 className="skill-header">{skill.header}</h4>
                <p className="skill-content">{skill.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="job job-2">
          <h3 className="me-info">{t('about.workExperience')}</h3>
          <div id="Jobs">
            {personalData.jobs.map((job, index) => (
              <div key={index} className="job-item">
                <h4 className="job-title">{job.title}</h4>
                <h5 className="company-name">{job.company}</h5>
                <p className="job-period">{job.period}</p>
                {job.description && <p className="job-description">{job.description}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="job job-3">
          <h3 className="me-info">{t('about.education')}</h3>
          <div id="Edu">
            {personalData.education.map((edu, index) => (
              <div key={index} className="education-item">
                <h4 className="institution-name">{edu.institution}</h4>
                <p className="education-period">{edu.period}</p>
                {edu.description && <p className="education-description">{edu.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
