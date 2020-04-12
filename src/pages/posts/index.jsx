import React from 'react'
import {connect} from 'react-redux'
import * as Actions from './actions'
import PopUp from '../../components/popUp'
import ReadPost_popUp from './components/popUps/read-post'
import AddPost_popUp from './components/popUps/add-post'
import s from './style.css'



class Posts extends React.Component{
 state = {idOfShownPost: null}
 setIdOfShownPost = (idOfPost) => {
  this.setState({idOfShownPost: idOfPost})
  this.props.setIsShowPopUpReadPost()
 }

 componentDidMount(){
  this.props.getPostsAction()
  window.addEventListener('scroll', this.onScroll)
 }
 componentDidUpdate(){ this.props.getPostsAction() }
 componentWillUnmount(){ window.removeEventListener('scroll', this.onScroll) }

 onScroll = () => {
  const {posts, isLoadingPosts, getPostsWhenScrollingAction} = this.props
  if((document.documentElement.clientHeight + 100) >= document.documentElement.getBoundingClientRect().bottom && !isLoadingPosts){ getPostsWhenScrollingAction(posts.length) }
 }

 handlerLike = (idOfPost) => this.props.increaseLikeAction(idOfPost)

 handlerDislike = (idOfPost) => this.props.increaseDislikeAction(idOfPost)

 render(){
  const {posts} = this.props

  return (
   <section id={s.posts}>
    <div>
   {posts.map((v) => {
    return (
<div key={v.id} className={s.post}>
 <div onClick={() => this.setIdOfShownPost(v.id)}>{v.title}</div>
 <div>{v.content}</div>
 <div>
  <div>Глядели {v.viewsCount}</div>
  <div>
   <div onClick={(e) => this.handlerLike(v.id)}>Любо {v.likesCount}</div>
   <div onClick={(e) => this.handlerDislike(v.id)}>Нелюбо {v.dislikesCount}</div>
  </div>
 </div>
</div>
    )
   })}
    </div>

    {this.props.dataOfCurrentUser && (
     <>
      <button id={s.newPost} onClick={this.props.setIsShowPopUpAddPost}>+</button>
      {this.props.isShowPopUpAddPost && <PopUp setIsShowPopUp={this.props.setIsShowPopUpAddPost}><AddPost_popUp setIsShowPopUp={this.props.setIsShowPopUpAddPost} /></PopUp>}
     </>
    )}
    {this.props.isShowPopUpReadPost && <PopUp setIsShowPopUp={this.props.setIsShowPopUpReadPost}><ReadPost_popUp idOfPost={this.state.idOfShownPost} /></PopUp>}
  </section>
  )
 }
}



const mapStateToProps = (state) => {
 return {
  posts: state.posts.aPosts,
  isLoadingPosts: state.posts.isLoadingPosts,
  isShowPopUpReadPost: state.posts.isShowPopUpReadPost,
  isShowPopUpAddPost: state.posts.isShowPopUpAddPost,
  dataOfCurrentUser: state.application.user
 }
}
export default connect(mapStateToProps, Actions)(Posts)