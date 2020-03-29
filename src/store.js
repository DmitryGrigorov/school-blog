import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import signInReducer from 'src/pages/sing-in/reduce';
import signUpReducer from "./pages/sing-up/reduce";
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {history} from '../src/history';

const logger = createLogger({
  collapsed: true
});

const middlewares = [routerMiddleware(history), logger];

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  signIn: signInReducer,
  singUp: signUpReducer
});



const store = createStore(createRootReducer(history), applyMiddleware(...middlewares));

export default store;
