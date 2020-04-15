import React, {Component} from "react";
import Input from "../../components/input";
import {connect} from "react-redux";
import * as Actions from "./actions";
import PropTypes from 'prop-types';
import Button from "../../components/button";
import style from "./style.css"
import Textarea from "../../components/textarea";

class NewPost extends Component {

    static propTypes = {
        createPostAction: PropTypes.func.isRequired,

    };

    onCreatePost(dataForm) {
        this.props.createPostAction(dataForm);
    }

    render() {
        return (
            <div className={style.newPostWrapper}>
                <div className={style.input}>
                    <Input
                        label='Заголовок'
                        id="title"
                        value={this.props.dataForm.title}
                        onChange={this.props.changeFieldAction}
                    />
                </div>
                <div className={style.textarea}>
                    <Textarea
                        label='Контент'
                        id="content"
                        value={this.props.dataForm.content}
                        onChange={this.props.changeFieldAction}
                    />
                </div>
                <div className={style.button}>
                    <Button id='submit' onClick={() => this.onCreatePost(this.props.dataForm)}>Создать</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dataForm: state.newPost.dataForm
});

export default connect(mapStateToProps, Actions)(NewPost);
