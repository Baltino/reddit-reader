import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import ReactDOM from 'react-dom';
import Main from './Main';

import './index.css';


import Store from './store';
import saga from './sagas';
import { sagaMiddleware } from './middleware';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

const { store, persistor } = Store();
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>
);

sagaMiddleware.run(saga);
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
