import { put } from 'redux-saga/effects';
import { uuid } from 'uuidv4';
import { toast } from 'react-toastify';
import { User } from './types';

import { sign_in_success, sign_in_failure } from './actions';

import history from '../../../services/history';

interface ISignIn {
  type: string;
  payload: {
    email: string;
    password: string;
  };
}

interface ISignUp {
  type: string;
  payload: User;
}

interface IToken {
  type: string;
  payload: {
    name: string;
    email: string;
    token: string;
  };
}

export function* signIn({ payload }: ISignIn): any {
  try {
    const userExists = localStorage.getItem(JSON.stringify(payload.email));

    if (userExists) {
      const existingUser = JSON.parse(userExists);

      if (payload.password === existingUser.password) {
        const token = uuid();

        yield put(sign_in_success(payload.email, existingUser.name, token));

        const userSession = {
          name: existingUser.name,
          email: payload.email,
          token: uuid(),
        };

        localStorage.setItem(`@Tasks/Session`, JSON.stringify(userSession));

        history.push('/tasks');
      } else {
        toast.error('Email ou senha incorretos');
      }
    } else {
      toast.error('Email ou senha incorretos');
    }
  } catch (err) {
    toast.error('Erro inesperado. Tente novamente.');
    yield put(sign_in_failure());
  }
}

export function signUp({ payload }: ISignUp): any {
  try {
    const userExists = localStorage.getItem(JSON.stringify(payload.email));

    if (userExists) {
      toast.error('email já cadastrado.');
    } else {
      localStorage.setItem(
        `${JSON.stringify(payload.email)}`,
        JSON.stringify(payload),
      );
      toast.success('Cadastro realizado com sucesso.');
      history.push('/signin');
    }
  } catch (err) {
    toast.error('Erro inesperado. Tente novamente.');
  }
}

export function setToken({ payload }: IToken): any {
  if (!payload) {
    return;
  }

  localStorage.setItem(`@Tasks/Session`, JSON.stringify(payload));
}

export function signOut(): void {
  localStorage.setItem(`@Tasks/Session`, '');
  history.push('/');
}
