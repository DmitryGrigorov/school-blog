import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from 'src/components/input';
import Textarea from 'src/components/textarea';
import Button from 'src/components/button';
import * as Actions from './actions';

class NewPost extends Component {
  onChangeData = (data) => {
    const fieldId = data.fieldId;
    const value = data.value;

    this.props.changeDataAction(fieldId, value);
  };

  onSubmit = () => {
    this.props.createPostAction(this.props.data);
  };

  render() {
    const { data } = this.props;

    return (
      <div>
        <div>
          <div>Заголовок</div>
          <Input
            id="title"
            value={data.title}
            onChange={this.onChangeData}
          />
        </div>
        <div>
          <div>Контент</div>
          <Textarea
            id="content"
            value={data.content}
            onChange={this.onChangeData}
          />
        </div>
        <div>
          <Button id="submit" onClick={this.onSubmit}>Создать</Button>
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