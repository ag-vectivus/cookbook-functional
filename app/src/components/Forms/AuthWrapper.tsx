import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

// components
import MainSection from '../MainSection';
import AuthLinks from '../AuthLinks';

const AuthWrapper = (props: { children: ReactNode; title: string }) => {
  const { children, title } = props;

  return (
    <div className="auth white valign-wrapper">
      <div className="container">
        <MainSection title={title}>
          <div className="row">{children}</div>
          <AuthLinks title={title} />
        </MainSection>
      </div>
    </div>
  );
};

export default AuthWrapper;
