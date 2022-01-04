import React from 'react';

const AuthLogin = ({ ...props }) => {
  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    props.handleChildData(target.value);
  };

  return (
    <div className="input-field">
      <i className="material-icons prefix">portrait</i>
      <input
        id="login"
        type="text"
        className="validate"
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="login">Login</label>
    </div>
  );
};

export default AuthLogin;
