import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

// components
import AuthButton from '../../components/Forms/AuthButton';
import AuthWrapper from '../../components/Forms/AuthWrapper';
import AuthPassword from '../../components/Forms/AuthPassword';
import AuthEmail from '../../components/Forms/AuthEmail';
import AuthLogin from '../../components/Forms/AuthLogin';

// config
import endpoints from '../../config/endpoints';

// api
import getDataWithOptions from '../../api/getDataWithOptions';
import messages from '../../config/messages';

const SignUp = () => {
  const title = 'sign up';
  const redirect = useNavigate();

  const [login, setLogin] = useState('');
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
    const credentials = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login,
        email,
        password,
      }),
    };

    getDataWithOptions(`${endpoints.server}/signup`, credentials)
      .then((res) => setMessage(res.message))
      .catch((err) => setMessage(err.message));
  };

  return (
    <AuthWrapper title={title}>
      <form
        className="col s12 push-m2 m8 push-xl3 xl6 auth__form"
        onSubmit={(e: React.FormEvent) => handleSubmit(e)}
      >
        <AuthLogin handleChildData={setLogin} />
        <AuthEmail handleChildData={setEmail} />
        <AuthPassword handleChildData={setPassword} />
        <div className="row valign-wrapper">
          <div className="col s6">
            <AuthButton title={title} />
          </div>
          <div className="col s6 orange-text text-darken-4">
            {message.length > 0 ? (
              <p data-testid="request-message">{message}</p>
            ) : null}
          </div>
        </div>
      </form>
    </AuthWrapper>
  );
};

export default SignUp;
