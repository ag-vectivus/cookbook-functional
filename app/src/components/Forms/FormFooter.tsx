import React from 'react';
import IFormFooterProps from '../../ts/interfaces/IFormFooterProps';
import SubmitButton from './SubmitButton';

const FormFooter = (props: {
  formFooterProps: IFormFooterProps;
}): JSX.Element => {
  const { title, message } = props.formFooterProps;

  return (
    <div className="row valign-wrapper">
      <div className="col s6">
        <SubmitButton title={title} />
      </div>
      <div className="col s6 orange-text text-darken-4">
        {message.length > 0 ? (
          <p data-testid="request-message">{message}</p>
        ) : null}
      </div>
    </div>
  );
};

export default FormFooter;
