import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from './actions';
import style from './style.css';
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
                     <div className={style.postList}>
                        <div className={style.postTitle}>
                            <Link to={`/post/${postItem.id}`}>{postItem.title}</Link>
                            </div>
                        <div className={style.postContent}>{postItem.content}</div>
                    </div>
                   

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