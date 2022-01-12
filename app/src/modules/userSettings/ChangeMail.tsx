import React, { useState, useEffect } from 'react';
import getData from '../../api/getData';
import postCredentials from '../../api/postCredentials';
import AuthEmail from '../../components/Forms/AuthEmail';
import AuthFooter from '../../components/Forms/AuthFooter';
import endpoints from '../../config/endpoints';
import messages from '../../config/messages';
import isStrictEqual from '../../helpers/isStrictEqual';
import IAuth from '../../ts/interfaces/IAuth';

const ChangeMail = (props: { auth: IAuth }): JSX.Element => {
  const [email, setEmail] = useState('');
  const [repeatedEmail, setRepeatedEmail] = useState('');
  const [message, setMessage] = useState('');

  const title = 'confirm';
  const order = 'email';
  const labels: [string, string] = ['New email', 'Repeat new email'];
  const { uid } = props.auth;

  useEffect(() => {
    setMessage('');
  }, [email, repeatedEmail]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const compare = isStrictEqual(email, repeatedEmail);

    if (compare) {
      const credentials = postCredentials({ uid, email, order });
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
        <i className="material-icons">email</i>
        Change e-mail
      </div>
      <div className="collapsible-body">
        <div className="row">
          <form
            className="col auth__form"
            onSubmit={(e: React.FormEvent) => handleSubmit(e)}
          >
            <AuthEmail handleChildData={setEmail} label={labels[0]} />
            <AuthEmail handleChildData={setRepeatedEmail} label={labels[1]} />
            <AuthFooter title={title} message={message} />
          </form>
        </div>
      </div>
    </li>
  );
};

export default ChangeMail;
