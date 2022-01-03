const getDataWithOptions = async (endpoint: string, options: any) => {
  const response: Response = await fetch(endpoint, options);
  const data = await response.json();
  return data;
};

export default getDataWithOptions;
