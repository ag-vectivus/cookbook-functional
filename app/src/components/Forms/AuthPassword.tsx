import React from 'react';

const AuthPassword = () => {
  return (
    <div className="input-field">
      <i className="material-icons prefix">password</i>
      <input id="password" type="password" className="validate" />
      <label htmlFor="password">Password</label>
    </div>
  );
};

export default AuthPassword;
