import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from 'src/components/header';
import SignIn from 'src/pages/sing-in';
import SignUp from 'src/pages/sign-up';
import About from 'src/pages/about';
import NewPost from "../pages/new-post";
// import FooterCounter from "src/components/footer-counter";
import * as Actions from './actions';
import './style.css';

class App extends Component {
    componentDidMount() {
        this.props.auth();
    }

    render() {
        return (
            <>
                <Header user={this.props.user} signOut={this.props.signOut}/>
                <Switch>
                    <Route path='/sign-in'>
                        <SignIn/>
                    </Route>
                    <Route path='/sign-up'>
                        <SignUp/>
                    </Route>
                    <Route path='/new-post'>
                        <NewPost/>
                    </Route>
                    <Route path='/about'>
                        <About/>
                    </Route>
                    <Route path='/'>
                        <h1>MAIN PAGE</h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi excepturi illum incidunt magni
                        nam officia qui sed similique suscipit unde.
                    </Route>
                </Switch>
                {/*<FooterCounter counter={this.props.counter} increaseAction={this.props.increaseAction} decreaseAction={this.props.decreaseAction} />*/}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        user: state.applicationReducer.user
    });
};


export default connect(mapStateToProps, Actions)(App);
