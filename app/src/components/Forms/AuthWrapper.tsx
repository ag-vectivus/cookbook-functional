import React, { ReactNode } from 'react';
import MainSection from '../Sections/MainSection';
import AuthLinks from '../AuthLinks';

const AuthWrapper = (props: {
  children: ReactNode;
  title: string;
}): JSX.Element => {
  const { children, title } = props;

  return (
    <div className="auth valign-wrapper">
      <div className="container">
        <div className="auth__container">
          <MainSection title={title}>
            <div className="row">{children}</div>
            <div className="row">
              <AuthLinks title={title} />
            </div>
          </MainSection>
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
