import React, { createContext, useReducer, useEffect, Dispatch } from 'react';
import { AuthReducer } from '../reducers/AuthReducer';

// interfaces
import IAuth from '../ts/interfaces/IAuth';
import IAuthAction from '../ts/interfaces/IAuthAction';

// type aliases
type ContextType = {
  auth: IAuth;
  dispatchAuth: Dispatch<IAuthAction>;
};

// create context
const initAuth: IAuth = { uid: 'init' };

export const AuthContext = createContext<ContextType>({
  auth: initAuth,
  dispatchAuth: null!,
});

const AuthContextProvider: React.FC = ({ children }) => {
  const [auth, dispatchAuth] = useReducer(AuthReducer, initAuth);

  useEffect(() => {
    const localData = localStorage.getItem('auth');
    if (localData !== null) {
      dispatchAuth({ type: 'GET_AUTH_UID', uid: JSON.parse(localData).uid });
    } else {
      dispatchAuth({ type: 'GET_AUTH_UID', uid: 'init' });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
