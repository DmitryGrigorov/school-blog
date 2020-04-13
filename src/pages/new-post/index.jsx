import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from 'src/components/input';
import TextArea from 'src/components/textarea';
import * as Actions from './actions';

class NewPost extends Component {
  onChangeData = (data) => {
    const fieldId = data.fieldId;
    const value = data.value;

    this.props.changeDataAction(fieldId, value);
  };

  render() {
    const { data } = this.props;

    return (
      <div>
        <div>
          <div>Title</div>
          <Input
            id="title"
            value={data.title}
            onChange={this.onChangeData}
          />
        </div>
        <div>
          <div>Body</div>
          <TextArea
            id="body"
            value={data.body}
            onChange={this.onChangeData}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.newPost.data
  };
}

export default connect(mapStateToProps, Actions)(NewPost);