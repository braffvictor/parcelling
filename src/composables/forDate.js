export function formatDate(format) {
  const now = new Date();

  // Get time in 12-hour HH:MM AM/PM format
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const amOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert hours to 12-hour format
  const time = `${hours}:${minutes} ${amOrPm}`;

  // Get date in DD/MM/YY format
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const year = now.getFullYear().toString().slice(-2);
  const date = `${format ? month : day}/${format ? day : month}/${year}`;

  return {
    date: `${time}, ${date}`,
  };
}
