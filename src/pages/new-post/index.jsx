import React, {Component} from 'react';
import { connect } from 'react-redux';
import Input from 'src/components/input/index';
import PropTypes from 'prop-types';
 import * as Actions from './actions';

class NewPost extends Component {
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
      };
    render(){
        return(
            <div>
               <h1>New Post</h1> 
            <div>
                Title
            </div>
            <Input 
                id='title'
                value={this.props.dataForm.title}
                onChange={this.props.changeFieldAction}
            />
            <div>
                Body
            </div>
            <Input 
                id='body'
                value={this.props.dataForm.body}
                onChange={this.props.changeFieldAction}
            />
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    dataForm: state.newPost.dataForm
});

export default connect(mapStateToProps, Actions)(NewPost);
