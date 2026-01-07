import {
  toDate,
  diffInMinutes,
  diffInDays,
  isSameDay
} from "./utils/dateHelpers.js";
import { getDayPhase } from "./utils/phaseHelpers.js";
import { formatWeekday, formatDateWithPhase } from "./utils/formatters.js";
import { THRESHOLDS } from "./constants/thresholds.js";

export function humanSmartDiff(input, options = {}) {
  const now = toDate(options.now || new Date());
  const date = toDate(input);

  const minutesDiff = diffInMinutes(date, now);
  const daysDiff = diffInDays(date, now);
  const phase = getDayPhase(date);

  // 1️⃣ Just now
  if (minutesDiff <= THRESHOLDS.JUST_NOW_MINUTES) {
    return "just now";
  }

  // 2️⃣ Same day
  if (isSameDay(date, now)) {
    if (minutesDiff < 60) {
      return "earlier today";
    }

    if (minutesDiff < THRESHOLDS.RECENT_HOURS * 60) {
      return `this ${phase}`;
    }

    return "earlier today";
  }

  // 3️⃣ Yesterday
  if (daysDiff === 1) {
    return `yesterday ${phase}`;
  }

  // 4️⃣ This week
  if (daysDiff < THRESHOLDS.WEEK_DAYS) {
    return `${formatWeekday(date)} ${phase}`;
  }

  // 5️⃣ Fallback
  return formatDateWithPhase(date, phase);
}

export { getDayPhase };
