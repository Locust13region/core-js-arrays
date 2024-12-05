/* ********************************************************************************************
 *                                                                                            *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implemented using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */

/**
 * Creates an array of integers from the specified start to end (inclusive).
 *
 * @param {number} start - The first number of an array.
 * @param {number} end - The last number of an array.
 * @return {array} - An array of integers.
 *
 * @example
 *    getIntervalArray(1, 5)  => [ 1, 2, 3, 4, 5 ]
 *    getIntervalArray(-2, 2)  => [ -2, -1, 0, 1, 2 ]
 *    getIntervalArray(0, 100) => [ 0, 1, 2, ..., 100 ]
 *    getIntervalArray(3, 3) => [ 3 ]
 */

const getIntervalArray = (start, end) =>
  [...Array(end - start ? end - start + 1 : 1)].map((i, idx) => start + idx);

/**
 * Returns a new array where each element is the sum of the corresponding elements
 * from two arrays. Arrays can have different lengths.
 *
 * @param {array} arr1 - The first array.
 * @param {array} arr2 - The second array.
 * @return {array} - An array containing the sum of corresponding elements.
 *
 * @example
 */
const sumArrays = (arr1, arr2) =>
  (arr1.length >= arr2.length ? arr1 : arr2).map(
    (i, idx) => i + ((arr1.length >= arr2.length ? arr2 : arr1)[idx] || 0)
  );

/**
 * Returns an index of the specified element in array or -1 if element is not found.
 *
 * @param {array} arr - The input array.
 * @param {any} value - Element to search.
 * @return {number} - An index of the specified element.
 *
 * @example
 *    findElement(['Ace', 10, true], 10) => 1
 *    findElement(['Array', 'Number', 'string'], 'Date') => -1
 *    findElement([0, 1, 2, 3, 4, 5], 5) => 5
 */
const findElement = (arr, value) => arr.indexOf(value);

/**
 * Returns a number of all occurrences of the specified item in an array.
 *
 * @param {array} arr - The input array.
 * @param {any} item - Element to search.
 * @return {number} - Number of found items.
 *
 * @example
 *    findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1) => 3
 *    findAllOccurrences([ 1, 2, 3, 4, 5 ], 0) => 0
 *    findAllOccurrences([ 'a','b','c','c' ], 'c') => 2
 *    findAllOccurrences([ null, undefined, null ], null) => 2
 *    findAllOccurrences([ true, 0, 1, 'true' ], true) => 1
 */
const findAllOccurrences = (arr, item) => arr.filter((i) => i === item).length;

/**
 * Removes falsy values from the specified array.
 * Falsy values: false, null, 0, "", undefined, and NaN.
 *
 * @param {array} arr - The input array.
 * @return {array} - The array without falsy values.
 *
 * @example
 *    removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]) => [ 'cat', true ]
 *    removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]) => [ 1, 2, 3, 4, 5, 'false' ]
 *    removeFalsyValues([ false, 0, NaN, '', undefined ]) => [ ]
 */
const removeFalsyValues = (arr) => arr.filter((i) => !!i !== false);

/**
 * Returns an array containing the lengths of each string in a specified array of strings.
 *
 * @param {array} arr - The input array.
 * @return {array} - The array of string lengths.
 *
 * @example
 *    getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]) => [ 0, 1, 2, 3, 4 ]
 *    getStringsLength([ 'angular', 'react', 'ember' ]) => [ 7, 5, 5 ]
 */
const getStringsLength = (arr) => arr.map((i) => i.length);

/**
 * Returns the average of all items in the specified array of numbers.
 * The result should be rounded to two decimal places.
 *
 * @param {array} arr - The input array
 * @return {number} - The average of all items
 *
 * @example
 *   getAverage([]) => 0
 *   getAverage([ 1, 2, 3 ]) => 2
 *   getAverage([ -1, 1, -1, 1 ]) => 0
 *   getAverage([ 1, 10, 100, 1000 ])  => 277,75
 *   getAverage([ 2, 3, 3 ])  => 2,67
 */
const getAverage = (arr) =>
  arr.length === 0
    ? 0
    : Math.round(
        (arr.reduce((acc, curr) => acc + curr, 0) / arr.length) * 100
      ) / 100;

/**
 * Checks if all strings in an array have the same length.
 *
 * @param {array} arr - The array of strings to be checked.
 * @return {boolean} - True if all strings have the same length, false otherwise.
 *
 * @example
 *    isSameLength(['orange', 'banana', 'cherry']) => true
 *    isSameLength(['cat', 'dog', 'elephant']) => false
 */
const isSameLength = (arr) => arr.every((i) => i.length === arr[0].length);
/**
 * Checks if there are elements in the array where the value is equal to its index.
 *
 * @param {array} arr - The array of elements to be checked.
 * @return {boolean} - True if there are elements with value equal to their index, false otherwise.
 *
 * @example
 *    isValueEqualsIndex([0, 1, 2, 3, 4]) => true
 *    isValueEqualsIndex([2, 1, 0, 4, 5]) => true
 *    isValueEqualsIndex([10, 20, 30, 40, 50]) => false
 */
const isValueEqualsIndex = (arr) => arr.some((i, idx) => i === idx);

/**
 * Inserts the item into specified array at specified index.
 *
 * @param {array} arr - The input array.
 * @param {any} item - The item to insert.
 * @param {number} index - Specified index.
 *
 * @example
 *    insertItem([ 1, 3, 4, 5 ], 2, 1)  => [ 1, 2, 3, 4, 5 ]
 *    insertItem([ 1, 'b', 'c'], 'x', 0) => [ 'x', 1, 'b', 'c' ]
 */
const insertItem = (arr, item, index) => arr.splice(index, 0, item);

/**
 * Returns the n first items of the specified array.
 *
 * @param {array} arr - The input array.
 * @param {number} n - Number of items.
 *
 * @example
 *    getHead([ 1, 3, 4, 5 ], 2) => [ 1, 3 ]
 *    getHead([ 'a', 'b', 'c', 'd'], 3) => [ 'a', 'b', 'c' ]
 *    getHead([ 'a', 'b', 'c', 'd'], 0) => []
 */
const getHead = (arr, n) => arr.slice(0, n);

/**
 * Returns the n last items of the specified array.
 *
 * @param {array} arr - The input array.
 * @param {number} n - Number of items.
 *
 * @example
 *    getTail([ 1, 3, 4, 5 ], 2) => [ 4, 5 ]
 *    getTail([ 'a', 'b', 'c', 'd'], 3) => [ 'b', 'c', 'd' ]
 *    getTail([ 'a', 'b', 'c', 'd'], 0) => []
 */
const getTail = (arr, n) => (n === 0 ? [] : arr.slice(-n));
/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order.
 *
 * @param {array} arr - The input array.
 * @return {array} - The doubled array.
 *
 * @example
 *    doubleArray(['Ace', 10, true])  => ['Ace', 10, true, 'Ace', 10, true]
 *    doubleArray([0, 1, 2, 3, 4, 5]) => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
 *    doubleArray([]) => []
 */
const doubleArray = (arr) => arr.concat(arr);

/**
 * Concatenates all elements from specified array into single string with ',' delimiter.
 *
 * @param {array} arr - The input array.
 * @return {string} - The concatenated string.
 *
 * @example
 *    toStringList([0, false, 'cat', NaN, true, '']) => '0,false,cat,NaN,true,'
 *    toStringList([1, 2, 3, 4, 5]) => '1,2,3,4,5'
 *    toStringList(['rock', 'paper', 'scissors']) => 'rock,paper,scissors'
 */
const toStringList = (arr) => arr.join(',');

/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {array} arr - The input array.
 * @return {array} - The array with unique values.
 *
 * @example
 *   distinct([ 1, 2, 3, 3, 2, 1 ]) => [ 1, 2, 3 ]
 *   distinct([ 'a', 'a', 'a', 'a' ])  => [ 'a' ]
 *   distinct([ 1, 1, 2, 2, 3, 3, 4, 4]) => [ 1, 2, 3, 4]
 *   distinct([]) => []
 */
const distinct = (arr) => Array.from(new Set(arr));

/**
 * Creates an n-dimensional array and fills it with zeros.
 *
 * @param {number} n - Depth of outter array (n > 0).
 * @param {number} size - Length of all arrays (size > 0).
 * @return {array} - The n-dimensional array filled with zeros.
 *
 * @example
 *    createNDimensionalArray(2, 3) => [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
 *    createNDimensionalArray(3, 2) => [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
 *    createNDimensionalArray(4, 2) => [[[[0, 0], [0, 0]], [[0, 0], [0, 0]]], [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]]
 *    createNDimensionalArray(1, 1) => [0]
 */
const createNDimensionalArray = (n, size) =>
  n === 1
    ? Array(size).fill(0)
    : Array(size)
        .fill(null)
        .map(() => createNDimensionalArray(n - 1, size));

/**
 * Flattens a nested array into a single-level array.
 *
 * @param {array} nestedArray - The nested array to be flattened.
 * @return {array} - A single-level array.
 *
 * @example
 *    flattenArray([1, [2, [3, 4], 5], 6]) => [1, 2, 3, 4, 5, 6]
 *    flattenArray(['a', ['b', ['c', 'd'], 'e'], 'f']) => ['a', 'b', 'c', 'd', 'e', 'f']
 *    flattenArray([1, 2, 3, 4]) => [1, 2, 3, 4]
 */
const flattenArray = (nestedArray) => nestedArray.flat(Infinity);

/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {array} arr - The input array
 * @param {Function} childrenSelector - A transform function to apply to each element
 *                                     that returns an array of children
 * @return {array} - The flatted array
 *
 * @example
 *   selectMany([[1, 2], [3, 4], [5, 6]], (x) => x) =>   [ 1, 2, 3, 4, 5, 6 ]
 *   selectMany(['one','two','three'], (x) => x.split('')) =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
const selectMany = (arr, func) => arr.flatMap(func);

/**
 * Every month, you record your income and expenses.
 * Expenses may be greater than income.
 * You need to calculate the final balance.
 *
 * @param {array} arr - The input array [[income, expence], ...]
 * @return {number} - The final balance.
 *
 * @example
 *   calculateBalance([ [ 10, 8 ], [ 5, 1 ] ]) => (10 - 8) + (5 - 1) = 2 + 4 = 6
 *   calculateBalance([ [ 10, 8 ], [ 1, 5 ] ])  => (10 - 8) + (1 - 5) = 2 + -4 = -2
 *   calculateBalance([]) => 0
 */
const calculateBalance = (arr) =>
  arr.reduce((acc, sub) => acc + (sub[0] - sub[1]), 0);

/**
 * Breaks an array into chunks of the specified size.
 *
 * @param {array} arr - The array to be broken into chunks.
 * @param {number} chunkSize - The size of each chunk.
 * @return {array} - An array of chunks.
 *
 * @example
 *    createChunks([1, 2, 3, 4, 5, 6, 7], 3) => [[1, 2, 3], [4, 5, 6], [7]]
 *    createChunks(['a', 'b', 'c', 'd', 'e'], 2) => [['a', 'b'], ['c', 'd'], ['e']]
 *    createChunks([10, 20, 30, 40, 50], 1) => [[10], [20], [30], [40], [50]]
 */
const createChunks = (arr, chunkSize) =>
  [...Array(Math.ceil(arr.length / chunkSize))].map((i, idx) =>
    arr.slice(idx * chunkSize, (idx + 1) * chunkSize)
  );

/**
 * Generates an array of odd numbers of the specified length.
 *
 * @param {number} len - The length of an array.
 * @return {array} - An array of odd numbers.
 *
 * @example
 *    generateOdds(0) => []
 *    generateOdds(1) => [ 1 ]
 *    generateOdds(2) => [ 1, 3 ]
 *    generateOdds(5) => [ 1, 3, 5, 7, 9 ]
 */
// const generateOdds = (len) => Array.from({ length: len });
const generateOdds = (len) =>
  Array.from({ length: len }, (_, idx) => idx + idx + 1);
/**
 * Returns an element from the multidimensional array by the specified indices.
 *
 * @param {array} arr - The input multidimensional array
 * @param {array} indices - The array of indices
 * @return {any} - An element from the array
 *
 * @example
 *   getElementByIndices([[1, 2], [3, 4], [5, 6]], [0,0]) => 1        (arr[0][0])
 *   getElementByIndices(['one','two','three'], [2]) => 'three'  (arr[2])
 *   getElementByIndices([[[ 1, 2, 3]]], [ 0, 0, 1 ]) => 2        (arr[0][0][1])
 */
const getElementByIndices = (arr, indices) =>
  indices.reduce((acc, curr) => acc[curr], arr);
/**
 * Returns the number of all falsy values in the specified array.
 *
 * @param {array} arr - The input array.
 * @return {number} - The number of all falsy values.
 *
 * @example
 *  getFalsyValuesCount([]) => 0
 *  getFalsyValuesCount([ 1, '', 3 ]) => 1
 *  getFalsyValuesCount([ -1, 'false', null, 0 ]) => 2
 *  getFalsyValuesCount([ null, undefined, NaN, false, 0, '' ]) => 6
 */
const getFalsyValuesCount = (arr) => arr.filter((i) => !!i === false).length;

/**
 * Creates an identity matrix of the specified size.
 *
 * @param {number} n - A size of the matrix.
 * @return {array} - An identity matrix.
 *
 * @example
 *     getIdentityMatrix(1)  => [[1]]
 *
 *     getIdentityMatrix(2) => [[1,0],
 *                             [0,1]]
 *
 *                              [[1,0,0,0,0],
 *                              [0,1,0,0,0],
 *     getIdentityMatrix(5) =>  [0,0,1,0,0],
 *                              [0,0,0,1,0],
 *                              [0,0,0,0,1]]
 */
const getIdentityMatrix = (n) =>
  Array.from({ length: n }, (i, idx) =>
    Array.from({ length: n }, (j, jdx) => (idx === jdx ? 1 : 0))
  );
/**
 * Returns an array containing indices of odd elements in the input array.
 *
 * @param {array} numbers - The array of numbers.
 * @return {array} - An array containing indices of odd elements.
 *
 * @example
 *    getIndicesOfOddNumbers([1, 2, 3, 4, 5]) => [0, 2, 4]
 *    getIndicesOfOddNumbers([2, 4, 6, 8, 10]) => []
 *    getIndicesOfOddNumbers([11, 22, 33, 44, 55]) => [0, 2, 4]
 */
const getIndicesOfOddNumbers = (numbers) =>
  numbers.map((i, idx) => (i % 2 !== 0 ? idx : 'x')).filter((i) => i !== 'x');

/**
 * Returns the array of RGB Hex strings from the specified array of numbers.
 *
 * @param {array} arr - The input array.
 * @return {array} - The array of RGB Hex strings.
 *
 * @example
 *    getHexRGBValues([ 0, 255, 16777215]) => [ '#000000', '#0000FF', '#FFFFFF' ]
 *    getHexRGBValues([]) => []
 */
const getHexRGBValues = (arr) =>
  arr.map((i) => '#'.concat(i.toString(16).toUpperCase().padStart(6, 0)));
/**
 * Returns the n largest values from the specified array
 *
 * @param {array} arr - The input array
 * @param {number} n - Number of maximum values.
 * @return {array} - n largest values.
 *
 * @example
 *   getMaxItems([], 5) => []
 *   getMaxItems([ 1, 2 ], 1) => [ 2]
 *   getMaxItems([ 2, 3, 1 ], 2) => [ 3, 2]
 *   getMaxItems([ 10, 2, 7, 5, 3, -5 ], 3) => [ 10, 7, 5 ]
 *   getMaxItems([ 10, 10, 10, 10 ], 3) => [ 10, 10, 10 ]
 */
const getMaxItems = (arr, n) =>
  arr.length
    ? [...Array(n)].map(() =>
        arr.splice(arr.indexOf(Math.max(...arr)), 1).pop()
      )
    : [];

/**
 * Finds and returns an array containing only the common elements found in two arrays.
 *
 * @param {array} arr1 - The first array.
 * @param {array} arr2 - The second array.
 * @return {array} - An array containing common elements.
 *
 * @example
 *    findCommonElements([1, 2, 3], [2, 3, 4]) => [ 2, 3 ]
 *    findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd']) => [ 'b', 'c' ]
 *    findCommonElements([1, 2, 3], ['a', 'b', 'c']) => []
 */
const findCommonElements = (arr1, arr2) =>
  arr1.reduce((acc, curr) => (arr2.includes(curr) ? [...acc, curr] : acc), []);
/**
 * Finds the length of the longest increasing subsequence of a given array of integers.
 *
 * @param {array} nums - The array of integers.
 * @return {number} - The length of the longest increasing subsequence.
 *
 * @example
 *    findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]) => 3
 *    findLongestIncreasingSubsequence([3, 10, 2, 1, 20]) => 2
 *    findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]) => 3
 */
const findLongestIncreasingSubsequence = (nums) =>
  nums.reduce(
    ([maxLen, currLen], num, idx) => [
      Math.max(maxLen, currLen + (idx > 0 && num > nums[idx - 1] ? 1 : 0)),
      idx > 0 && num > nums[idx - 1] ? currLen + 1 : 1,
    ],
    [1, 1]
  )[0];

/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {array} arr - The input array
 * @return {array}
 *
 * @example :
 *  propagateItemsByPositionIndex([]) => []
 *  propagateItemsByPositionIndex([ 1 ]) => [ 1 ]
 *  propagateItemsByPositionIndex([ 'a', 'b' ]) => [ 'a', 'b','b' ]
 *  propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]) => [ 'a', 'b', 'b', 'c', 'c', 'c',  null, null, null, null ]
 *  propagateItemsByPositionIndex([ 1,2,3,4,5 ]) => [ 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5 ]
 */
const propagateItemsByPositionIndex = (arr) =>
  arr.map((i, idx) => [...Array(idx + 1)].fill(i)).flat(1);

/**
 * Shifts an array by n positions. If n is negative, the array is shifted to the left;
 * if positive, it is shifted to the right.
 *
 * @param {array} arr - The array to be shifted.
 * @param {number} n - The number of positions to shift the array elements.
 * @return {array} - The shifted array.
 *
 * @example
 *    shiftArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 *    shiftArray(['a', 'b', 'c', 'd'], -1) => ['b', 'c', 'd', 'a']
 *    shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]
 */
const shiftArray = (arr, n) => [].concat(arr.slice(-n), arr.slice(0, -n));

/**
 * Sorts digit names.
 *
 * @param {array} arr - The input array.
 * @return {array} - Sorted array.
 *
 * @example
 *   sortDigitNamesByNumericOrder([]) => []
 *   sortDigitNamesByNumericOrder([ 'nine','one' ]) => [ 'one', 'nine' ]
 *   sortDigitNamesByNumericOrder([ 'one','two','three' ]) => [ 'one','two', 'three' ]
 *   sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]) => [ 'eight','eight','nine','nine']
 *   sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]) => [ 'zero','one','one','one' ]
 */
const sortDigitNamesByNumericOrder = (arr) =>
  arr
    .map(
      (i) =>
        ({
          zero: 0,
          one: 1,
          two: 2,
          three: 3,
          four: 4,
          five: 5,
          six: 6,
          seven: 7,
          eight: 8,
          nine: 9,
        })[i]
    )
    .sort((a, b) => a - b)
    .map(
      (i) =>
        [
          'zero',
          'one',
          'two',
          'three',
          'four',
          'five',
          'six',
          'seven',
          'eight',
          'nine',
        ][i]
    );

// console.log(sortDigitNamesByNumericOrder([]));
// console.log(sortDigitNamesByNumericOrder(['nine', 'one']));
// console.log(sortDigitNamesByNumericOrder(['one', 'two', 'three']));
// console.log(sortDigitNamesByNumericOrder(['nine', 'eight', 'nine', 'eight']));
// console.log(sortDigitNamesByNumericOrder(['one', 'one', 'one', 'zero']));
/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position. *
 *
 * @param {array} arr - The input array.
 * @return {array} - The swapped array.
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]
 *   swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *   swapHeadAndTail([ 1 ]) => [ 1 ]
 *   swapHeadAndTail([]) => []
 *
 */
const swapHeadAndTail = (arr) =>
  [].concat(
    arr.slice(arr.length - Math.floor(arr.length / 2)),
    arr.length % 2 !== 0
      ? arr.slice(Math.floor(arr.length / 2), Math.floor(arr.length / 2) + 1)
      : [],
    arr.slice(0, Math.trunc(arr.length / 2))
  );

module.exports = {
  getIntervalArray,
  sumArrays,
  findElement,
  findAllOccurrences,
  removeFalsyValues,
  getStringsLength,
  getAverage,
  isSameLength,
  isValueEqualsIndex,
  insertItem,
  getHead,
  getTail,
  doubleArray,
  toStringList,
  distinct,
  createNDimensionalArray,
  flattenArray,
  selectMany,
  calculateBalance,
  createChunks,
  generateOdds,
  getElementByIndices,
  getFalsyValuesCount,
  getIdentityMatrix,
  getIndicesOfOddNumbers,
  getHexRGBValues,
  getMaxItems,
  findCommonElements,
  findLongestIncreasingSubsequence,
  propagateItemsByPositionIndex,
  shiftArray,
  sortDigitNamesByNumericOrder,
  swapHeadAndTail,
};
