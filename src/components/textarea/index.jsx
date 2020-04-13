import React, { Component } from 'react';

export default class TextArea extends Component {
  onChange = (e) => {
    const value = e.target.value;
    const { id, onChange } = this.props;

    onChange({ fieldId: id, value });
  };

  render() {
    const { value } = this.props;

    return (
      <textarea
        value={value}
        onChange={this.onChange}
      />
    );
  }
}
