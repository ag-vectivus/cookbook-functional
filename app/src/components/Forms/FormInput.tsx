import React from 'react';
import IInputProps from '../../ts/interfaces/IInputProps';

const FormInput = (props: { inputProps: IInputProps }): JSX.Element => {
  const { id, icon, type, label, handleData } = props.inputProps;

  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    handleData(target.value);
  };

  return (
    <div className="input-field">
      {icon !== undefined ? (
        <i className="material-icons prefix">{icon}</i>
      ) : null}
      <input
        id={id}
        type={type}
        className="validate"
        onChange={(e) => handleChange(e)}
        required
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FormInput;
