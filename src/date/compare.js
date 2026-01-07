/**
 * Safe date comparison helpers
 * Avoids timezone bugs
 */

import { normalizeDate } from './core.js';

/** Check if two dates are same day */
export function isSameDay(a, b) {
  return normalizeDate(a).getTime() === normalizeDate(b).getTime();
}

/** Check if a is before b */
export function isBefore(a, b) {
  return normalizeDate(a) < normalizeDate(b);
}

/** Check if a is after b */
export function isAfter(a, b) {
  return normalizeDate(a) > normalizeDate(b);
}

/**
 * Calculate age from date of birth
 */
export function ageFrom(dob) {
  const birth = new Date(dob);
  const today = new Date();

  let age = today.getUTCFullYear() - birth.getUTCFullYear();

  const hasBirthdayPassed =
    today.getUTCMonth() > birth.getUTCMonth() ||
    (today.getUTCMonth() === birth.getUTCMonth() &&
     today.getUTCDate() >= birth.getUTCDate());

  if (!hasBirthdayPassed) age--;

  return age;
}

