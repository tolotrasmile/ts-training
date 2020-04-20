/**
 * Transform each element of an array with a function
 * @param transform
 */
export const map = <T, U>(
  transform: (item: T, index?: number, array?: T[]) => U
) => {
  return (array: T[]): U[] => {
    let result: U[] = [];
    let index = 0;

    for (let element of array) {
      result = [...result, transform(element, index++, array)];
    }

    return result;
  };
};

/**
 * Filter an array with a function
 * @param predicate
 */
export const filter = <T>(
  predicate: (item: T, index?: number, array?: T[]) => boolean
) => {
  return (array: T[]): T[] => {
    let result: T[] = [];
    let index = 0;

    for (let element of array) {
      if (predicate(element, index++, array)) {
        result = [...result, element];
      }
    }

    return result;
  };
};
