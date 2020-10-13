import { action } from 'typesafe-actions';
import { AuthTypes, User } from './types';

export const sign_in_request = (email: string, password: string) =>
  action(AuthTypes.SIGN_IN_REQUEST, { email, password });

export const sign_in_success = (email: string, name: string, token: string) =>
  action(AuthTypes.SIGN_IN_SUCCESS, { email, name, token });

export const sign_in_failure = () => action(AuthTypes.SIGN_IN_FAILURE);

export const sign_up_request = (User: User) =>
  action(AuthTypes.SIGN_UP_REQUEST, User);

export const sign_out = () => action(AuthTypes.SIGN_OUT);
