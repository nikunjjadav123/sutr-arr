/* 
Applies a function to each element of an array.
map([1, 2, 3], x => x * 2) --> [2, 4, 6]
*/
export const map = (arr,fn)=> arr.map(fn);

/*  Filters elements of an array based on a condition.
filt([1, 2, 3, 4], x => x > 2)  --> [3, 4]
*/
export const filter = (arr,fn)=> arr.filter(fn);

/*
Reduces an array to a single value.
reduce([1, 2, 3, 4], (acc, x) => acc + x, 0) --> 10
*/
export const red = (arr, fn, init) => arr.reduce(fn, init);

/* 
Removes duplicate values from an array. 
uniq([1, 1, 2, 3]) --> [1, 2, 3]
*/
export const uniq = arr => [...new Set(arr)]; /* Set is a built-in JS data structure stores only unique values and Spread (...) operator converts it into an array*/

/* 
Flattens nested arrays up to a given depth.
flat([1, [2, [3]]], 1) --> [1, 2, [3]] (Each depth removes ONE layer of [])

After depth = 1 : flat([1, [2, [3]]], 2) --> [1, 2, 3]
After depth = 2 : flat([1, [2, [3]]], 3) --> [1, 2, 3] (No more layers to remove)
*/
export const flat = (arr, depth = 1) => {
  if (!Array.prototype.flat) {
    return arr.reduce(
      (a, b) => a.concat(Array.isArray(b) && depth > 0 ? flatSafe(b, depth - 1) : b),
      []
    )
  }
  return arr.flat(depth)
};

/*
Calculates the sum of all numbers in an array.
sum([1, 2, 3, 4]) --> 10
*/
export const sum = arr => arr.reduce((acc, val) => acc + val, 0);

/* Calculates the multiplication of all numbers in an array. 
mult([1, 2, 3, 4]) --> 24
*/
export const mult = arr => arr.reduce((acc, val) => acc * val, 1);

/* Calculates the average of numbers in an array.
avg([1, 2, 3, 4]) --> 2.5
*/
export const avg = arr => (arr.length === 0 ? 0 : sum(arr) / arr.length);

/* 
Calculates the maximum value in an array.
max([1, 2, 3, 4]) --> 4
*/
export const max = arr => Math.max(...arr)

/* 
Calculates the minimum value in an array.
min([1, 2, 3, 4]) --> 1
*/
export const min = arr => Math.min(...arr)

/*
Splits an array into chunks of a given size.
chunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]
*/
export const chunk = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

