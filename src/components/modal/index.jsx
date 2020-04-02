import React, { useState, useEffect, memo, useRef } from "react";
import { createPortal } from "react-dom";
import { Modal } from "./modal";

const ModalWrapper = props => {
  const element = useRef(
    document.getElementById(props.id) || document.createElement("div")
  );
  console.log(element);
  const [dynamic] = useState(!element.current.parentElement);

  useEffect(() => {
    if (dynamic) {
      element.current.id = props.id;
      document.body.appendChild(element.current);
    }
    return () => {
      if (dynamic && element.current.parentElement)
        element.current.parentElement.removeChild(element.current);
    };
  }, [props.id]);

  return createPortal(<Modal {...props} />, element.current);
};

export default memo(ModalWrapper);
