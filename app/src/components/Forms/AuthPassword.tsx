import React from 'react';

const AuthPassword = ({ ...props }) => {
  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    props.handleChildData(target.value);
  };

  return (
    <div className="input-field">
      <i className="material-icons prefix">password</i>
      <input
        id="password"
        type="password"
        className="validate"
        onChange={(e) => handleChange(e)}
        required
      />
      <label htmlFor="password">Password</label>
    </div>
  );
};

export default AuthPassword;
