import React from 'react';
import AuthProps from '../../ts/types/AuthProps';

const AuthEmail = ({ ...props }: AuthProps): JSX.Element => {
  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    props.handleChildData(target.value);
  };

  return (
    <div className="input-field">
      <i className="material-icons prefix">email</i>
      <input
        id="email"
        type="email"
        className="validate"
        onChange={(e) => handleChange(e)}
        required
      />
      <label htmlFor="email">Email</label>
    </div>
  );
};

export default AuthEmail;
