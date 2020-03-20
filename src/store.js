import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk'
import {history} from 'src/history'
import applicationReducer from 'src/app/reducer'
import signInReducer from 'src/pages/sign-in/reducer'
import signUpReducer from 'src/pages/sign-up/reducer'
import newPostReducer from 'src/pages/new-post/reducer'



const routerMiddleware_ = routerMiddleware(history)

const logger = createLogger({ collapsed: true })

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  applicationReducer: applicationReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  newPost: newPostReducer
})

/* THUNK
function myMiddleware(store){
 return (next) => {
  return (action) => {
   if(typeof action === 'function'){ action(store.dispatch) }
   else{ next(action) }
  }
 }
}
*/

const store = createStore(createRootReducer(history), applyMiddleware(routerMiddleware_, logger, thunk))



export default store