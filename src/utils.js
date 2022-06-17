export function calculateAge(birthday) {
  if (birthday) {
    return (
      new Date().getFullYear() - new Date(birthday.slice(-4)).getFullYear()
    );
  }
  return;
}
