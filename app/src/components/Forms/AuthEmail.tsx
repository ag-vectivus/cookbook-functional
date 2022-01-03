import React from 'react';

const AuthEmail = () => {
  return (
    <div className="input-field">
      <i className="material-icons prefix">email</i>
      <input id="email" type="email" className="validate" />
      <label htmlFor="email">Email</label>
    </div>
  );
};

export default AuthEmail;
