import { createStore, applyMiddleware } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, RootState } from './@store/index';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todos', 'filter'],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const logger = createLogger({
    collapsed: true,
  });

  const middlewares = [thunk, logger];

  const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return store;
};

// const store = configureStore();

export const store = createStore(pReducer);
export const persistor = persistStore(store);

export default { store, persistor };

// export default configureStore;
