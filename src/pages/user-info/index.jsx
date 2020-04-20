import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as Actions from "./actions"
import style from './style.css'
import Button from 'src/components/button'
import Input from 'src/components/input'
import Modal from 'src/components/modal';

class UserInfoPage extends Component {
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
    }
    state = 
    {
        isShowModal: false,
        date:''
    }
    componentDidMount() {
        const { user } = this.props
        this.props.getUserInfoAction(user.id)
        let date = new Date(user.registrationDate)
        const registrationDate = date.toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric' })

        this.setState({
            date: registrationDate
        })
    }

    onClick = () => {
        this.setState({
            isShowModal: !this.state.isShowModal
        })
    }

    onSubmit = () => {
        this.props.changePasswordAction(this.props.dataForm)
    }

    checkCurrentPassword = () => {
      //  console.log('on blur')
    }

    render() {
        const { userInfo, errors } = this.props;
        return (
            <div>
                {userInfo
                    ?
                    <div className={style.formWrapper}>
                        <img className={style.userPhoto} src={"http://school-blog.ru/images/" + userInfo.avatar} alt="avatar" width="200" height="200"></img> 
                        <div className={style.rowWrapper}>
                            <div className={style.row}>
                                <h1 className={style.login}>{userInfo.login}</h1>
                            </div>
                            <ul>
                                <li>Имя: {userInfo.firstName}</li>
                                <li>Фамилия: {userInfo.lastName}</li>
                                <li>Отчество:</li>
                                <li>Дата регистрации: {this.state.date}</li>
                                <li>E-mail: {userInfo.email}</li>
                                <li>Количество постов:{userInfo.postsCount}</li>
                                <li>Количество поставленных лайков: {userInfo.likesCount}</li>
                                <li>Количество поставленных дизлайков: {userInfo.dislikesCount}</li>
                            </ul>
                            <div className={style.row}>
                                <Button onClick={this.onClick}>Изменить пароль</Button>
                            </div>

                        </div>
                    </div>
                    :
                    <div>loading...</div>
                }
                <div>
                    {this.state.isShowModal
                        && <Modal closeModal={this.onClick}>
                                     <div className={style.row}>
                                     <div>Старый пароль</div>
                                         <Input
                                            id="currentPassword"
                                            placeholder="currentPassword"
                                            value={this.props.dataForm.currentPassword}
                                            onChange={this.props.changeFieldAction}
                                            error={errors.currentPassword}
                                        />
                                </div>

                                 <div className={style.row}>
                                     <div>Новый пароль</div>
                                        <Input
                                            id="newPassword"
                                            placeholder="newPassword"
                                            value={this.props.dataForm.firstName}
                                            onChange={this.props.changeFieldAction}
                                            error={errors.newPassword}
                                        />
                                </div> 

                                <div className={style.button}>
                                    <Button onClick={this.onSubmit}>Изменить</Button>
                                </div>
                        </Modal>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.applicationReducer.user,
        userInfo: state.userInfoPage.userInfo,
        dataForm: state.userInfoPage.dataForm,
        errors: state.userInfoPage.errors
    };
}

// const mapDispatchToProps = dispatch => {
//     return {
//       setYearAction: year => dispatch(setYear(year))
//     }
//   }
export default connect(mapStateToProps, Actions)(UserInfoPage)