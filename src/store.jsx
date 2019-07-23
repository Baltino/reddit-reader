import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';
import middleware from './middleware';


const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  ...reducers,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));
  const persistor = persistStore(store);
  return { store, persistor };
};