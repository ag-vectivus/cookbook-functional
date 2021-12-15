const pathParser = (path: string): string[] => {
  const dividedPath: string[] = path.split('/');
  const result: string[] = dividedPath.filter((element) => element !== '');
  return result;
};

export default pathParser;
