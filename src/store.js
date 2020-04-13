import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import applicationReducer from 'src/app/reducer';
import signInReducer from 'src/pages/sing-in/reduce';
import signUpReducer from 'src/pages/sign-up/reduce';
import newPostReducer from 'src/pages/new-post/reducer';
import { history } from 'src/history';

const logger = createLogger({
  collapsed: true
});

const middlewares = [
  routerMiddleware(history),
  logger,
];

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  applicationReducer: applicationReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  newPost: newPostReducer,
});


const store = createStore(createRootReducer(history), applyMiddleware(
  ...middlewares
));

export default store;
