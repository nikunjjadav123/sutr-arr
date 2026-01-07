export function formatWeekday(date) {
  return date.toLocaleDateString("en-US", { weekday: "long" });
}

export function formatDateWithPhase(date, phase) {
  return `${date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  })}, ${phase}`;
}
