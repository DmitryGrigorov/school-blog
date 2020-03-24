import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions';
class MainPage extends Component {
    componentDidMount(){
        this.props.getPostsAction();
    }
    render(){
        const { posts } = this.props;
        return (
            <div>{posts.map(function(postItem){
                return (
                <div>
                    <div>{postItem.title}</div>
                    <div>{postItem.content}</div>
                   

                </div>

                )
            })}</div>
        )
    }
}

function mapStateToProps(state) {
    return {
      posts: state.main.posts
    };
  }
  
export default connect(mapStateToProps, Actions)(MainPage);