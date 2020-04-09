import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import appReducer from 'src/app/reducer.js';
import signInReducer from 'src/pages/sing-in/reduce.js';

const rootReducer = combineReducers({
  appReducer,
  signInReducer
});

const logger = createLogger({
  collapsed: true
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
