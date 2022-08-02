import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/redux';
import ToDo from './src/ToDo';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToDo />
      </PersistGate>
    </Provider>
  );
};

export default App;
