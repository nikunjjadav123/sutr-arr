/**
 * Core date helpers
 * Basic utilities used by other date modules
 */

/**
 * Convert input to Date safely
 * @param {Date|string|number} value
 */
export function toDate(value) {
  if (value instanceof Date) {
    return new Date(value.getTime()); // clone
  }

  const date = new Date(value);
  return isNaN(date.getTime()) ? null : date;
}


/**
 * Remove time part from date
 * Useful for date-only comparison
 */
export function normalizeDate(date) {
  const d = new Date(date);

  return new Date(Date.UTC(
    d.getUTCFullYear(),
    d.getUTCMonth(),
    d.getUTCDate()
  ));
}

