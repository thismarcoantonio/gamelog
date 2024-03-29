export function formatDate(value: string) {
  const date = new Date(value);
  return Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(date);
}
