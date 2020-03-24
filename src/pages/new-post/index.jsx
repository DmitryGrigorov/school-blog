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
      onSubmit=()=>{ 
        const { dataForm } = this.props; 
        this.props.createNewPostAction(dataForm);
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
                id='content'
                value={this.props.dataForm.content}
                onChange={this.props.changeFieldAction}
            />
            <div>
                <button onClick={this.onSubmit}>Отправить</button>
            </div>
           
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    dataForm: state.newPost.dataForm
});

export default connect(mapStateToProps, Actions)(NewPost);
