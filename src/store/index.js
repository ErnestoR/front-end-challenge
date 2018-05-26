import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import modules from '../modules';

const configureStore = () => {
  const persistedState = {};

  const store = createStore(
    modules,
    persistedState,
    composeWithDevTools(applyMiddleware(ReduxThunk))
  );

  return store;
};

export default configureStore;
