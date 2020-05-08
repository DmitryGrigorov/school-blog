import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import * as Actions from './actions';
import API from 'src/api';
import style from './style.css'
import Button from "../../components/button";

class SignIn extends Component {
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
        signInAction: PropTypes.func.isRequired,
        leaveSignInAction: PropTypes.func.isRequired,

    };

    componentWillUnmount() {
        this.props.leaveSignInAction();
    }

    onSubmit = () => {
        this.props.signInAction(this.props.dataForm);
    }


    render() {
        return (
            <div className={style.signIn}>
                {this.props.error
                    ? <div className={style.signInError}>
                        Неверный логин или пароль
                    </div>
                    :
                    null}
                <div className={style.input}>
                    <Input
                        label='Логин'
                        id="login"
                        value={this.props.dataForm.login}
                        onChange={this.props.changeFieldAction}
                    />
                </div>
                <div className={style.input}>
                    <Input
                        label='Пароль'
                        id="password"
                        value={this.props.dataForm.password}
                        onChange={this.props.changeFieldAction}
                    />
                </div>
                <Button onClick={this.onSubmit}>Войти</Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dataForm: state.signIn.dataForm,
    error: state.signIn.error
});

export default connect(mapStateToProps, Actions)(SignIn);
