import {createStore, combineReducers, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import applicationReducer from 'src/app/reducer';
import signInReducer from 'src/pages/sign-in/reduce';
import signUpReducer from 'src/pages/sign-up/reduce';
import mainReducer from 'src/pages/main/reduce';
import postReducer from 'src/pages/post/reduce';
import newPostReducer from 'src/pages/new-post/reduce';
import userInfoReducer from 'src/pages/user-info/reduce'
//import newPostPageOldReducer from 'src/pages/new-post-old/reduce';
import { history } from 'src/history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
// const rootReducer = combineReducers({
//     applicationReducer: applicationReducer,
//     signIn:signInReducer,
//     singUp:signUpReducer
// });
const logger = createLogger({
    collapsed: true
  });
// const store = createStore(rootReducer, applyMiddleware(logger));
// const middlewares = [
//     routerMiddleware(history),
//     logger,
//   ];
const routerMiddle = routerMiddleware(history);
  const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    applicationReducer: applicationReducer,
    signIn: signInReducer,
    signUp: signUpReducer,
    main: mainReducer,
    post: postReducer,
    newPost: newPostReducer,
    userInfoPage:userInfoReducer
   // newPostPageOld:newPostPageOldReducer
  });
//   const store = createStore(createRootReducer(history), applyMiddleware(
//     ...middlewares
//   ));
const store = createStore(
    createRootReducer(history),
    applyMiddleware(routerMiddle, logger, thunk)
  );
export default store;