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
  let current = normalizeDate(start);
  const last = normalizeDate(end);

  while (current <= last) {
    result.push(current.toISOString().split('T')[0]);
    current.setDate(current.getDate() + 1);
  }

  return result;
}
