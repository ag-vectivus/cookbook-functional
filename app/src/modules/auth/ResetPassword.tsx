import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import AuthWrapper from '../../components/Forms/AuthWrapper';
import FormFooter from '../../components/Forms/FormFooter';
import FormInput from '../../components/Forms/FormInput';
import endpoints from '../../config/endpoints';
import formProps from '../../config/formProps';
import getData from '../../api/getData';
import postCredentials from '../../api/postCredentials';
import IInputProps from '../../ts/interfaces/IInputProps';
import IFormFooterProps from '../../ts/interfaces/IFormFooterProps';

const ResetPassword = (): JSX.Element => {
  const redirect = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { auth } = useContext(AuthContext);
  const title = 'reset password';

  useEffect(() => {
    if (auth.uid !== 'init') {
      redirect('/');
    }
  }, [auth]);

  useEffect(() => {
    setMessage('');
  }, [email]);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const credentials = postCredentials({ email });
    getData(`${endpoints.server}/resetpassword`, credentials)
      .then((res) => setMessage(res.message))
      .catch((err) => setMessage(err.message));
  };

  const emailProps: IInputProps = { handleData: setEmail, ...formProps.email };
  const footerProps: IFormFooterProps = { title, message };

  return (
    <AuthWrapper title={title}>
      <form
        className="col s12 push-m2 m8 push-xl3 xl6 auth__form"
        onSubmit={(e: React.FormEvent) => handleSubmit(e)}
      >
        <FormInput inputProps={emailProps} />
        <FormFooter formFooterProps={footerProps} />
      </form>
    </AuthWrapper>
  );
};

export default ResetPassword;
