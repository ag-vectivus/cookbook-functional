const getData = async (endpoint: string) => {
  const response: Response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export default getData;
