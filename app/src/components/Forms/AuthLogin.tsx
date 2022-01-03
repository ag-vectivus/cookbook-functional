import React from 'react';

const AuthLogin = () => {
  return (
    <div className="input-field">
      <i className="material-icons prefix">portrait</i>
      <input id="login" type="text" className="validate" />
      <label htmlFor="login">Login</label>
    </div>
  );
};

export default AuthLogin;
