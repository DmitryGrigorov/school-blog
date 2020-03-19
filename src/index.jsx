import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import {history} from './history'
import store from './store'
import App from './app'

import 'normalize.css'
import './main.css'
import './project.css'



ReactDOM.render(
 <Provider store={store}>
  <ConnectedRouter history={history}>
   <App />
  </ConnectedRouter>
 </Provider>,
 document.querySelector('Body > Main')
)
