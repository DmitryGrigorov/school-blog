import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import * as Actions from './actions';
import {Link} from 'react-router-dom';
import style from './style.css'

class SignIn extends Component {
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
    };

    render() {
        return (
            <>
                <div className={style.input}>
                    <div className={style.inputDiv}>
                        <p>login</p>
                        <Input
                            id="login"
                            value={this.props.dataForm.login}
                            onChange={this.props.changeFieldAction}
                            onFocus={this.props.onFocus}
                        />
                    </div>
                    <div className={style.inputDiv}>
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
                        <Link to='/sing-up'>Sing-Up?</Link>
                    </div>
                    <div className={style.right}>
                        <button onFocus={this.props.onFocus}>Sing-In</button>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    dataForm: state.signIn.dataForm
});

export default connect(mapStateToProps, Actions)(SignIn);
