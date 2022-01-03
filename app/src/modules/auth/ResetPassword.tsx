import React from 'react';

// components
import AuthButton from '../../components/Forms/AuthButton';
import AuthEmail from '../../components/Forms/AuthEmail';
import AuthWrapper from '../../components/Forms/AuthWrapper';

const ResetPassword = () => {
  const title = 'reset password';

  return (
    <AuthWrapper title={title}>
      <form className="col s12 push-m2 m8 push-xl3 xl6 auth__form">
        <AuthEmail />
        <AuthButton title={title} />
      </form>
    </AuthWrapper>
  );
};

export default ResetPassword;
