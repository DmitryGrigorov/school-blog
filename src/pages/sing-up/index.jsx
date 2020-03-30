import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import * as Actions from './actions';
import style from './style.css'
import {Link} from "react-router-dom";

class SignUp extends Component {
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
    };

    render() {
        return (
            <>
                <div className={style.input}>
                    <div>
                        <p>login</p>
                        <Input
                            id="login"
                            value={this.props.dataForm.login}
                            onChange={this.props.changeFieldAction}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                        />
                    </div>
                    <div>
                        <p>e-mail</p>
                        <Input
                            id="email"
                            value={this.props.dataForm.email}
                            onChange={this.props.changeFieldAction}
                        />
                    </div>
                    <div>
                        <p>firsname</p>
                        <Input
                            id="firstName"
                            value={this.props.dataForm.firstName}
                            onChange={this.props.changeFieldAction}
                        />
                    </div>
                    <div>
                        <p>password</p>
                        <Input
                            id="password"
                            value={this.props.dataForm.password}
                            onChange={this.props.changeFieldAction}
                        />
                    </div>

                </div>
                <div className={style.buttonSing}>
                    <div className={style.left}>
                        <Link to='/sing-in'
                              onFocus={this.onFocus}
                              onBlur={this.onBlur}
                        >Sing-In?</Link>
                    </div>
                    <div className={style.right}>
                        <button onFocus={this.onFocus}
                                onBlur={this.onBlur}
                        >Sing-Up</button>
                    </div>
                </div>
            </>

        );
    }
}

const mapStateToProps = (state) => ({
    dataForm: state.singUp.dataForm
});

export default connect(mapStateToProps, Actions)(SignUp);
