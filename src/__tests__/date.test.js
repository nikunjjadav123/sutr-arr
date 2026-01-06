import { SUT_ } from '../index.js'

test('adds days to a date', () => {
  const date = new Date('2025-01-01');
  const result = SUT_.addDays(date, 5);
  console.log("New Date:",result);
  expect(result.toISOString().slice(0, 10)).toBe('2025-01-06');
});

test('converts date toDate', () => {
  const date = new Date('2025-01-01');
  const result = SUT_.toDate(date);
  console.log("converts date toDate",result);
  expect(result.toISOString().slice(0, 10)).toBe('2025-01-01');
});


test('removes time and preserves date (UTC)', () => {
  const date = new Date('2025-04-10');
  const result = SUT_.normalizeDate(date);
  expect(result.getHours()).toBe(0);
});

test('Same day or not', () => {
  const result = SUT_.isSameDay('09-02-2025','09-02-2025');
  expect(result).toBe(true);
});

test('Previous day or not', () => {
  const result = SUT_.isBefore('08-02-2025','09-02-2025');
  expect(result).toBe(true);
});

test('checks age', () => {
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

test('Add days to given date', () => {
  const result = SUT_.addBusinessDays('2026-01-12',5);
  expect(result.toISOString().slice(0, 10)).toBe("2026-01-19");
});

test('Get range to given dates', () => {
  const result = SUT_.rangeDates('2026-01-12','2026-01-20');
  console.log(result);
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

test("Return today date", () => {
  const result = SUT_.today();
  console.log("Today is:",result);
  expect(result.toISOString().slice(0, 10)).toBe("2026-01-06");
});

test("Return tomorrow date", () => {
  const result = SUT_.tomorrow();
  console.log("Today is:",result);
  expect(result.toISOString().slice(0, 10)).toBe("2026-01-07");
});

test("Return yesterday date", () => {
  const result = SUT_.yesterday();
  console.log("Today is:",result);
  expect(result.toISOString().slice(0, 10)).toBe("2026-01-05");
});

test("Add days to a Date", () => {
  const result = SUT_.addDays('2026-01-12',5);
  console.log(result);
  expect(result.toISOString().slice(0, 10)).toBe("2026-01-17");
});

test("Subtracts days to a Date", () => {
  const result = SUT_.subDays('2026-01-12',5);
  console.log(result);
  expect(result.toISOString().slice(0, 10)).toBe("2026-01-07");
});


