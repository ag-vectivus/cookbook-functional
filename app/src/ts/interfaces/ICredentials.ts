export default interface ICredentials {
  method: string;
  headers: {
    'Content-Type': string;
  };
  body: string;
}
