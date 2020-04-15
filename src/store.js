import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import appReducer from 'src/app/reducer';
import signUpReducer from "./pages/sign-up/reducer";
import signInReducer from "./pages/sing-in/reducer";
import {connectRouter, routerMiddleware} from "connected-react-router";
import {history} from "./history";
import newPostReducer from "./pages/new-post/reducer";
import thunk from 'redux-thunk'
import mainReducer from "./pages/main/reducer";
import postReducer from "./pages/post/reducer";
import userReducer from "./pages/user/reducer";
import myPostsReducer from "./pages/myposts/reducer";
import changePasswordReducer from "./components/modal/reducer";


const createRootReducer = history =>
    combineReducers({
        app: appReducer,
        signUp: signUpReducer,
        signIn: signInReducer,
        newPost: newPostReducer,
        router: connectRouter(history),
        main: mainReducer,
        post: postReducer,
        user: userReducer,
        myPosts: myPostsReducer,
            modal: changePasswordReducer
    });


const logger = createLogger({
    collapsed: true
});
const routMiddleware = routerMiddleware(history);


const store = createStore(createRootReducer(history), applyMiddleware(routMiddleware, logger, thunk));

export default store;

