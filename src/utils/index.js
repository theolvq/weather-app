export const getTime = (time) =>
  new Date(time * 1000).toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });

export const getDate = (time) =>
  new Date(time * 1000).toLocaleDateString(undefined, {
    day: '2-digit',
    month: 'long',
  });

export const capitalizeFirstLetter = (str) =>
  `${str[0].toUpperCase()}${str.slice(1)}`;

export const isToday = (currentDayInSeconds, dateInSeconds) =>
  new Date(currentDayInSeconds * 1000).toDateString() ===
  new Date(dateInSeconds * 1000).toDateString();
