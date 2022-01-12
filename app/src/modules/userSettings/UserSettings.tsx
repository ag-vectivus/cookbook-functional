import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import AuthWrapper from '../../components/Forms/AuthWrapper';
import ChangeMail from './ChangeMail';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';
import M from 'materialize-css';

const UserSettings = (): JSX.Element => {
  const title = 'settings';
  const redirect = useNavigate();
  const { auth } = useContext(AuthContext);

  // useEffect(() => {
  //   if (auth.uid === 'init') {
  //     redirect('/');
  //   }
  // }, [auth]);

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <AuthWrapper title={title}>
      <ul className="collapsible col s12 push-m2 m8 push-xl3 xl6">
        <ChangeMail auth={auth} />
        <ChangePassword auth={auth} />
        <DeleteAccount auth={auth} />
      </ul>
    </AuthWrapper>
  );
};

export default UserSettings;
