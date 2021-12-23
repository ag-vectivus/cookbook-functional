const setLinkPath = (
  pathElementsNumber: number,
  category: string,
  id: string
) => {
  let url: string;
  switch (pathElementsNumber) {
    case 1:
      url = `./${category}`;
      break;
    default:
      url = `/recipes/${category}/${id}`;
      break;
  }
  return url.toLocaleLowerCase();
};

export default setLinkPath;
