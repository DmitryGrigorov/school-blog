import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import * as Actions from './actions'
import style from './style.css'
import Button from "../../components/button";
import Loader from "../../components/loader";
import Input from "../../components/input";
import Textarea from "../../components/textarea";

class Post extends Component {


    static propTypes = {
        getPostDataAction: PropTypes.func.isRequired,
        increaseLikeCountAction: PropTypes.func.isRequired,
        leavePageAction: PropTypes.func.isRequired,
        deletePostAction: PropTypes.func.isRequired,
        updatePostAction: PropTypes.func.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
    };

    componentWillUnmount() {
        this.props.leavePageAction();
    }

    componentDidMount() {
        console.log(this.props)
        const {match} = this.props
        this.props.getPostDataAction(match.params.id);
    }

    increaseLikeCount(id) {
        console.log(id)
        this.props.increaseLikeCountAction(id);
    }

    decreaseLikeCount(id) {
        this.props.decreaseLikeCountAction(id);
    }

    onDeletePost(postId, userId) {
        this.props.deletePostAction(postId, userId);
    }

    onUpdatePost(postId, userId, dataForm) {
        this.props.updatePostAction(postId, userId, dataForm);
    }

    render() {
        // console.log(this.props.user)
        const {data} = this.props
        console.log(this.props)
        return (
            <div className={style.postWrapper}>
                {
                    data
                    ? this.props.user && data.authorId === this.props.user.id
                        ?
                        <>
                            <div>

                                <div className={style.input}>
                                    <Input
                                        id="title"
                                        value={this.props.dataForm.title}
                                        onChange={this.props.changeFieldAction}
                                    />

                                </div>
                                <div className={style.textarea}>
                                    <Textarea
                                        id="content"
                                        value={this.props.dataForm.content}
                                        onChange={this.props.changeFieldAction}
                                    />
                                </div>

                            </div>
                            <div className={style.postManager}>
                                <Button onClick={() => this.onUpdatePost(data.id, this.props.user.id, this.props.dataForm)}>Изменить</Button>
                                <Button
                                    onClick={() => this.onDeletePost(data.id, this.props.user.id)}>Удалить</Button>
                            </div>
                        </>
                        :
                        <div>
                            <div className={style.postTitle}>{data.title}</div>
                            <div className={style.postContent}>{data.content}</div>

                            <div className={style.footer}>
                                <div className={style.viewWrapper}>
                                    <div onClick={() => this.increaseLikeCount(data.id)}
                                         className={style.like}>Like {data.likesCount}</div>
                                    <div onClick={() => this.decreaseLikeCount(data.id)}
                                         className={style.dislike}>Dislike {data.dislikesCount}</div>
                                </div>

                                <div className={style.viewWrapper}>
                                    <div className={style.eye}></div>
                                    <div className={style.viewCount}>{data.viewsCount}</div>
                                </div>
                            </div>
                        </div>


                    : <div className={style.loader}>
                        <Loader/>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        data: state.post.data,
        dataForm: state.post.dataForm
    });
}

export default connect(mapStateToProps, Actions)(Post)