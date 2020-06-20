import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import throttle from 'lodash/throttle';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './@utils/localStorage';
// import rootReducer from './reducer';
import { rootReducer, RootState } from './@store/index';
import { FilterType } from './@store/types';
// mock data
// import MOCK_DATA from './helpers/MOCK_DATA.json';

const configureStore = () => {
  const persistedState = loadState();

  let totalInitialState: RootState = {
    filter: 'SHOW_ALL',
    todos: {
      data: [],
    },
  };
  // if persistedState is not empty then assign parsed persistedState to initState
  if (persistedState) {
    totalInitialState = persistedState;
  }

  const logger = createLogger({
    collapsed: true,
  });

  const middlewares = [thunk, logger];

  const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

  const store = createStore(
    rootReducer,
    totalInitialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  store.subscribe(
    throttle(() => {
      console.log('saved to localStorage');
      saveState(store.getState());
    }, 1000),
  );

  return store;
};

export default configureStore;
