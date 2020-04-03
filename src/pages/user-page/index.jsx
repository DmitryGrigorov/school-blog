import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as Actions from "./actions";
import { ChangePasswordModal } from "src/components/modal/change-password-modal";
import Button from "src/components/button";

import style from "./style.css";

const enhance = connect(
  state => ({
    userData: state.me.userData,
    isLoading: state.me.isLoading,
    dataForm: state.me.dataForm
  }),
  Actions
);

const UserPage = enhance(props => {
  const {
    userData,
    isLoading,
    fetchUserData,
    dataForm,
    changeFieldAction,
    changeUserPassword
  } = props;
  const [isShowModal, setShowModal] = useState(false);

  const registrationDate = new Date(userData?.registrationDate);

  useEffect(() => {
    const { match } = props;
    fetchUserData(match.params.id);
  }, [fetchUserData]);

  const handlePasswordChange = () => {
    changeUserPassword(dataForm);
    setShowModal(!isShowModal);
  };

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <>
      <div className={style.wrapper}>
        <div>
          <div>
            <h2>{userData.firstName + " " + userData.lastName}</h2>
          </div>
          <div>Имя: {userData.firstName}</div>
          <div>Фамилия: {userData.lastName}</div>
          <div>
            Дата регистрации: {registrationDate.toLocaleDateString("ru-RU")}
          </div>
          <div>E-mail: {userData.email}</div>
          <div>Количество постов: {userData.postsCount}</div>
          <div>Количество поставленных лайков: {userData.likesCount}</div>
          <div>
            Количество поставленнных дизлайков: {userData.dislikesCount}
          </div>
          <Button onClick={() => setShowModal(!isShowModal)}>
            Изменить пароль
          </Button>
        </div>
        <div className={style.avatar}>
          <img
            // userData.avatar cause error 404
            src={`https://robohash.org/${userData.id}` || userData.avatar}
            alt="avatar"
          />
        </div>
      </div>
      {isShowModal && (
        <ChangePasswordModal
          onClick={handlePasswordChange}
          currentPassword={dataForm.currentPassword}
          newPassword={dataForm.newPassword}
          onChange={changeFieldAction}
        />
      )}
    </>
  );
});

export default UserPage;
