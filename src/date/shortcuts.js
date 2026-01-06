/**
 * Human-friendly date shortcuts
 * These improve readability and intent
 */

import { toDate } from './core.js';

/** Return today's date */
export function today() {
  return toDate(new Date());
} 

/** Return tomorrow's date */
export function tomorrow() {
  const d = new Date();
  d.setDate(d.getDate()+1);
  return d;
}

/** Return yesterday's date */
export function yesterday() {
  const d = new Date();
  d.setDate(d.getDate()-1);
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
