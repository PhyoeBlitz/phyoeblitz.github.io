export interface PersonalInfo {
  startDate: string;
  skills: Skill[];
  jobs: string[];
  education: string[];
}

export interface Skill {
  header: string;
  content: string;
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
    "axrossroad株式会社",
    "10/2023-12/2024",
    "",
    "株式会社YTT Links",
    "01/2025-now",
    "I'm working as a Software Engineer in Tokyo."
  ],
  education: [
    "Sun-A Japanese language School",
    "4/2016-3/2018",
    "Sundai electronic information & Business College",
    "4/2018-3/2020"
  ]
};
