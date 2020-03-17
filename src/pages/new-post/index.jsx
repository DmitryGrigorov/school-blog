import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Input from "components/input";
import * as Actions from "./actions";

const enhance = connect(
  state => ({
    title: state.newPost.title,
    body: state.newPost.body
  }),
  Actions
);

const NewPost = enhance(props => (
  <div>
    <div>Title</div>
    <Input id="title" onChange={props.newPostAction} value={props.title} />
    <div>Body</div>
    <Input id="body" onChange={props.newPostAction} value={props.body} />
  </div>
));

NewPost.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  newPostAction: PropTypes.func
};

export default NewPost;
