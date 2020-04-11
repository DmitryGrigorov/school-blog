import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from 'src/components/input'
import Textarea from 'src/components/textarea'
import Button from 'src/components/button'
import style from './style.css';

class NewPost extends Component {
    onChangeData = () => {

    }
    render() {
        const { data } = this.props
        return (
            <div className={style.postFormWrapper}>
                <div className={style.row}>
                    <div>Заголовок</div>
                    <Input
                        id="title"
                        value={data.title}
                        onChange={this.onChangeData}
                    />
                </div>
                <div className={style.row}>
                    <div>Заголовок</div>
                    <Textarea  
                        id="content"
                        value={data.title}
                        onChange={this.onChangeData}
                    />
                </div>
                <div>
                    <Button>Закрыть</Button>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) { 
    return {
        data: state.newPostReducer.data
    };
}

export default connect(mapStateToProps)(NewPost)