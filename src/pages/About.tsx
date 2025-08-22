import React from 'react';
import { personalData } from '../data/personalData';
import { calculateExperience } from '../utils/dateUtils';
import portraitImg from '../assets/portrait.jpeg';

const About: React.FC = () => {
  const experienceYears = calculateExperience(personalData.startDate);

  return (
    <main id="about">
      <h1 className="lg-heading">
        About <span className="text-secondary">Me</span>
      </h1>
      <h2 className="small-heading">Let me tell you about myself...</h2>
      <div className="about-info">
        <img src={portraitImg} alt="Portrait" className="bio-img" />
        <div className="bio">
          <h3 className="text-secondary bio-title">BIO</h3>
          <p>
            I've been immersed in the world of programming while working in Japan for the past{' '}
            <span id="experienceYears">{experienceYears} years</span>.
            Eager to explore new horizons, I am driven by a thirst for learning and mastering new skills.
            My experience spans across languages such as C# and VBA, and although I've extensively studied Java, HTML, CSS, and Linux, I'm yet to apply them professionally.
            However, I've been nurturing my passion for web development by creating websites as a hobby.
            Additionally, I possess a solid understanding of databases, proficient in both MSSQL and MySQL. My journey is fueled by the enthusiasm to continually grow and innovate within the realm of technology.
          </p>
        </div>

        <div className="job job-1">
          <h3 className="me-info">Skills</h3>
          <div id="Skills">
            {personalData.skills.map((skill, index) => (
              <div key={index}>
                <h3>{skill.header}</h3>
                <p>{skill.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="job job-2">
          <h3 className="me-info">Work</h3>
          <div id="Jobs">
            {personalData.jobs.map((job, index) => (
              <p key={index}>{job}</p>
            ))}
          </div>
        </div>

        <div className="job job-3">
          <h3 className="me-info">Education</h3>
          <div id="Edu">
            {personalData.education.map((edu, index) => (
              <p key={index}>{edu}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
