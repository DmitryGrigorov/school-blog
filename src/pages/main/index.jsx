import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from "./actions"
import { Link } from 'react-router-dom'
import style from './style.css';

class MainPage extends Component {
    
    componentDidMount() {
        this.props.getInitPostsAction();
        window.addEventListener('scroll', this.onScroll)
    }

    onScroll = (e) => {
        
        // const { posts } = this.props;
        // const postsLength = posts.length;
        // const windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        const { posts } = this.props;
        console.log(posts)
        return (
            <div
                className={style.postList}
                onScroll={this.onScroll}
            >
                {posts.map(function (postItem, index) {
                    return (
                        <div key={index} className={style.postWrapper}>
                            <div className={style.postTitle}>
                                <Link className={style.linkTitle} to={`/post/${postItem.id}`}>{postItem.title}</Link>
                            </div>
                            <div className={style.postContent}>{postItem.content}</div>
                            <div className={style.footer}>
                                <div lassName={style.leftColoumn}>
                                    <div className={style.like}>Like {postItem.likesCount}</div>
                                    <div className={style.dislike}>Dislike {postItem.dislikesCount}</div>
                                </div>
                                <div className={style.viewWrapper}>
                                {postItem.viewsCount} <div className={style.eye}></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.mainPageReducer.posts
    };
}

export default connect(mapStateToProps, Actions)(MainPage)