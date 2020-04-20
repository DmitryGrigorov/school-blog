import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import * as Actions from './actions';

class NewPostPageOld extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <div>
          <div>
            Заголовок
          </div>
          <div>
            <Input
              id="title"
              value={this.props.dataForm.title}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>
        <div>
          <div>
            Содержание
          </div>
          <div>
            <Input
              id="textbody"
              value={this.props.dataForm.textbody}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataForm: state.newPostPageOld.dataForm
});

export default connect(mapStateToProps, Actions)(NewPostPageOld);