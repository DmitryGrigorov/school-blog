import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import Header from 'src/components/header';
import * as Actions from './actions';
import './style.css';
import SignUp from "../pages/sign-up";
import SignIn from "../pages/sing-in";
import style from './style.css'
import NewPost from "../pages/new-post";
import Main from "../pages/main";
import Post from "../pages/post";
import User from "../pages/user";
import myPosts from "../pages/myposts";


class App extends Component {

    componentDidMount() {
        this.props.auth();
    }

    render() {
        return (
            <div className={style.app}>
                <Header user={this.props.user} signOut={this.props.signOut}/>
                <Switch>
                    <Route path='/user/:id' exact={true} component={User}/>
                    <Route path='/' exact={true} component={Main}/>
                    {this.props.user && <Route path='/new-post' exact={true} component={NewPost}/>}
                    {this.props.user && <Route path='/user/:id/my-posts/' exact={true} component={myPosts}/>}
                    <Route path='/sign-in' exact={true} component={SignIn}/>
                    <Route path='/sign-up' exact={true} component={SignUp}/>
                    {/*<Route path='/post/:id' exact={true} component={Post}/>*/}
                    <Route path='/post/:id' exact={true} render={props => <Post user={this.props.user} {...props}/>}/>

                </Switch>

                {/*    counter={this.props.counter}*/}
                {/*    increaseAction={this.props.increaseAction}*/}
                {/*    decreaseAction={this.props.decreaseAction}*/}
                {/*/>*/}
                {/*<SignIn />*/}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        counter: state.app.counter,
        user: state.app.user
    });
};

// const mapDispatchToProps = (dispatch) => {
//   return ({
//     dispatch: dispatch,
//     increaseAction: (payload) => {
//       dispatch(Actions.increaseAction(payload));
//     },
//     decreaseAction: (payload) => {
//       dispatch(Actions.decreaseAction(payload));
//     }
//   });
// };

export default connect(mapStateToProps, Actions)(App);
