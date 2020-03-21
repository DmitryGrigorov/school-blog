import { createStore, combineReducers, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import { connectRouter } from 'connected-react-router';

import applicationReducer from 'src/app/reducer';
import signInReducer from 'src/pages/sign-in/reducer';
import signUpReducer from 'src/pages/sign-up/reducer';
import {history} from 'src/history';



const createRootReducer =(history)=> combineReducers({
    router: connectRouter(history),
    applicationReducer: applicationReducer,
    signIn: signInReducer,
    signUp: signUpReducer
});

const logger=createLogger({
    collapsed: true
});

const store=createStore(createRootReducer(history), applyMiddleware(logger)); //сюда мы можем передать только одну функцию, для этого combineReducers

export default store;