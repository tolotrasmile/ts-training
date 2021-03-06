/**
 * Create new array
 * @param args
 */
export const create = <T>(...args: T[]): T[] => [...args];

/**
 * Push item to the list
 * @param array
 * @param item
 */
export const push = <T>(array: T[], item: T): T[] => [...array, item];

/**
 * Insert item at the beginning of the list
 * @param array
 * @param item
 */
export const insert = <T>(array: T[], item: T): T[] => [item, ...array];

/**
 * Insert item to the list at the defined index
 * @param array
 * @param index
 * @param newItem
 */
export const insertAt = <T>(array: T[], index: number, newItem: T): T[] => {
  if (index >= array.length) {
    throw new Error(
      `The index must be less than ${array.length}, otherwise use "push" or "assign" method`
    );
  }

  return [...array.slice(0, index), newItem, ...array.slice(index)];
};

/**
 * Update item at index with new item
 * `slice` method
 * @param array
 * @param index
 * @param newItem
 */
export const update = <T>(array: T[], index: number, newItem: T) => [
  ...array.slice(0, index),
  newItem,
  ...array.slice(index + 1),
];

/**
 * Replace item at index
 * If the index is equal to the array length, it behaves like a push
 * Otherwise, if the index is greater than the array length,
 * it's create item at defined index and fill the rest by `undefined`
 * `Object.assign` method
 * @param array
 * @param index
 * @param newItem
 */
export const assign = <T>(array: T[], index: number, newItem: T) => {
  return Object.assign([], array, { [index]: newItem });
};

/**
 * Create new copy of the array
 * @param array
 */
export const copy = <T>(array: T[]): T[] => [...array];

/**
 * Test if value is iterable
 * @param value
 */
export const isIterable = (value: any): Boolean => {
  return Symbol.iterator in Object(value);
};

/**
 * Swap two elements of an array
 * @param array
 * @param index1
 * @param index2
 */
export const swap = <T>(array: T[], index1: number, index2: number): T[] => {
  const result = [...array];
  [result[index1], result[index2]] = [result[index2], result[index1]];
  return result;
};

/**
 * Remove the element found at the index
 * @param array
 * @param index
 */
export const removeAt = <T>(array: T[], index: number): T[] => [
  ...array.slice(0, index),
  ...array.slice(index + 1),
];

/**
 * Remove duplicated items in array
 * @param array
 */
export const uniq = <T>(array: T[]): T[] => [...new Set(array)];

/**
 * Get the first element of an array
 * @param array
 */
export const head = <T>(array: T[]): T => array[0];

/**
 * Get the last element of an array
 * @param array
 */
export const last = <T>(array: T[]): T => array[array.length - 1];

/**
 * Get the tail of an array
 * @param array
 */
export const tail = <T>(array: T[]): T[] => array.slice(1, Infinity);
