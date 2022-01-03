import React from 'react';

// components
import AuthButton from '../../components/Forms/AuthButton';
import AuthWrapper from '../../components/Forms/AuthWrapper';
import AuthPassword from '../../components/Forms/AuthPassword';
import AuthEmail from '../../components/Forms/AuthEmail';

const SignIn = () => {
  const title = 'sign in';

  return (
    <AuthWrapper title={title}>
      <form className="col s12 push-m2 m8 push-xl3 xl6 auth__form">
        <AuthEmail />
        <AuthPassword />
        <AuthButton title={title} />
      </form>
    </AuthWrapper>
  );
};

export default SignIn;
