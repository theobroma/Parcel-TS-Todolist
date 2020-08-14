import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './@store/index';

const configureStore = () => {
  const persistConfig = {
    key: 'root',
    storage,
    // Persist just 'todos' reducer data
    whitelist: ['todos'],
  };

  const pReducer = persistReducer(persistConfig, rootReducer);

  const logger = createLogger({
    collapsed: true,
  });

  const middlewares = [thunk, logger];

  const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

  const store = createStore(
    pReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return store;
};

export const store = configureStore();

export const persistor = persistStore(store);

export default { store, persistor };
