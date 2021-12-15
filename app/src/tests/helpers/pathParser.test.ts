import pathParser from '../../helpers/pathParser';

test('pathParser creates array from string', () => {
  const path: string = '/recipes/pasta';
  const result: string[] = pathParser(path);

  expect(result).toHaveLength(2);
  expect(result).toStrictEqual(['recipes', 'pasta']);

  const path2: string = '/recipes/pasta/tagliatelle-with-mascarpone';
  const result2: string[] = pathParser(path2);

  expect(result2).toHaveLength(3);
  expect(result2).toStrictEqual([
    'recipes',
    'pasta',
    'tagliatelle-with-mascarpone',
  ]);
});
