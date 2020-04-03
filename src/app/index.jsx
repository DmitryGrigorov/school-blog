import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import * as Actions from './actions'
import Header from 'src/components/header'
import Main from 'src/pages/main'
import About from 'src/pages/about'
import SignIn from 'src/pages/sign-in'
import SignUp from 'src/pages/sign-up'
import Post from 'src/pages/post'
import NewPost from 'src/pages/new-post'



class App extends React.Component{
 componentDidMount(){ this.props.authentication() }

 render(){
  return <>
<Header user={this.props.user} signOut={this.props.signOut} />
<article>
 <>
  <Switch>
   <Route exact path='/' component={Main} />
   <Route path='/about' component={About} />
   <Route path='/sign-in' component={SignIn} />
   <Route path='/sign-up' component={SignUp} />
   <Route exact path='/post/:id' component={Post} />
   {this.props.user && <Route path='/new-post' component={NewPost} />}
  </Switch>
 </>
</article>
  </>
 }
}



const mapStateToProps = (state) => ({user: state.applicationReducer.user})
export default connect(mapStateToProps, Actions)(App)