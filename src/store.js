import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import {history} from 'src/history'
import thunk from 'redux-thunk'
import applicationReducer from 'src/app/reducer'
import signInReducer from 'src/pages/sign-in/reducer'
import signUpReducer from 'src/pages/sign-up/reducer'
import postsReducer from 'src/pages/posts/reducer'
import readPostReducer from 'src/pages/posts/components/popUps/read-post/reducer'
import addPostReducer from 'src/pages/posts/components/popUps/add-post/reducer'
import userReducer from 'src/pages/users/user/reducer'
import changePasswordOfUserReducer from 'src/pages/users/user/components/popUps/change-password/reducer'
import usersReducer from './pages/users/reducer'



const routerMiddleware_ = routerMiddleware(history)

const logger = createLogger({ collapsed: true })

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  application: applicationReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  posts: postsReducer,
  readPost: readPostReducer,
  addPost: addPostReducer,
  user: userReducer,
  users: usersReducer,
  changePasswordOfUser: changePasswordOfUserReducer
})

const store = createStore(createRootReducer(history), applyMiddleware(routerMiddleware_, logger, thunk))



export default store