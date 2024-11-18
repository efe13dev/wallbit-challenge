export const getCurrentDate = () => {
  const date = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });

  const time = new Date().toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return `${date} - ${time}`;
};
