import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import AuthButton from '../../components/Forms/AuthButton';
import AuthEmail from '../../components/Forms/AuthEmail';
import AuthWrapper from '../../components/Forms/AuthWrapper';
import endpoints from '../../config/endpoints';
import getDataWithOptions from '../../api/getDataWithOptions';

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
    const credentials = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
      }),
    };

    getDataWithOptions(`${endpoints.server}/resetpassword`, credentials)
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

export default ResetPassword;
