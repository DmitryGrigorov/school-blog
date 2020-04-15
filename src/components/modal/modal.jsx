import React, {Component} from "react";
import style from './style.css'
import {connect} from "react-redux";
import Input from "../input";
import PropTypes from "prop-types";
import * as Actions from './actions'

class Modal extends Component {
    static propTypes = {
        changePasswordAction: PropTypes.func.isRequired

    };

    onChangePassword(data) {
        this.props.changePasswordAction(data);
    }

    componentWillUnmount() {
        this.props.leavePageAction();
    }

    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.modal}>
                    <div onClick={this.props.closeModal} className={style.closeButton}>x</div>
                    <div className={style.input}>

                        <Input
                            id='currentPassword'
                            label='Текущий пароль'
                            onChange={this.props.changeFieldAction}
                            value={this.props.dataForm.currentPassword}
                            error={this.props.error.currentPassword}
                        />
                    </div>
                    <div className={style.input}>
                        <Input
                            id='newPassword'
                            label='Новый пароль'
                            onChange={this.props.changeFieldAction}
                            value={this.props.dataForm.newPassword}
                            error={this.props.error.newPassword}
                        />
                    </div>
                    <button onClick={() => this.onChangePassword(this.props.dataForm)}>Изменить</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        dataForm: state.modal.dataForm,
        error: state.modal.error
    })
}

export default connect(mapStateToProps, Actions)(Modal)