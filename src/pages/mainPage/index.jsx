import React from 'react';
import style from './style.css'
import SignUp from "../sing-up";
import Header from "../../components/header";
import {Switch, Route} from 'react-router-dom';
import SignIn from "../sing-in";

function MainPage() {
    return (
        <div className={style.wrapper}>
            <div className={style.form}>
                <h1>THE BLOG</h1>
                <div className={style.components}>
                    <Switch>
                        <Route path='/sing-in' exact={true} component={SignIn}/>
                        {/*<Header />*/}
                        <Route path='/sing-up' exact={true} component={SignUp}/>
                        {/*<div className="footer">*/}
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default MainPage;