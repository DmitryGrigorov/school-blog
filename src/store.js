import { createStore, combineReducers } from 'redux';
import applicationReducer from 'src/app/reducer';

const rootReducer = combineReducers({
    applicationReducer: applicationReducer
});

const store=createStore(rootReducer); //сюда мы можем передать только одну функцию, для этого combineReducers

export default store;