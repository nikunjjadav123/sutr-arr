import { SUT_ } from '../src/index';


describe('groupBy', () => {
  test('groups array items by key', () => {
    const users = [
      { name: 'Alice', role: 'admin' },
      { name: 'Bob', role: 'user' },
      { name: 'Charlie', role: 'admin' }
    ];

    const result = SUT_.groupBy(users, 'role');

    expect(result).toEqual({
      admin: [
        { name: 'Alice', role: 'admin' },
        { name: 'Charlie', role: 'admin' }
      ],
      user: [{ name: 'Bob', role: 'user' }]
    });
  });

  test('groups array items by function', () => {
    const nums = [1, 2, 3, 4, 5];

    const result = SUT_.groupBy(nums, n => (n % 2 === 0 ? 'even' : 'odd'));

    expect(result).toEqual({
      odd: [1, 3, 5],
      even: [2, 4]
    });
  });
});

describe('median', () => {
  test('returns median for odd-length array', () => {
    expect(SUT_.median([1, 3, 3, 6, 7, 8, 9])).toBe(6);
  });

  test('returns median for even-length array', () => {
    expect(SUT_.median([1, 2, 3, 4])).toBe(2.5);
  });

  test('returns 0 for empty array', () => {
    expect(SUT_.median([])).toBe(0);
  });
});

describe('mode', () => {
  test('returns frequency map of elements', () => {
    const result = SUT_.mode([1, 2, 2, 3, 3, 3, 4]);

    expect(result).toEqual({
      1: 1,
      2: 2,
      3: 3,
      4: 1
    });
  });
});

describe('uniqBy', () => {
  test('returns unique items based on key', () => {
    const input = [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
      { id: 1, name: 'C' }
    ];

    const result = SUT_.uniqBy(input, 'id');

    expect(result).toEqual([
      { id: 1, name: 'A' },
      { id: 2, name: 'B' }
    ]);
  });
});

describe('toggle', () => {
  test('removes value if present', () => {
    expect(SUT_.toggle([1, 2, 3], 2)).toEqual([1, 3]);
  });

  test('adds value if not present', () => {
    expect(SUT_.toggle([1, 3], 2)).toEqual([1, 3, 2]);
  });
});

describe('sortBy', () => {
  test('sorts objects by numeric key', () => {
    const users = [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 }
    ];

    expect(SUT_.sortBy(users, 'age')).toEqual([
      { name: 'Bob', age: 25 },
      { name: 'Alice', age: 30 }
    ]);
  });

  test('sorts objects by string key', () => {
    const users = [
      { name: 'Charlie' },
      { name: 'Alice' }
    ];

    expect(SUT_.sortBy(users, 'name')).toEqual([
      { name: 'Alice' },
      { name: 'Charlie' }
    ]);
  });
});

describe('diff', () => {
  test('returns elements present in first array but not second', () => {
    expect(SUT_.diff([1, 2, 3], [2, 4])).toEqual([1, 3]);
  });
});

describe('inter', () => {
  test('returns common elements between arrays', () => {
    expect(SUT_.inter([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });
});
