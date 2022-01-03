import React from 'react';
import { Link } from 'react-router-dom';

const AuthLinks = (props: { title: string }) => {
  const { title } = props;

  return (
    <div className="auth__links col s12 push-m2 m8 push-xl3 xl6">
      <Link
        to={'/'}
        className={`auth__link ${
          title === 'sign in' ? '' : 'auth__link--border'
        }`}
      >
        Home page
      </Link>
      {title === 'sign in' ? (
        <React.Fragment>
          <Link to={'/resetpassword'} className="auth__link">
            Reset Password
          </Link>
          <Link to={'/signup'} className="auth__link auth__link--border">
            Create Account
          </Link>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default AuthLinks;
