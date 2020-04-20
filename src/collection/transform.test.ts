import { filter, map } from './transform';
import { deepFreeze } from '../object/deep-freeze';

describe('transform', () => {
  test('map', () => {
    const actual = [1, 2, 3];
    const expected = [2, 4, 6];

    deepFreeze(actual);

    const result = map((x: number) => x * 2)(actual);

    expect(result).toEqual(expected);
  });

  test('filter', () => {
    const actual = [1, 2, 3];
    const expected = [2];

    deepFreeze(actual);

    const result = filter((x: number) => x % 2 === 0)(actual);

    expect(result).toEqual(expected);
  });
});
