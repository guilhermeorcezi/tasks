export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/sign_in_request',
  SIGN_IN_SUCCESS = '@auth/sign_in_success',
  SIGN_IN_FAILURE = '@auth/sign_in_failure',
  SIGN_UP_REQUEST = '@auth/sign_up_request',
  SIGN_OUT = '@auth/sign_out',
}

export interface User {
  name: string;
  email: string;
  password: string;
  birthdayDate: Date;
  cpf: string;
}

export interface AuthState {
  token: string | null;
  loading: boolean;
  signed: boolean;
}
