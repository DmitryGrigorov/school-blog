import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions';
import style from './style.css';

class PostPage extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.getPostDataAction(match.params.id);
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        {data
          ? <div className={style.postWrapper}>
              <div className={style.postTitle}>{data.title}</div>
              <div className={style.postContent}>{data.content}</div>
            {/* <div className={style.footer}>
            <div className={style.leftCol}>
               <div id={postItem.id} className={style.like} onClick={onClickLike}>
                   <div>Like:{postItem.likesCount}</div></div> 
               <div id={postItem.id} onClick={onClickDisLike} className={style.dislike}>Dislike:{postItem.dislikesCount}</div> 
            </div>
            
            <div className={style.viewWrapper}>
              <div className={style.eye}></div>
              <div>{postItem.viewsCount}</div>
            </div>
          </div></div> */}
          </div>
          : <div>loading...</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.post.data
  };
}

export default connect(mapStateToProps, Actions)(PostPage);