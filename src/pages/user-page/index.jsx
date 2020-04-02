import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as Actions from "./actions";
import { ChangePasswordModal } from "src/components/modal/change-password-modal";

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
    changeFieldAction
  } = props;
  const [isShowModal, setShowModal] = useState(false);

  console.log(dataForm);

  useEffect(() => {
    const { match } = props;
    fetchUserData(match.params.id);
  }, [fetchUserData]);

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <>
      <div>
        <div>{userData.firstName + " " + userData.lastName}</div>
        <div>Имя {userData.firstName}</div>
        <div>Фамилия {userData.lastName}</div>
        <div>Дата Регистрации {userData.registrationDate}</div>
        <div>E-mail {userData.email}</div>
        <div>Количество постов {userData.postsCount}</div>
        <div>Количество поставленных лайков {userData.likesCount}</div>
        <div>Количество поставленнных дизлайков {userData.dislikesCount}</div>
        <button onClick={() => setShowModal(!isShowModal)}>
          Изменить пароль
        </button>
      </div>
      {isShowModal && (
        <ChangePasswordModal
          onClick={() => setShowModal(!isShowModal)}
          currentPassword={dataForm.currentPassword}
          newPassword={dataForm.newPassword}
          onChange={changeFieldAction}
        />
      )}
    </>
  );
});

export default UserPage;
