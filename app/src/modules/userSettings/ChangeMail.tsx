import React, { useState, useEffect } from 'react';
import AuthFooter from '../../components/Forms/AuthFooter';
import FormInput from '../../components/Forms/FormInput';
import getData from '../../api/getData';
import postCredentials from '../../api/postCredentials';
import endpoints from '../../config/endpoints';
import formProps from '../../config/formProps';
import messages from '../../config/messages';
import labels from '../../config/labels';
import isStrictEqual from '../../helpers/isStrictEqual';
import IAuth from '../../ts/interfaces/IAuth';
import IInputProps from '../../ts/interfaces/IInputProps';

const ChangeMail = (props: { auth: IAuth }): JSX.Element => {
  const [email, setEmail] = useState('');
  const [repeatedEmail, setRepeatedEmail] = useState('');
  const [message, setMessage] = useState('');
  const { uid } = props.auth;
  const title = 'confirm';

  useEffect(() => {
    setMessage('');
  }, [email, repeatedEmail]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const compare = isStrictEqual(email, repeatedEmail);
    if (compare) {
      const credentials = postCredentials({ uid, email, order: 'email' });
      getData(`${endpoints.server}/settings`, credentials)
        .then((res) => setMessage(res.message))
        .catch((err) => setMessage(err.message));
    } else {
      setMessage(messages.ValuesNotEqual);
    }
  };

  const emailProps: IInputProps = {
    handleData: setEmail,
    ...formProps.email,
    label: labels.email[0],
  };
  const repeatedEmailProps: IInputProps = {
    handleData: setRepeatedEmail,
    ...formProps.email,
    label: labels.email[1],
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
            <FormInput inputProps={emailProps} />
            <FormInput inputProps={repeatedEmailProps} />
            <AuthFooter title={title} message={message} />
          </form>
        </div>
      </div>
    </li>
  );
};

export default ChangeMail;
