// Create a formatter for "May 18, 2024"
const formatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});
  
export function formatDate(date: Date) {
  return formatter.format(date);
}