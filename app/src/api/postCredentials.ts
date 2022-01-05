import ICredentials from '../ts/interfaces/ICredentials';

const postCredentials = ({ ...params }): ICredentials => {
  const body: string = JSON.stringify(params);
  const credentials: ICredentials = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  };

  return credentials;
};

export default postCredentials;
