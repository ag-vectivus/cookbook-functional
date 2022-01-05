import ICredentials from '../ts/interfaces/ICredentials';

const getData = async (endpoint: string, options?: ICredentials) => {
  const response: Response = await fetch(endpoint, options);
  const data = await response.json();
  return data;
};

export default getData;
