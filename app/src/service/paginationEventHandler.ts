const paginationEventHandler = (
  order: string,
  selected: number,
  pages: number[]
): number => {
  const { length } = pages;
  const actions = {
    first_page: 1,
    chevron_left: selected - 1 > 0 ? selected - 1 : 1,
    chevron_right: selected + 1 < length ? selected + 1 : length,
    last_page: length,
  };

  switch (order) {
    case 'chevron_left':
      return actions[order];
    case 'chevron_right':
      return actions[order];
    case 'last_page':
      return actions[order];
    default:
      return actions.first_page;
  }
};

export default paginationEventHandler;
