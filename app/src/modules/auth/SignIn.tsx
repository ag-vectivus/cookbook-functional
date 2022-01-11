import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import AuthWrapper from '../../components/Forms/AuthWrapper';
import AuthPassword from '../../components/Forms/AuthPassword';
import AuthEmail from '../../components/Forms/AuthEmail';
import endpoints from '../../config/endpoints';
import getData from '../../api/getData';
import AuthFooter from '../../components/Forms/AuthFooter';
import postCredentials from '../../api/postCredentials';

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

  return (
    <AuthWrapper title={title}>
      <form
        className="col s12 push-m2 m8 push-xl3 xl6"
        onSubmit={(e: React.FormEvent) => handleSubmit(e)}
      >
        <AuthEmail handleChildData={setEmail} />
        <AuthPassword handleChildData={setPassword} />
        <AuthFooter title={title} message={message} />
      </form>
    </AuthWrapper>
  );
};

export default SignIn;
