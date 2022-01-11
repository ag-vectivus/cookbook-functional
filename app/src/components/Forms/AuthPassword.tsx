import React from 'react';
import AuthProps from '../../ts/types/AuthProps';

const AuthPassword = ({ ...props }: AuthProps): JSX.Element => {
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
