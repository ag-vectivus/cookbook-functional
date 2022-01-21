import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import AuthWrapper from '../../components/Forms/AuthWrapper';
import AuthFooter from '../../components/Forms/AuthFooter';
import FormInput from '../../components/Forms/FormInput';
import getData from '../../api/getData';
import postCredentials from '../../api/postCredentials';
import endpoints from '../../config/endpoints';
import formProps from '../../config/formProps';
import messages from '../../config/messages';
import IInputProps from '../../ts/interfaces/IInputProps';

const SignUp = (): JSX.Element => {
  const title = 'sign up';
  const redirect = useNavigate();

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth.uid !== 'init') {
      redirect('/');
    }
  }, [auth]);

  useEffect(() => {
    if (message === messages.AccountCreated) {
      setTimeout(() => {
        redirect('/signin');
      }, 3000);
    }
  }, [message]);

  useEffect(() => {
    setMessage('');
  }, [login, email, password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const credentials = postCredentials({ login, email, password });

    getData(`${endpoints.server}/signup`, credentials)
      .then((res) => setMessage(res.message))
      .catch((err) => setMessage(err.message));
  };

  const loginProps: IInputProps = { handleData: setLogin, ...formProps.login };
  const emailProps: IInputProps = { handleData: setEmail, ...formProps.email };
  const passwordProps: IInputProps = {
    handleData: setPassword,
    ...formProps.password,
  };

  return (
    <AuthWrapper title={title}>
      <form
        className="col s12 push-m2 m8 push-xl3 xl6 auth__form"
        onSubmit={(e: React.FormEvent) => handleSubmit(e)}
      >
        <FormInput inputProps={loginProps} />
        <FormInput inputProps={emailProps} />
        <FormInput inputProps={passwordProps} />
        <AuthFooter title={title} message={message} />
      </form>
    </AuthWrapper>
  );
};

export default SignUp;
