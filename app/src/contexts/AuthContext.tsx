import React, { createContext, useReducer, useEffect, Dispatch } from 'react';
import endpoints from '../config/endpoints';
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
export const AuthContext = createContext<ContextType>(null!);

const initAuth: IAuth = { uid: 'init' };

const AuthContextProvider: React.FC = ({ children }) => {
  const [auth, dispatchAuth] = useReducer(AuthReducer, initAuth);

  return (
    <AuthContext.Provider value={{ auth, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
