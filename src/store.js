import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import applicationReducer from "src/app/reducer";
import signInReducer from "src/pages/sing-in/reduce";
import signUpReducer from "src/pages/sign-up/reducer";
import newPostReducer from "src/pages/new-post/reducer";
import postReducer from "src/pages/post/reducer";
import mainReducer from "src/pages/main/reducer";
import { history } from "src/history";

const logger = createLogger({
  collapsed: true
});

const middlewares = [routerMiddleware(history), logger, thunk];

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    applicationReducer: applicationReducer,
    signIn: signInReducer,
    signUp: signUpReducer,
    newPost: newPostReducer,
    post: postReducer,
    main: mainReducer
  });

const store = createStore(
  createRootReducer(history),
  applyMiddleware(...middlewares)
);

export default store;
