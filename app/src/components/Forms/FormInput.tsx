import React from 'react';
import IInputProps from '../../ts/interfaces/IInputProps';

const FormInput = (props: { inputProps: IInputProps }): JSX.Element => {
  const { id, icon, type, label, handleData, required } = props.inputProps;

  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    if (id.match(/ingredient/i)) {
      const key = `ingredient${id.slice(10)}`;
      handleData({ number: id.slice(10), [key]: target.value });
    } else {
      handleData(target.value);
    }
  };

  return (
    <div className="input-field">
      {icon !== undefined ? (
        <i className="material-icons prefix">{icon}</i>
      ) : null}
      {id !== 'textarea' ? (
        <input
          id={id}
          type={type}
          className="validate"
          onChange={(e) => handleChange(e)}
          required={required === undefined ? true : required}
        />
      ) : (
        <textarea
          id={id}
          className="materialize-textarea"
          onChange={(e) => handleChange(e)}
          required={required === undefined ? true : required}
        />
      )}
      <label htmlFor={id}>
        {required === undefined ? '*' : ''}
        {label}
      </label>
    </div>
  );
};

export default FormInput;
