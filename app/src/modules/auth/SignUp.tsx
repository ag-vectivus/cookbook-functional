import React from 'react';

// components
import AuthWrapper from '../../components/AuthWrapper';

const SignUp = () => {
  return (
    <AuthWrapper title="sign up">
      <form className="col s12 push-m2 m8 push-xl3 xl6 auth__form">
        <div className="input-field">
          <i className="material-icons prefix">portrait</i>
          <input id="login" type="text" className="validate" />
          <label htmlFor="login">Login</label>
        </div>
        <div className="input-field">
          <i className="material-icons prefix">email</i>
          <input id="email" type="email" className="validate" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <i className="material-icons prefix">password</i>
          <input id="password" type="password" className="validate" />
          <label htmlFor="password">Password</label>
        </div>
        <button
          type="submit"
          className="aside__button btn-large waves-effect waves-light orange darken-2"
        >
          Sign up
        </button>
      </form>
    </AuthWrapper>
  );
};

export default SignUp;
