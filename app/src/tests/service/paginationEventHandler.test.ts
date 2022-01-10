import paginationEventHandler from '../../service/paginationEventHandler';

test('should change number when clicked', () => {
  const pages = [1, 2, 3, 4, 5];

  let currentPage = paginationEventHandler('next', 2, pages);
  expect(currentPage).toBe(3);

  currentPage = paginationEventHandler('next', 5, pages);
  expect(currentPage).toBe(5);

  currentPage = paginationEventHandler('first', 4, pages);
  expect(currentPage).toBe(1);

  currentPage = paginationEventHandler('last', 4, pages);
  expect(currentPage).toBe(5);

  currentPage = paginationEventHandler('prev', 4, pages);
  expect(currentPage).toBe(3);
});
