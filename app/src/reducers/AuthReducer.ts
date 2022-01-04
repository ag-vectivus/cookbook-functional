import IAuth from '../ts/interfaces/IAuth';
import IIndexable from '../ts/interfaces/IIndexable';
import IAuthAction from '../ts/interfaces/IAuthAction';

const strategies: IIndexable = {
  GET_AUTH_UID: getAuthUid,
  LOG_OUT: logOut,
  __default__: (state: IAuth) => state,
};

export const AuthReducer = (state: IAuth, action: IAuthAction) => {
  const transformer = strategies[action.type] ?? strategies.__default__;
  return transformer(state, action);
};

function getAuthUid(state: IAuth, action: IAuthAction) {
  const auth: IAuth = { uid: action.uid };
  return auth;
}

function logOut(state: IAuth, action: IAuthAction) {
  const auth: IAuth = { uid: action.uid };
  return auth;
}
