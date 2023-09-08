export const parseDate = (date) => {
  const newDate = new Date(date);
  return `on ${newDate.toLocaleDateString()}, at ${newDate.toLocaleTimeString()}`
};