export const calculateExperience = (startDate: string): number => {
  const today = new Date();
  const start = new Date(startDate);
  const years = today.getFullYear() - start.getFullYear();
  const months = today.getMonth() - start.getMonth();
  const days = today.getDate() - start.getDate();

  let experience = years;
  if (months < 0 || (months === 0 && days < 0)) {
    experience--;
  }

  return experience;
};
