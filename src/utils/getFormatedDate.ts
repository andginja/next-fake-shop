export function getLastMonthDate() {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - 1);
  const year = currentDate.getFullYear();
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const day = ("0" + currentDate.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
}

export function getLastYearDate() {
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - 1);
  const year = currentDate.getFullYear();
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const day = ("0" + currentDate.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
}
