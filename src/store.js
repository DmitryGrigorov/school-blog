import { createStore, combineReducers, applyMiddleware } from 'redux';
import applicationReducer from 'src/app/reducer';
import signInReducer from 'src/pages/sign-in/reducer';
import signUpReducer from 'src/pages/sign-up/reducer';

import {createLogger} from 'redux-logger';

const rootReducer = combineReducers({
    applicationReducer: applicationReducer,
    signIn: signInReducer,
    signUp: signUpReducer
});

const logger=createLogger({
    collapsed: true
});

const store=createStore(rootReducer, applyMiddleware(logger)); //сюда мы можем передать только одну функцию, для этого combineReducers

export default store;