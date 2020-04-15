import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import * as Actions from './actions'
import Loader from "../../components/loader";
import style from './style.css'
import Button from "../../components/button";
import Modal from "../../components/modal";

class User extends Component {

    static propTypes = {
        getUserAction: PropTypes.func.isRequired,
        leavePageAction: PropTypes.func.isRequired
    };

    componentDidMount() {
        const {match} = this.props;
        this.props.getUserAction(match.params.id);
    }
    componentWillUnmount() {
        console.log("leave post")
        this.props.leavePageAction();
    }
    onShowModal = () => {
        this.props.isShowModalAction();
    }
    render() {
        const {user} = this.props;
        return (
            <div className={style.userWrapper}>
                {user
                    ? <div>
                        <img src={`http://school-blog.ru/images/${user.avatar}`} alt=""/>
                        <h1>{user.firstName} {user.lastName}</h1>
                        <div className={style.aboutUser}>
                            <div className={style.leftAboutUser}>
                                <p>Логин:</p>
                                <p>Почта:</p>
                                <p>Дата регистрации:</p>
                                <p>Количество созданных постов:</p>
                                <p>Количество понравившихся постов:</p>
                                <p>Количество непонравившихся постов:</p>
                            </div>
                            <div className={style.rightAboutUser}>
                                <p>{user.login}</p>
                                <p>{user.email}</p>
                                <p>{user.registrationDate.substr(0,10)}</p>
                                <p>{user.postsCount}</p>
                                <p>{user.likesCount}</p>
                                <p>{user.dislikesCount}</p>
                            </div>


                        </div>
                        <Button onClick={this.onShowModal}>Изменить пароль</Button>
                    </div>

                    : <Loader/>
                }
                {
                    this.props.showModal && <Modal closeModal={this.onShowModal} user={this.props.user}/>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        user: state.user.data,
        showModal: state.user.showModal
    });

}

export default connect(mapStateToProps, Actions)(User)