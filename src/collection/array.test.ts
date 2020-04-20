import {
  insert,
  push,
  isIterable,
  swap,
  removeAt,
  copy,
  insertAt,
  assign,
  update,
  head,
  tail,
  last,
  create,
  uniq,
} from './array';

import { deepFreeze } from '../object/deep-freeze';

describe('array', () => {
  test('create', () => {
    const expected = [1, 2, 3, 4];
    expect(create(1, 2, 3, 4)).toEqual(expected);
  });

  test('push', () => {
    const actual = [1, 2, 3];
    const expected = [1, 2, 3, 4];

    deepFreeze(actual);

    expect(push(4)(actual)).toEqual(expected);
  });

  test('update', () => {
    const actual = [1, 2, 3];
    const expected = [0, 2, 3];

    deepFreeze(actual);

    expect(update(0, 0)(actual)).toEqual(expected);
  });

  test('copy', () => {
    const actual = [1, 2, 3];
    const expected = [1, 2, 3];

    deepFreeze(actual);

    expect(copy(actual)).toEqual(expected);
  });

  test('insert', () => {
    const actual = [1, 2, 3];
    const expected = [0, 1, 2, 3];

    deepFreeze(actual);

    expect(insert(0)(actual)).toEqual(expected);
  });

  test('insertAt', () => {
    const actual = [1, 2, 3];

    deepFreeze(actual);

    expect(insertAt(0, 0)(actual)).toEqual([0, 1, 2, 3]);
    expect(insertAt(2, 0)(actual)).toEqual([1, 2, 0, 3]);
    expect(() => insertAt(actual.length, 0)(actual)).toThrowError();
  });

  test('assign', () => {
    const actual = [1, 2, 3];

    deepFreeze(actual);

    expect(assign(0, 0)(actual)).toEqual([0, 2, 3]);
    expect(assign(2, 0)(actual)).toEqual([1, 2, 0]);
    expect(assign(3, 0)(actual)).toEqual([1, 2, 3, 0]);
    expect(assign(4, 0)(actual)).toEqual([1, 2, 3, undefined, 0]);
  });

  test('isIterable', () => {
    expect(isIterable({})).toBe(false);
    expect(isIterable('Iterable')).toBe(true);
    expect(isIterable([])).toBe(true);
  });

  test('swap', () => {
    const actual = [1, 2, 3];
    const expected = [2, 1, 3];

    deepFreeze(actual);

    expect(swap(0, 1)(actual)).toEqual(expected);
  });

  test('removeAt', () => {
    const actual = [1, 2, 3];
    const expected = [1, 2];

    deepFreeze(actual);

    expect(removeAt(2)(actual)).toEqual(expected);
  });

  test('head', () => {
    const actual = [1, 2, 3];
    const expected = 1;

    deepFreeze(actual);

    expect(head(actual)).toEqual(expected);
  });

  test('last', () => {
    const actual = [1, 2, 3];
    const expected = 3;

    deepFreeze(actual);

    expect(last(actual)).toEqual(expected);
  });

  test('tail', () => {
    const actual = [1, 2, 3];
    const expected = [2, 3];

    deepFreeze(actual);

    expect(tail(actual)).toEqual(expected);
  });

  test('tail empty', () => {
    const actual = [];
    const expected = [];

    deepFreeze(actual);

    expect(tail(actual)).toEqual(expected);
  });

  test('tail throw an error', () => {
    const actual = undefined;

    deepFreeze(actual);

    expect(() => tail(actual)).toThrowError();
  });

  test('uniq', () => {
    const actual = [1, 1, 2, 2, 3, 3];
    const expected = [1, 2, 3];

    deepFreeze(actual);

    expect(uniq(actual)).toEqual(expected);
  });
});
