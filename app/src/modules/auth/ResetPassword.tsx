import React from 'react';

// components
import AuthWrapper from '../../components/AuthWrapper';

const ResetPassword = () => {
  return (
    <AuthWrapper title="reset password">
      <form className="col s12 push-m2 m8 push-xl3 xl6 auth__form">
        <div className="input-field">
          <i className="material-icons prefix">email</i>
          <input id="email" type="email" className="validate" />
          <label htmlFor="email">Email</label>
        </div>
        <button
          type="submit"
          className="aside__button btn-large waves-effect waves-light orange darken-2"
        >
          Reset
        </button>
      </form>
    </AuthWrapper>
  );
};

export default ResetPassword;
