import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import AuthWrapper from '../../components/Forms/AuthWrapper';
import AuthFooter from '../../components/Forms/AuthFooter';
import FormInput from '../../components/Forms/FormInput';
import formProps from '../../config/formProps';
import endpoints from '../../config/endpoints';
import getData from '../../api/getData';
import postCredentials from '../../api/postCredentials';
import IInputProps from '../../ts/interfaces/IInputProps';

const SignIn = (): JSX.Element => {
  const title = 'sign in';
  const redirect = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { auth, dispatchAuth } = useContext(AuthContext);

  useEffect(() => {
    if (auth.uid !== 'init') {
      redirect('/');
    }
  }, [auth]);

  useEffect(() => {
    setMessage('');
  }, [email, password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const credentials = postCredentials({ email, password });

    getData(`${endpoints.server}/signin`, credentials)
      .then((res) => {
        dispatchAuth({ type: 'GET_AUTH_UID', uid: res.uid });
      })
      .catch((err) => setMessage(err.message));
  };

  const emailProps: IInputProps = { handleData: setEmail, ...formProps.email };
  const passwordProps: IInputProps = {
    handleData: setPassword,
    ...formProps.password,
  };

  return (
    <AuthWrapper title={title}>
      <form
        className="col s12 push-m2 m8 push-xl3 xl6"
        onSubmit={(e: React.FormEvent) => handleSubmit(e)}
      >
        <FormInput inputProps={emailProps} />
        <FormInput inputProps={passwordProps} />
        <AuthFooter title={title} message={message} />
      </form>
    </AuthWrapper>
  );
};

export default SignIn;
