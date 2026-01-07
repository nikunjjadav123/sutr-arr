import { DAY_PHASES } from "../constants/dayPhases";

export function getDayPhase(date) {
  const hour = date.getHours();

  return DAY_PHASES.find(
    phase => hour >= phase.start && hour < phase.end
  )?.name || "";
}
