export interface PersonalInfo {
  startDate: string;
}

// This data is now moved to translation files (i18n/locales/en.json and ja.json)
// Access it using useTranslation hook:
// - Skills: t('about.personalSkills')
// - Jobs: t('about.jobs') 
// - Education: t('about.educationList')

export const personalData: PersonalInfo = {
  startDate: '2020-04-01'
};
