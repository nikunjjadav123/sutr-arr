import { SUT_ } from '../index.js'

describe('Array Utility Functions', () => {

  test('map()', () => {
    expect(SUT_.map([1, 2, 3], x => x * 2)).toEqual([2, 4, 6]);
  });

  test('filter()', () => {
    expect(SUT_.filter([1, 2, 3, 4], x => x > 2)).toEqual([3, 4]);
  });

  test('red()', () => {
    expect(SUT_.red([1, 2, 3, 4], (acc, x) => acc + x, 0)).toBe(10);
  });

  test('uniq()', () => {
    expect(SUT_.uniq([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
  });

  test('flat() with depth 1', () => {
    expect(SUT_.flat([1, [2, [3]]], 1)).toEqual([1, 2, [3]]);
  });

  test('flat() with depth 2', () => {
    expect(SUT_.flat([1, [2, [3]]], 2)).toEqual([1, 2, 3]);
  });

  test('sum()', () => {
    expect(SUT_.sum([1, 2, 3, 4])).toBe(10);
  });

  test('mult()', () => {
    expect(SUT_.mult([1, 2, 3, 4])).toBe(24);
  });

  test('avg()', () => {
    expect(SUT_.avg([1, 2, 3, 4])).toBe(2.5);
  });

  test('avg() empty array', () => {
    expect(SUT_.avg([])).toBe(0);
  });

  test('max()', () => {
    expect(SUT_.max([1, 2, 3, 4])).toBe(4);
  });

  test('min()', () => {
    expect(SUT_.min([1, 2, 3, 4])).toBe(1);
  });

  test('chunk()', () => {
    expect(SUT_.chunk([1, 2, 3, 4, 5], 2))
      .toEqual([[1, 2], [3, 4], [5]]);
  });

});
