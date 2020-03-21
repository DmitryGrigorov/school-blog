import { createStore, combineReducers } from 'redux';
import applicationReducer from 'src/app/reducer';
import signInReducer from './pages/sign-in/reducer';

const rootReducer = combineReducers({
    applicationReducer: applicationReducer,
    signInReducer
});

const store=createStore(rootReducer); //сюда мы можем передать только одну функцию, для этого combineReducers

export default store;