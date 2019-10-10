import { createStore, combineReducers } from 'redux';
import { featureReducer } from './reducers/featureReducer';

const reducers = combineReducers({
  feature: featureReducer
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
