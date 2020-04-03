import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from 'src/components/input';
import Textarea from 'src/components/textarea';
import Button from 'src/components/button';
import * as Actions from './actions';
import style from './style.css';

class NewPost extends Component {
  onChangeData = (dataForm) => {
    const fieldId = dataForm.fieldId;
    const value = dataForm.value;

    this.props.changeFieldAction(fieldId, value);
  };

  onSubmit = () => {
    this.props.createPostAction(this.props.dataForm);
  };

  render() {
    const { dataForm } = this.props;

    return (
      <div className={style.postFormWrapper}>
        <div className={style.row}>
          <div>
            Заголовок
          </div>
          <div>
          <Input
              id="title"
              value={dataForm.title}
              onChange={this.onChangeData}
            />
          </div>
        </div>
        <div className={style.row}>
          <div>
            Текст
          </div>
          <div>
          <Textarea
              id="content"
              value={dataForm.content}
              onChange={this.onChangeData}
            />
          </div>
        </div>
        <div className={style.row}>
          <div>
            <Button id="submit" onClick={this.onSubmit}>Создать</Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    dataForm: state.newPost.dataForm
  });
};

export default connect(mapStateToProps, Actions)(NewPost);