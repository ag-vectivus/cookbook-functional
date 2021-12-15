const setLinkPath = (
  pathElementsNumber: number,
  category: string,
  id: string
) => {
  let url: string;
  switch (pathElementsNumber) {
    case 1:
      url = `/${category}/${id}`;
      break;
    case 2:
      url = `/${id}`;
      break;
    default:
      url = `/recipes/${category}/${id}`;
      break;
  }
  return url.toLocaleLowerCase();
};

export default setLinkPath;
