import { Reducer } from 'redux';
import { ProfileState } from './types';
import { AuthTypes } from '../auth/types';

const INITIAL_STATE: ProfileState = {
  profile: null,
};

const reducer: Reducer<ProfileState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_SUCCESS:
      return {
        profile: {
          name: action.payload.name,
          email: action.payload.email,
          token: action.payload.token,
        },
      };
    case AuthTypes.SIGN_OUT:
      return { profile: null };
    default:
      return state;
  }
};

export default reducer;
