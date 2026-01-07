import { SUT_ } from '../src/index';

test('adds days to a date', () => {
  const date = new Date('2025-01-01');
  const result = SUT_.addDays(date, 5);
  expect(result.toISOString().slice(0, 10)).toBe('2025-01-06');
});

test('converts date toDate', () => {
  const date = new Date('2025-01-01');
  const result = SUT_.toDate(date);
  expect(result.toISOString().slice(0, 10)).toBe('2025-01-01');
});

test('removes time and preserves date (UTC)', () => {
  const date = new Date('2025-04-10T18:30:00');
  const result = SUT_.normalizeDate(date);
  expect(result.getUTCHours()).toBe(0);
});

test('Same day or not', () => {
  const result = SUT_.isSameDay('2025-02-09', '2025-02-09');
  expect(result).toBe(true);
});

test('Previous day or not', () => {
  const result = SUT_.isBefore('2025-02-08', '2025-02-09');
  expect(result).toBe(true);
});

test('checks age (fixed system date)', () => {
  // system date = 2026-01-06
  const result = SUT_.ageFrom('1996-03-12');
  expect(result).toBe(29);
});

test('Check if day is weekend', () => {
  const result = SUT_.isWeekend('2026-01-10');
  expect(result).toBe(true);
});

test('Check if day is weekday', () => {
  const result = SUT_.isWeekday('2026-01-12');
  expect(result).toBe(true);
});

test('Add business days to given date', () => {
  const result = SUT_.addBusinessDays('2026-01-12', 5);
  expect(result.toISOString().slice(0, 10)).toBe('2026-01-19');
});

test('Get range to given dates', () => {
  const result = SUT_.rangeDates('2026-01-12', '2026-01-20');
  expect(result).toEqual([
    '2026-01-12',
    '2026-01-13',
    '2026-01-14',
    '2026-01-15',
    '2026-01-16',
    '2026-01-17',
    '2026-01-18',
    '2026-01-19'
  ]);
});

test('Return today date (mocked)', () => {
  const result = SUT_.today();
  expect(result.toISOString().slice(0, 10)).toBe('2026-01-06');
});

test('Return tomorrow date (mocked)', () => {
  const result = SUT_.tomorrow();
  expect(result.toISOString().slice(0, 10)).toBe('2026-01-07');
});

test('Return yesterday date (mocked)', () => {
  const result = SUT_.yesterday();
  expect(result.toISOString().slice(0, 10)).toBe('2026-01-05');
});

test('Add days to a Date (string input)', () => {
  const result = SUT_.addDays('2026-01-12', 5);
  expect(result.toISOString().slice(0, 10)).toBe('2026-01-17');
});

test('Subtract days from a Date', () => {
  const result = SUT_.subDays('2026-01-12', 5);
  expect(result.toISOString().slice(0, 10)).toBe('2026-01-07');
});
