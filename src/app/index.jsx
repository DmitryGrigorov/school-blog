import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import * as Actions from './actions'
import Header from 'src/components/header'
import Main from 'src/pages/main'
import About from 'src/pages/about'
import SignIn from 'src/pages/sign-in'
import SignUp from 'src/pages/sign-up'




class App extends React.Component{
 render(){
  return <>
<Header />
<article>
 <>
  <Switch>
   <Route exact path='/' component={Main} />
   <Route path='/about' component={About} />
   <Route path='/sign-in' component={SignIn} />
   <Route path='/sign-up' component={SignUp} />
  </Switch>
 </>
</article>
  </>
 }
}



const mapStateToProps = (state) => { return ({ counter: state.applicationReducer.counter }) }
export default connect(mapStateToProps, Actions)(App)