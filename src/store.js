import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import signInReducer from 'src/pages/sing-in/reduce';
import signUpReducer from "./pages/sing-up/reduce";

const rootReducer = combineReducers({
  signIn: signInReducer,
  singUp: signUpReducer
});

const logger = createLogger({
  collapsed: true
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
