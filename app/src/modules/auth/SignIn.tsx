import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import AuthButton from '../../components/Forms/AuthButton';
import AuthWrapper from '../../components/Forms/AuthWrapper';
import AuthPassword from '../../components/Forms/AuthPassword';
import AuthEmail from '../../components/Forms/AuthEmail';
import endpoints from '../../config/endpoints';
import getDataWithOptions from '../../api/getDataWithOptions';

const SignIn = () => {
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
    const credentials = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    getDataWithOptions(`${endpoints.server}/signin`, credentials)
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
        <div className="row valign-wrapper">
          <div className="col s6">
            <AuthButton title={title} />
          </div>
          <div className="col s6 orange-text text-darken-4">
            {message.length > 0 ? (
              <p data-testid="error-message">{message}</p>
            ) : null}
          </div>
        </div>
      </form>
    </AuthWrapper>
  );
};

export default SignIn;
