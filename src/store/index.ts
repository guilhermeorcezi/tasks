import { persistStore } from 'redux-persist';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import persistedReducers from './persistReducer';

import { AuthState } from './ducks/auth/types';
import { ProfileState } from './ducks/user/types';
import { TaskState } from './ducks/tasks/types';

import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  auth: AuthState;
  user: ProfileState;
  tasks: TaskState;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducers, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
