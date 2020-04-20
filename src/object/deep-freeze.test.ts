import { deepFreeze } from './deep-freeze';

describe('deepFreeze', () => {
  test('should throw an error in object mutation', () => {
    const actual = { name: 'My name' };

    deepFreeze(actual);

    const test = () => (actual.name = 'New name');

    expect(test).toThrowError();
  });

  test('should throw an error in array mutation', () => {
    const actual = [0, 1, 2, 3];

    deepFreeze(actual);

    expect(() => actual.push(4)).toThrowError();
  });
});
