/**
 * Human-friendly date shortcuts
 * These improve readability and intent
 */

import { toDate } from './core.js';

/** Return today's date */
export function today() {
  const d = new Date();
  return new Date(Date.UTC(
    d.getUTCFullYear(),
    d.getUTCMonth(),
    d.getUTCDate()
  ));
}

export function tomorrow() {
  const d = today();
  d.setUTCDate(d.getUTCDate() + 1);
  return d;
}

export function yesterday() {
  const d = today();
  d.setUTCDate(d.getUTCDate() - 1);
  return d;
}


/** Add days to a Date (considers weekends)*/
export function addDays(date, days) {
  const d = toDate(date);
  d.setDate(d.getDate() + days);
  return d;
}

/**
 * Subtract days from a date (considers weekends)
 */
export function subDays(date, days) {
  const d = toDate(date);
  d.setDate(d.getDate() - days);
  return d;
}
