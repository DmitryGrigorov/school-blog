import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import applicationReducer from 'src/app/reducer';
import signInReducer from 'src/pages/sign-in/reducer';
import signUpReducer from 'src/pages/sign-up/reducer';

const rootReducer = combineReducers({
  applicationReducer: applicationReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
});

const logger = createLogger({
  collapsed: true
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
