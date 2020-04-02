import React from "react";
import style from "./style.css";

export const Modal = props => (
  <div className={style.wrapper}>
    <div className={style.modal}>
      <div>{props.children}</div>
      <button onClick={props.onClick}>Close</button>
    </div>
  </div>
);
