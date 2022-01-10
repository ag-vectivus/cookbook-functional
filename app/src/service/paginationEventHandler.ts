const paginationEventHandler = (
  order: string,
  selected: number,
  pages: number[]
) => {
  const { length } = pages;
  const actions = {
    first: 1,
    prev: selected - 1 > 0 ? selected - 1 : 1,
    next: selected + 1 < length ? selected + 1 : length,
    last: length,
  };

  switch (order) {
    case 'prev':
      return actions[order];
    case 'next':
      return actions[order];
    case 'last':
      return actions[order];
    default:
      return actions.first;
  }
};

export default paginationEventHandler;
