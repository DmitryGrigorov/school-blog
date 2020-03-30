import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Input from "components/input";
import Textarea from "src/components/textarea";
import Button from "src/components/button";
import * as Actions from "./actions";
import s from "./style.css";

const enhance = connect(
  state => ({
    title: state.newPost.title,
    body: state.newPost.body
  }),
  Actions
);

const NewPost = enhance(props => {
  const onSubmit = () => {
    props.createNewPostAction({ title: props.title, content: props.body });
  };

  return (
    <div className={s.postFormWrapper}>
      <div className={s.row}>
        <div>Title</div>
        <Input id="title" onChange={props.newPostAction} value={props.title} />
      </div>
      <div className={s.row}>
        <div>Body</div>
        <Textarea id="body" onChange={props.newPostAction} value={props.body} />
      </div>
      <div className={s.row}>
        <Button onClick={onSubmit}>Submit</Button>
      </div>
    </div>
  );
});

NewPost.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  newPostAction: PropTypes.func
};

export default NewPost;
