import React, { useState, useEffect } from 'react';
import getData from '../../api/getData';
import postCredentials from '../../api/postCredentials';
import FormFooter from '../../components/Forms/FormFooter';
import endpoints from '../../config/endpoints';
import IAuth from '../../ts/interfaces/IAuth';
import IFormFooterProps from '../../ts/interfaces/IFormFooterProps';

const DeleteAccount = (props: { auth: IAuth }): JSX.Element => {
  const [message, setMessage] = useState('');
  const { uid } = props.auth;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const credentials = postCredentials({ uid, order: 'delete' });

    getData(`${endpoints.server}/settings`, credentials)
      .then((res) => setMessage(res.message))
      .catch((err) => setMessage(err.message));
  };

  const footerProps: IFormFooterProps = { title: 'confirm', message };

  return (
    <li>
      <div className="collapsible-header">
        <i className="material-icons">delete</i>
        Delete account
      </div>
      <div className="collapsible-body">
        <div className="row">
          <form
            className="col auth__form"
            onSubmit={(e: React.FormEvent) => handleSubmit(e)}
          >
            <p>Do you want to delete your account?</p>
            <p>Deleted account cannot be restored.</p>
            <FormFooter formFooterProps={footerProps} />
          </form>
        </div>
      </div>
    </li>
  );
};

export default DeleteAccount;
