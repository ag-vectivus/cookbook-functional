import React from 'react';
import AuthButton from './AuthButton';

type Props = {
  title: string;
  message: string;
};

const AuthFooter = ({ ...props }: Props): JSX.Element => {
  const { title, message } = props;
  return (
    <div className="row valign-wrapper">
      <div className="col s6">
        <AuthButton title={title} />
      </div>
      <div className="col s6 orange-text text-darken-4">
        {message.length > 0 ? (
          <p data-testid="request-message">{message}</p>
        ) : null}
      </div>
    </div>
  );
};

export default AuthFooter;
