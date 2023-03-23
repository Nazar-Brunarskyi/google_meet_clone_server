export function normaliseName(name: string) {
  return name
    .split(' ')
    .join('%20');
}