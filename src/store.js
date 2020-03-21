import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';


import signInReducer from 'src/pages/sing-in/reduce';
import signUpReducer from 'src/pages/sign-up/reducer';
import newPostReducer from "./pages/new-post/reducer";
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
  newPost: newPostReducer,
  signIn: signInReducer,
  signUp: signUpReducer
});


const store = createStore(createRootReducer(history), applyMiddleware(
    ...middlewares
));

export default store;
