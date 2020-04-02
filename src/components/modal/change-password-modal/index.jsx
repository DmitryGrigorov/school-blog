import React from "react";
import Modal from "../index";
import Input from "../../input";

export const ChangePasswordModal = props => (
  <Modal id="change-password-modal" {...props}>
    <div>
      <div>
        <Input
          id="currentPassword"
          placeholder="Current Password"
          value={props.currentPassword}
          onChange={props.onChange}
        />
      </div>
      <div>
        <Input
          id="newPassword"
          placeholder="New Password"
          value={props.newPassword}
          onChange={props.onChange}
        />
      </div>
    </div>
  </Modal>
);
