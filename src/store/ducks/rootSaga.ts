import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from './auth/types';
import { signIn, signUp, setToken, signOut } from './auth/sagas';

import { TasksTypes } from './tasks/types';
import { addTask, editTask, removeTask, alterTaskStatus } from './tasks/sagas';

export default function* rootSaga(): any {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(TasksTypes.ADD_TASK_REQUEST, addTask),
    takeLatest(TasksTypes.EDIT_TASK_REQUEST, editTask),
    takeLatest(TasksTypes.REMOVE_TASK, removeTask),
    takeLatest(TasksTypes.ALTER_TASK_STATUS, alterTaskStatus),
    takeLatest('persist/REHYDRATE', setToken),
  ]);
}
