import setLinkPath from '../../service/setLinkPath';

test('return path based on current location', () => {
  let [number, category, id] = [0, 'beef', '193909'];
  let path = setLinkPath(number, category, id);
  expect(path).toStrictEqual('/recipes/beef/193909');

  [number, category, id] = [1, 'pasta', '19450508'];
  path = setLinkPath(number, category, id);
  expect(path).toStrictEqual('./pasta');
});
