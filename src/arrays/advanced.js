/* Groups array items by a key or custom function.

input:
const users = [
  {name: 'Alice', role: 'admin'},
  {name: 'Bob', role: 'user'},
  {name: 'Charlie', role: 'admin'}
];

groupBy(users, 'role')  -->
{
  admin: [{name: 'Alice', role: 'admin'}, {name: 'Charlie', role: 'admin'}],
  user: [{name: 'Bob', role: 'user'}]
}
*/
export const groupBy = (arr, key) => {
  return arr.reduce((result, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
};

/* Calculates the median of numbers in an array.
median([1, 3, 3, 6, 7, 8, 9]) --> 6
(a, b) => a - b means ascending order
a<b --> negative value --> a comes before b --> no change in order
a=b --> 0 value --> no change in order --> stable sort
a>b --> positive value --> b comes before a
*/
export const median = arr => {
  if (arr.length === 0) return 0;
  const sorted = [...arr].sort((a, b) => a - b); /* this works only for numbers */
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
};

/* Calculates the mode of numbers in an array.
mode([1, 2, 2, 3, 3, 3, 4]) --> 3
means the number that appears most frequently in the array.
*/
export const mode = (arr) =>
  arr.reduce((acc, n) => {
    acc[n] = (acc[n] || 0) + 1
    return acc
  }, {})

/* 
Returns a new array with unique elements based on a key function.
uniqBy([{id: 1}, {id: 2}, {id: 1}], 'id') --> [{id: 1}, {id: 2}]        
*/
export const uniqBy = (arr, key) => {
  const seen = new Set()
  return arr.filter(item => {
    const val = item[key]
    if (seen.has(val)) return false
    seen.add(val)
    return true
  })
}

/* Toggles the presence of a value in an array.
toggle([1, 2, 3], 2) --> [1, 3] (2 is removed)
toggle([1, 3], 2) --> [1, 3, 2] (2 is added)
means if value exists in array, remove it; if not, add it into array.
*/  
export const toggle = (arr, value) =>
  arr.includes(value)
    ? arr.filter(v => v !== value)
    : [...arr, value]

/* Sorts an array of objects by a specified key.
sortBy([{name: 'Alice', age: 30}, {name: 'Bob', age: 25}], 'age') -->
[{name: 'Bob', age: 25}, {name: 'Alice', age: 30}]
*/  
export const sortBy = (arr, key) =>
  [...arr].sort((a, b) => a[key] > b[key] ? 1 : -1) /* this works for both numbers and strings  */

/* Computes the difference between two arrays.
diff([1, 2, 3], [2, 4]) --> [1, 3] (Elements in first array not in second)
here 1 and 3 are in first array but not in second array.
*/
export const diff = (a, b) => a.filter(x => !b.includes(x))


/* Computes the intersection of two arrays.
inter([1, 2, 3], [2, 3, 4]) --> [2, 3] (Elements common to both arrays)
here 2 and 3 are present in both arrays.
*/
export const inter = (a, b) => a.filter(x => b.includes(x))


/* Debounces a function call */ 
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/* Throttles a function call */
export const throttle = (func, limit) => {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

