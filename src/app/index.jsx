import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import * as Actions from './actions'
import Header from 'src/components/header'
import Posts from 'src/pages/posts'
import Users from 'src/pages/users'
import User from 'src/pages/users/user'
import SignIn from 'src/pages/sign-in'
import SignUp from 'src/pages/sign-up'



class App extends React.Component{
 componentDidMount(){ this.props.authentication() }

 render(){
  return <>
<Header user={this.props.dataOfCurrentUser} signOut={this.props.signOut} />

<article>
 <Switch>
  <Route exact path='/' component={Posts} />
  <Route path='/posts' component={Posts} />
  <Route exact path='/users' component={Users} />
  <Route path='/users/:id' component={User} />
  <Route path='/sign-in' component={SignIn} />
  <Route path='/sign-up' component={SignUp} />
 </Switch>
</article>
  </>
 }
}



const mapStateToProps = (state) => ({dataOfCurrentUser: state.application.user})
export default connect(mapStateToProps, Actions)(App)