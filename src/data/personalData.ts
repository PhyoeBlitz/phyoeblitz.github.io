export interface PersonalInfo {
  startDate: string;
  skills: Skill[];
  jobs: Job[];
  education: Education[];
}

export interface Skill {
  header: string;
  content: string;
}

export interface Job {
  title: string;
  company: string;
  period: string;
  description?: string;
}

export interface Education {
  institution: string;
  period: string;
  description?: string;
}

export const personalData: PersonalInfo = {
  startDate: '2020-04-01',
  skills: [
    {
      header: "English Speaking & Writing",
      content: "From a young age, I've been immersed in the English language, beginning my journey in elementary school. Over the years, I've honed my skills and now confidently utilize English in my day-to-day life. Whether it's for work or leisure, my proficiency in English allows me to communicate effectively and navigate through various situations with ease."
    },
    {
      header: "Japanese Speaking & Writing",
      content: "I passed the Japanese Language Proficiency Test N3 in March of 2017"
    }
  ],
  jobs: [
    {
      title: "Software Engineer",
      company: "株式会社 J-Tech",
      period: "04/2020-09/2023",
      description: "I worked as a Software Engineer developing applications and systems."
    },
    {
      title: "Software Engineer",
      company: "axrossroad株式会社",
      period: "10/2023-12/2024",
      description: "Continued my career as a Software Engineer working on various projects."
    },
    {
      title: "Software Engineer",
      company: "株式会社YTT Links",
      period: "01/2025-now",
      description: "Currently working as a Software Engineer in Tokyo, developing innovative solutions."
    }
  ],
  education: [
    {
      institution: "Sun-A Japanese Language School",
      period: "4/2016-3/2018",
      description: "Japanese language studies and cultural immersion"
    },
    {
      institution: "Sundai Electronic Information & Business College",
      period: "4/2018-3/2020",
      description: "Information Technology and Business studies"
    }
  ]
};
