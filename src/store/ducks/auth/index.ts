import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';

const INITIAL_STATE: AuthState = {
  token: null,
  loading: false,
  signed: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.SIGN_IN_SUCCESS:
      return { ...state, token: action.payload.token, signed: true };
    case AuthTypes.SIGN_OUT:
      return { ...state, signed: false, token: null };
    default:
      return state;
  }
};

export default reducer;
