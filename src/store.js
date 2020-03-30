import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import applicationReducer from 'src/app/reducer';
import signInReducer from 'src/pages/sign-in/reduce';
import signUpReducer from 'src/pages/sign-up/reduce';
import postReducer from 'src/pages/new-post/reduce';
import { history } from 'src/history';

const logger = createLogger({
  collapsed: true
});

const routerMiddle = routerMiddleware(history);

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  applicationReducer: applicationReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  post: postReducer
});
 

const store = createStore(createRootReducer(history), applyMiddleware(routerMiddle, logger, thunk));


export default store;
