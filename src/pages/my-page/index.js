import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions';
import Button from '../../components/button';
import Input from '../../components/input';
import Modal from '../../components/modal';
import s from './style.css';


class MyPage extends Component {
  state= {
    isModalVisible: false,
    currentPassword: '',
    newPassword: '',
    currentPasswordError: '',
    newPasswordError: '',
  }

  componentDidMount(){
    const author = this.props.user.id;
    this.props.getMyPostsAction(author);
    this.props.getAllPostsAction();
  }

  openModal = () => {
    this.setState({
      isModalVisible: true
    })
  }

  closeModal = () => {
    this.setState({
      isModalVisible: false,
      currentPasswordError: '',
      newPasswordError: '',
    })
  }

  validatePassword = (value, id) => {
    if (value.length < 3) {
      this.setState({
        [id + "Error"]: "Минимальная длина пароля должна быть 3 символа"
      })
    }
    else if (this.state[id] !== ''){
      this.setState({
        [id + "Error"]: ''
      })
    }
  }

  changePassword = () => {
    const {currentPassword, newPassword } = this.state;
    this.props.changePasswordAction({currentPassword, newPassword})
    this.setState({
      currentPassword: newPassword,
      isModalVisible: false
    })
  }

  renderModalContent = () => {
    const {currentPassword, currentPasswordError, newPassword, newPasswordError } = this.state;
    return(
      <div className={s.modalContent}>
        <div className={s.modalContentItem}>
          Текущий пароль
        </div>
        <Input 
          id="currentPassword"
          value={currentPassword}
          error={currentPasswordError}
          onChange={({fieldId, value}) => this.setState({[fieldId]: value})}
          onBlur={this.validatePassword}
        />
        <div className={s.modalContentItem}>
          Новый пароль
        </div>
        <Input 
          id="newPassword"
          error={newPasswordError}
          onChange={({fieldId, value}) => this.setState({[fieldId]: value})}
          onBlur={this.validatePassword}
        />
        <div className={s.separator}/>
        <Button 
          disabled={currentPassword.length < 3 || newPassword.length < 3} 
          onClick={this.changePassword}
        >
          Изменить
        </Button>
      </div>
    );
  }

  render() {
    const { isModalVisible } = this.state;
    const { user, posts, myPosts } = this.props;
    const { id, avatar, firstName, lastName, patronymic, email, registrationDate } = user;
    let likes = 0, dislikes = 0;

    //подсчет поставленных тобой лайков и дизлайков
    posts.forEach(post => {
      if (post.authorId !== id && post.relatedLikes.indexOf(id) !== -1) {
        likes += post.relatedLikes.filter(item => item === id).length; // Проверяем, сколько раз ты поставил лайк посту
      }
      if (post.authorId !== id && post.relatedDislikes.indexOf(id) !== -1) {
        dislikes += post.relatedDislikes.filter(item => item === id).length; // Проверяем, сколько раз ты поставил дизлайк посту
      }
    })

    return (
        <div className={s.wrapper}>
            <div className={s.avatar}><img src={"http://school-blog.ru/images/" + avatar}/></div>
            <div className={s.profile}>
                <div className={s.profileItem}><b>Имя</b> {firstName}</div>
                <div className={s.profileItem}><b>Фамилия</b> {lastName}</div>
                <div className={s.profileItem}><b>Отчество</b> {patronymic}</div>
                <div className={s.profileItem}><b>Дата регистрации</b> {registrationDate.slice(0, 10)}</div>
                <div className={s.profileItem}><b>E-mail</b> {email}</div>
                <div className={s.profileItem}><b>Количество твоих постов</b> {myPosts.length}</div>
                <div className={s.profileItem}><b>Количество поставленных лайков</b> {likes}</div>
                <div className={s.profileItem}><b>Количество поставленных дизлайков</b> {dislikes}</div>
                <Button onClick={this.openModal}>Изменить пароль</Button>
                {isModalVisible && 
                  <Modal 
                  closeModal={this.closeModal}
                  content={this.renderModalContent()}
                />
                }
            </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.applicationReducer.user,
    posts: state.myPage.posts,
    myPosts: state.myPage.myPosts
  };
}

export default connect(mapStateToProps, Actions)(MyPage);
