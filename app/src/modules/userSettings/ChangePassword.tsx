import React, { useState, useEffect } from 'react';
import getData from '../../api/getData';
import postCredentials from '../../api/postCredentials';
import AuthFooter from '../../components/Forms/AuthFooter';
import AuthPassword from '../../components/Forms/AuthPassword';
import endpoints from '../../config/endpoints';
import messages from '../../config/messages';
import isStrictEqual from '../../helpers/isStrictEqual';
import IAuth from '../../ts/interfaces/IAuth';

const ChangePassword = (props: { auth: IAuth }): JSX.Element => {
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [message, setMessage] = useState('');

  const title = 'confirm';
  const order = 'password';
  const labels: [string, string] = ['New password', 'Repeat new password'];
  const { uid } = props.auth;

  useEffect(() => {
    setMessage('');
  }, [password, repeatedPassword]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const compare = isStrictEqual(password, repeatedPassword);

    if (compare) {
      const credentials = postCredentials({ uid, password, order });
      getData(`${endpoints.server}/settings`, credentials)
        .then((res) => setMessage(res.message))
        .catch((err) => setMessage(err.message));
    } else {
      setMessage(messages.ValuesNotEqual);
    }
  };

  return (
    <li>
      <div className="collapsible-header">
        <i className="material-icons">password</i>
        Change password
      </div>
      <div className="collapsible-body">
        <div className="row">
          <form
            className="col auth__form"
            onSubmit={(e: React.FormEvent) => handleSubmit(e)}
          >
            <AuthPassword handleChildData={setPassword} label={labels[0]} />
            <AuthPassword
              handleChildData={setRepeatedPassword}
              label={labels[1]}
            />
            <AuthFooter title={title} message={message} />
          </form>
        </div>
      </div>
    </li>
  );
};

export default ChangePassword;
