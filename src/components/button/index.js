import React, { Component } from 'react';

export default class Button extends Component {
  onClick = () => {
    const { onClick, id } = this.props;

    onClick && onClick(id);
  };

  render() {
    return (
      <button onClick={this.onClick}>
        {this.props.children}
      </button>
    )
  }
}