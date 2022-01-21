import React, { useState, useEffect } from 'react';
import getData from '../../api/getData';
import FormFooter from '../../components/Forms/FormFooter';
import FormInput from '../../components/Forms/FormInput';
import endpoints from '../../config/endpoints';
import formProps from '../../config/formProps';
import messages from '../../config/messages';
import labels from '../../config/labels';
import postCredentials from '../../api/postCredentials';
import isStrictEqual from '../../helpers/isStrictEqual';
import IAuth from '../../ts/interfaces/IAuth';
import IInputProps from '../../ts/interfaces/IInputProps';
import IFormFooterProps from '../../ts/interfaces/IFormFooterProps';

const ChangePassword = (props: { auth: IAuth }): JSX.Element => {
  const [password, setPassword] = useState('');
  const [repeated, setRepeated] = useState('');
  const [message, setMessage] = useState('');
  const { uid } = props.auth;

  useEffect(() => {
    setMessage('');
  }, [password, repeated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const compare = isStrictEqual(password, repeated);
    if (compare) {
      const credentials = postCredentials({ uid, password, order: 'password' });
      getData(`${endpoints.server}/settings`, credentials)
        .then((res) => setMessage(res.message))
        .catch((err) => setMessage(err.message));
    } else {
      setMessage(messages.ValuesNotEqual);
    }
  };

  const passwordProps: IInputProps = {
    handleData: setPassword,
    ...formProps.password,
    label: labels.password[0],
  };
  const repeatedProps: IInputProps = {
    handleData: setRepeated,
    ...formProps.password,
    label: labels.password[1],
  };
  const footerProps: IFormFooterProps = { title: 'confirm', message };

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
            <FormInput inputProps={passwordProps} />
            <FormInput inputProps={repeatedProps} />
            <FormFooter formFooterProps={footerProps} />
          </form>
        </div>
      </div>
    </li>
  );
};

export default ChangePassword;
