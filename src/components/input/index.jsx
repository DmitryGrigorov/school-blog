import React, { Component } from 'react';
import style from './style.css';

export default class Input extends Component {
  onChange = (e) => {
    const value = e.target.value;
    const { id, onChange } = this.props;

    onChange && onChange({ fieldId: id, value });
  };

  onBlur = (e) => {
    const value = e.target.value;
    const { id, onBlur } = this.props;

    onBlur && onBlur(value, id);
  };

  render() {
    const { value, error, placeholder, id } = this.props;

    return (
      <div>
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={this.onChange}
          onBlur={this.onBlur}
          className={`${style.inputComponent} ${error ? style.inputError : ''}`}
        />
        <div className={style.error}>{error}</div>
      </div>
    );
  }
}
