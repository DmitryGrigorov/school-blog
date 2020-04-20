import React, {Component} from 'react';
import style from './style.css';

class Modal extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.modal}>
        <div className={style.actions}>
          {/* <button onClick={this.props.closeModal}>Close</button> */}
          <span className={style.cross} onClick={this.props.closeModal}>x</span>
          </div>
              <div className={style.content}>{this.props.children}</div>
        </div>
        </div>
    );
  }
}

export default Modal;