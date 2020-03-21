import React, {Component} from 'react';

export default class NewPost extends Component {
    render(){
        return(
            <div>
               <h1>New Post</h1> 
            <form>
                <div>Title</div>
                <input type='text'></input>
                <div>Body</div>
                <input type='text'></input>
            </form>
            </div>
        )
    }
}