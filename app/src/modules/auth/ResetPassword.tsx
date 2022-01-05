import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import AuthEmail from '../../components/Forms/AuthEmail';
import AuthWrapper from '../../components/Forms/AuthWrapper';
import endpoints from '../../config/endpoints';
import getData from '../../api/getData';
import AuthFooter from '../../components/Forms/AuthFooter';
import postCredentials from '../../api/postCredentials';

const ResetPassword = () => {
  const title = 'reset password';
  const redirect = useNavigate();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth.uid !== 'init') {
      redirect('/');
    }
  }, [auth]);

  useEffect(() => {
    setMessage('');
  }, [email]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const credentials = postCredentials({ email });

    getData(`${endpoints.server}/resetpassword`, credentials)
      .then((res) => setMessage(res.message))
      .catch((err) => setMessage(err.message));
  };

  return (
    <AuthWrapper title={title}>
      <form
        className="col s12 push-m2 m8 push-xl3 xl6 auth__form"
        onSubmit={(e: React.FormEvent) => handleSubmit(e)}
      >
        <AuthEmail handleChildData={setEmail} />
        <AuthFooter title={title} message={message} />
      </form>
    </AuthWrapper>
  );
};

export default ResetPassword;
