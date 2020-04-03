import React from "react";
import style from "./style.css";
import Button from "src/components/button";

export const Modal = props => (
  <div className={style.wrapper}>
    <div className={style.modal}>
      <div>{props.children}</div>
      <Button onClick={props.onClick}>Изменить</Button>
    </div>
  </div>
);
