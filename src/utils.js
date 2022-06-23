export function calculateAge(birthday) {
  if (birthday) {
    return (
      new Date().getFullYear() - new Date(birthday.slice(-4)).getFullYear()
    );
  }
  return;
}

export function getKeyByValue(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}
