import isStrictEqual from '../../helpers/isStrictEqual';

test('should return true if given strings are equal', () => {
  const valueOne = 'spock@mock.com';
  const valueTwo = 'spocks@mock.com';

  let compare = isStrictEqual(valueOne, valueOne);
  expect(compare).toBeTruthy();

  compare = isStrictEqual(valueOne, valueTwo);
  expect(compare).toBeFalsy();
});
