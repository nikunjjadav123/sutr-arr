/**
 * Date range utilities
 * Very useful for calendars, charts, reports
 */

import { normalizeDate } from './core.js';

/**
 * Create an array of date strings between two dates
 */
export function rangeDates(start, end) {
  const result = [];

  let current = new Date(start + "T00:00:00Z");
  const last = new Date(end + "T00:00:00Z");

  while (current < last) {
    result.push(current.toISOString().slice(0, 10));
    current.setUTCDate(current.getUTCDate() + 1);
  }

  return result;
}
