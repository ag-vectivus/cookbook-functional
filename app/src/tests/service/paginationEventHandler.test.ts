import paginationEventHandler from '../../service/paginationEventHandler';

test('should change number when clicked', () => {
  const pages = [1, 2, 3, 4, 5];

  let currentPage = paginationEventHandler('chevron_right', 2, pages);
  expect(currentPage).toBe(3);

  currentPage = paginationEventHandler('chevron_right', 5, pages);
  expect(currentPage).toBe(5);

  currentPage = paginationEventHandler('first_page', 4, pages);
  expect(currentPage).toBe(1);

  currentPage = paginationEventHandler('last_page', 4, pages);
  expect(currentPage).toBe(5);

  currentPage = paginationEventHandler('chevron_left', 4, pages);
  expect(currentPage).toBe(3);
});
