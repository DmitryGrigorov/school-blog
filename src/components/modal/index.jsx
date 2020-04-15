import React, {Component} from "react";
import {createPortal} from 'react-dom'
import style from './style.css'
import Modal from "./modal";

class ModalWrapper extends Component {
    constructor(props) {
        super(props);

        this.element = document.createElement('div');

        document.body.append(this.element)
    }

    render() {
        return (
            createPortal(
                <Modal{...this.props}/>,
                this.element
            )

        )
    }
}

export default Modal