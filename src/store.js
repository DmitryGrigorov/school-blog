import { createStore, combineReducers } from 'redux';
import applicationReducer from 'src/app/reducer';
import signInReducer from 'src/pages/sign-in/reducer';

const rootReducer = combineReducers({
    applicationReducer: applicationReducer,
    signIn: signInReducer
});

const store=createStore(rootReducer); //сюда мы можем передать только одну функцию, для этого combineReducers

export default store;