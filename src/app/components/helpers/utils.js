export const parseDate = (date) => {
  const newDate = new Date(date);
  return `${newDate.toLocaleDateString()}, at ${newDate.toLocaleTimeString()}`
};