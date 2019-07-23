import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Main from './Main';
import './index.css';


import store from './store';
import saga from './sagas';
import { sagaMiddleware } from './middleware';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

sagaMiddleware.run(saga);
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
