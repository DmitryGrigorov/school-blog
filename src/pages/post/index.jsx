import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from "./actions";

// import Input from 'src/components/input'
// import Textarea from 'src/components/textarea'
// import Button from 'src/components/button'
import style from './style.css';

class PostPage extends Component {
    
    componentDidMount() {
        this.props.getPostDataAction()
    }

    render() {
        const { data } = this.props
        return (
            <div>
                {data 
                    ? <div>post</div>
                    : <div>loading...</div>
                }
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         posts: state.mainPageReducer.posts
//     };
// }
function mapDispatchToProps(state) { // все что вызывает данная функция попадает в props
    return {
       data: state.postReducer.data
    };
}
 
export default connect(mapDispatchToProps, Actions)(PostPage)