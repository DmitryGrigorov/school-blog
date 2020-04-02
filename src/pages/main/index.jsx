import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as Actions from "./actions";
import style from "./style.css";

class MainPage extends Component {
  componentDidMount() {
    this.props.getPostsAction();
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onClickLike = evt => {
    const { id } = evt.target;
    this.props.increaseLikeCountAction(id);
  };

  onClickDislike = evt => {
    const { id } = evt.target;
    this.props.increaseDislikeCountAction(id);
  };

  onScroll = e => {
    const { posts, isLoading } = this.props;
    const postsLength = posts.length;
    const windowRelativeBottom = document.documentElement.getBoundingClientRect()
      .bottom;

    if (
      windowRelativeBottom <= document.documentElement.clientHeight + 100 &&
      !isLoading
    ) {
      this.props.getScrollPostsAction(postsLength);
    }
  };

  render() {
    const { posts } = this.props;
    return (
      <div className={style.postList}>
        {posts.map(postItem => (
          <div className={style.postWrapper} key={postItem.id}>
            <div className={style.postTitle}>
              <Link className={style.linkTitle} to={`/post/${postItem.id}`}>
                {postItem.title}
              </Link>
            </div>
            <div className={style.postContent}>{postItem.content}</div>
            <div className={style.footer}>
              <div className={style.leftCol}>
                <div
                  id={postItem.id}
                  onClick={this.onClickLike}
                  className={style.like}
                >
                  Like {postItem.likesCount}
                </div>
                <div
                  id={postItem.id}
                  onClick={this.onClickDislike}
                  className={style.dislike}
                >
                  Dislike {postItem.dislikesCount}
                </div>
              </div>
              <div className={style.viewWrapper}>
                {" "}
                {postItem.viewsCount} <div className={style.eye} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.main.posts,
    isLoading: state.main.isLoading
  };
}

export default connect(mapStateToProps, Actions)(MainPage);
