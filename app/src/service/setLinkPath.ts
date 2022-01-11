const setLinkPath = (
  pathElementsNumber: number,
  category: string,
  id: string
): string => {
  let url: string;
  pathElementsNumber === 1
    ? (url = `./${category}`)
    : (url = `/recipes/${category}/${id}`);
  return url.toLocaleLowerCase();
};

export default setLinkPath;
