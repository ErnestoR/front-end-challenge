import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import modules from '../modules';

const configureStore = () => {
  const persistedState = {};

  const store = createStore(
    modules,
    persistedState,
    composeWithDevTools()
    // applyMiddleware(...middleware)
    // other store enhancers if any
  );

  return store;
};

export default configureStore;
