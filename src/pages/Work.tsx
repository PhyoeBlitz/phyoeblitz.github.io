import React from 'react';
import { useTranslation } from 'react-i18next';
import Project1Img from '../assets/Project1.png';
import Project2Img from '../assets/Project2.png';
import Project3Img from '../assets/Project3.png';
import Project4Img from '../assets/Project4.png';

interface Project {
  title: string;
  image: string;
  projectUrl: string;
  githubUrl: string;
}

const Work: React.FC = () => {
  const { t } = useTranslation();
  const projects: Project[] = [
    {
      title: "City Gallery",
      image: Project1Img,
      projectUrl: "https://phyoeblitz.github.io/CityGallery/",
      githubUrl: "https://github.com/PhyoeBlitz/CityGallery/"
    },
    {
      title: "Kanji Quiz",
      image: Project2Img,
      projectUrl: "https://phyoeblitz.github.io/KANJI-QUIZ/",
      githubUrl: "https://github.com/PhyoeBlitz/KANJI-QUIZ/"
    },
    {
      title: "Addition Machine",
      image: Project3Img,
      projectUrl: "https://phyoeblitz.github.io/Additional-Machine/",
      githubUrl: "https://github.com/PhyoeBlitz/Additional-Machine/"
    },
    {
      title: "Portfolio",
      image: Project4Img,
      projectUrl: "https://phyoeblitz.github.io/",
      githubUrl: "https://phyoeblitz.github.io/"
    },
    {
      title: "Badge Generator",
      image: "https://placehold.co/1598x1356/4287f5/white/png?font=playfair-display&text=Badge%20Generator",
      projectUrl: "https://phyoeblitz.github.io/badge-generate/",
      githubUrl: "https://github.com/PhyoeBlitz/badge-generate/"
    }
  ];

  return (
    <main id="about">
      <h1 className="lg-heading">
        {t('work.title.first')} <span className="text-secondary">{t('work.title.second')}</span>
      </h1>
      <h2 className="small-heading">{t('work.subtitle')}</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="item" key={index}>
            <div className="project-title">{project.title}</div>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <a 
              href={project.projectUrl} 
              className="work-btn btn-light"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fas fa-eye"></i>{t('work.buttons.project')}
            </a>
            <a 
              href={project.githubUrl} 
              className="work-btn btn-dark"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>{t('work.buttons.github')}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Work;
