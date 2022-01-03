import React from 'react';

// components
import AuthButton from '../../components/Forms/AuthButton';
import AuthWrapper from '../../components/Forms/AuthWrapper';
import AuthPassword from '../../components/Forms/AuthPassword';
import AuthEmail from '../../components/Forms/AuthEmail';
import AuthLogin from '../../components/Forms/AuthLogin';

const SignUp = () => {
  const title = 'sign up';

  return (
    <AuthWrapper title={title}>
      <form className="col s12 push-m2 m8 push-xl3 xl6 auth__form">
        <AuthLogin />
        <AuthEmail />
        <AuthPassword />
        <AuthButton title={title} />
      </form>
    </AuthWrapper>
  );
};

export default SignUp;
