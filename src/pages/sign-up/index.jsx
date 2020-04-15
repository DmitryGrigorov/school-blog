import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import * as Actions from './actions';
import style from './style.css'
import Button from "../../components/button";

class SignUp extends Component {
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
        signUpAction: PropTypes.func.isRequired,
        checkLoginAction: PropTypes.func.isRequired,


    };

    checkLogin = () => {
        this.props.checkLoginAction(this.props.dataForm.login)
    };
    render() {
        return (
                <div className={style.signUp}>
                    <div className={style.input}>
                        <Input
                            label='Логин'
                            id="login"
                            value={this.props.dataForm.login}
                            onChange={this.props.changeFieldAction}
                            onBlur={this.checkLogin}
                            error={this.props.errors.login}
                        />
                    </div>
                    <div className={style.input}>
                        <Input
                            label='Пароль'
                            id="password"
                            value={this.props.dataForm.password}
                            onChange={this.props.changeFieldAction}
                            error={this.props.errors.password}
                        />
                    </div>
                    <div className={style.input}>
                        <Input
                            label='Почта'
                            id="email"
                            value={this.props.dataForm.email}
                            onChange={this.props.changeFieldAction}
                            error={this.props.errors.email}
                        />
                    </div>
                    <div className={style.input}>
                        <Input
                            label='Имя'
                            id="firstName"
                            value={this.props.dataForm.firstName}
                            onChange={this.props.changeFieldAction}
                            error={this.props.errors.firstName}
                        />
                    </div>
                    <div className={style.input}>
                        <Input
                            label='Фамилия'
                            id="lastName"
                            value={this.props.dataForm.lastName}
                            onChange={this.props.changeFieldAction}
                            error={this.props.errors.lastName}
                        />
                    </div>

                    <Button onClick={() => this.props.signUpAction(this.props.dataForm)}>Зарегистрироваться</Button>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dataForm: state.signUp.dataForm,
    errors: state.signUp.errors
});

export default connect(mapStateToProps, Actions)(SignUp);
