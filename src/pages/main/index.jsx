import React, {Component} from "react";
import {connect} from "react-redux";
import * as Actions from './actions'
import PropTypes from 'prop-types';
import style from './style.css'
import {Link} from "react-router-dom";
import Loader from "../../components/loader";


class Main extends Component {
    static propTypes = {
        getInitPostsAction: PropTypes.func.isRequired,
        getScrollPostsAction: PropTypes.func.isRequired,
        increaseLikeCountAction: PropTypes.func.isRequired,
        decreaseLikeCountAction: PropTypes.func.isRequired,
        leavePageAction: PropTypes.func.isRequired

    };
    onScroll = e => {
        const scroll = e.srcElement.scrollingElement;
        if (scroll.scrollHeight - scroll.clientHeight < scroll.scrollTop + 1) {
            this.props.getScrollPostsAction(this.props.posts.length);
        }
    }


    increaseLikeCount(id) {
        this.props.increaseLikeCountAction(id);
    }

    decreaseLikeCount(id) {
        this.props.decreaseLikeCountAction(id);
    }

    componentDidMount() {
        this.props.getInitPostsAction();
        window.addEventListener('scroll', this.onScroll);
    }
    componentWillUnmount() {
        this.props.leavePageAction();
        window.removeEventListener('scroll', this.onScroll);
    }
    render() {
        return (

            <div className={style.postList}>
                {this.props.posts.map((post, index) => {
                    return (
                        <div key={index}>
                            <div className={style.postWrapper}>
                                <Link to={`/post/${post.id}`} className={style.title}>{post.title}</Link>
                                <div
                                    className={style.content}>{post.content ? post.content.length > 100 ? post.content.substr(0, 97) + '...' : post.content : 'Без контента'}</div>
                                <div className={style.footer}>
                                    <div className={style.viewWrapper}>
                                        <div onClick={() => this.increaseLikeCount(post.id)}
                                             className={style.like}>Like {post.likesCount}</div>
                                        <div onClick={() => this.decreaseLikeCount(post.id)}
                                             className={style.dislike}>Dislike {post.dislikesCount}</div>
                                    </div>

                                    <div className={style.viewWrapper}>
                                        <div className={style.eye}></div>
                                        <div className={style.viewCount}>{post.viewsCount}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {this.props.isScrollLoading
                    ? <Loader/>
                    : null}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.main.posts,
        isScrollLoading: state.main.isScrollLoading
    }
}

export default connect(mapStateToProps, Actions)(Main)