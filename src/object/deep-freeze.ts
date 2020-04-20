/**
 * Deep freeze object to avoid mutation
 * @param value
 */
export const deepFreeze = <T>(value: T) => {
  if (value === Object(value)) {
    Object.isFrozen(value) || Object.freeze(value);
    Object.getOwnPropertyNames(value).forEach(prop => {
      prop === 'constructor' || deepFreeze(value[prop]);
    });
  }
  return value;
};
