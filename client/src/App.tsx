import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MainAppContainer from './#/#/Main';
import { persistor, store } from './configureStore';
import { LoadingView } from './@components/LoadingView';

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
