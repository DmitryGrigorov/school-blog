import React, { Component } from 'react';
import style from './style.css'

export default class Textarea extends Component {
    onChange = (e) => {
        const value = e.target.value;
        const { id, onChange } = this.props;
        onChange({ fieldId: id, value });
    };

    render() {
        const { value,label } = this.props;
        return (
            <textarea
                type="text"
                value={value}
                onChange={this.onChange}
                placeholder={label}
                className={style.textarea}
            />
        );
    }
}
