import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import signInReducer from 'src/pages/sing-in/reduce';

const rootReducer = combineReducers({
  signIn: signInReducer
});

const logger = createLogger({
  collapsed: true
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
