import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from "./actions"
import { Link } from 'react-router-dom'
import style from './style.css';

class MainPage extends Component {
    componentDidMount() {
        this.props.getPostsAction()
    }
    render() {
        const { posts } = this.props;
        console.log(posts)
        return (
            <div className={style.postList}>
                {posts.map(function (postItem, index) {
                    return (
                        <div key={index} className={style.postWrapper}>
                            <div className={style.postTitle}>
                                <Link to='/post'>{postItem.title}</Link>
                            </div>
                            <div className={style.postContent}>{postItem.content}</div>
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