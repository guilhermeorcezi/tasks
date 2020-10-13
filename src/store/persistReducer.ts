import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import rootReducer from './ducks/rootReducer';

const persistedReducer = persistReducer(
  {
    key: 'tasks',
    storage,
    whitelist: ['auth', 'user', 'tasks'],
  },
  rootReducer,
);

export default persistedReducer;
