import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MainAppContainer from './#/#/Main';
import configureStore, { persistor, store } from './configureStore';
import { LoadingView } from './@components/LoadingView';

// const store = configureStore();

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={<LoadingView />} persistor={persistor}>
          <MainAppContainer />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}
