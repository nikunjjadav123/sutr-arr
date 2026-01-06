/**
 * Business-day related helpers
 * Useful for finance, HR, payroll, and dashboards
 */

import { toDate } from './core.js';

/** Check if date is weekend */
export function isWeekend(date) {
  const day = toDate(date).getDay();
  return day === 0 || day === 6;
}

/** Check if date is weekday */
export function isWeekday(date) {
  return !isWeekend(date);
}

/**
 * Add business days (skips weekends)
 */
export function addBusinessDays(date, days) {
  let d = toDate(date);
  let added = 0;

  while (added < days) {
    d.setDate(d.getDate() + 1);
    if (isWeekday(d)) added++;
  }

  return d;
}
