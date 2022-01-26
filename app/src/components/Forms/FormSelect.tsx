import React, { useEffect } from 'react';
import { categories } from '../../config/sitemap';
import M from 'materialize-css';
import IInputProps from '../../ts/interfaces/IInputProps';

const FormSelect = (props: { inputProps: IInputProps }): JSX.Element => {
  const { id, label, handleData, required } = props.inputProps;

  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    handleData(target.value);
  };

  return (
    <div className="input-field">
      <select
        id={id}
        required={required === undefined ? true : required}
        onChange={(e) => handleChange(e)}
      >
        <option value="" selected disabled></option>
        {categories.map((category) => {
          return (
            <option value={category} key={`add-form-category-${category}`}>
              {category}
            </option>
          );
        })}
      </select>
      <label htmlFor={id}>
        {required === undefined ? '*' : ''}
        {label}
      </label>
    </div>
  );
};

export default FormSelect;
