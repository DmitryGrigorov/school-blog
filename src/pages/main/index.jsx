import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as Actions from './actions'
import s from './style.css'



class Main extends React.Component{
 componentDidMount(){
  this.props.getPostsAction()
  window.addEventListener('scroll', this.onScroll)
 }
 componentWillUnmount(){
  window.removeEventListener('scroll', this.onScroll)
 }

 onScroll = () => {
  const {posts, isLoadingPosts, getPostsWhenScrollingAction} = this.props
  if((document.documentElement.clientHeight + 100) >= document.documentElement.getBoundingClientRect().bottom && !isLoadingPosts){ getPostsWhenScrollingAction(posts.length) }
 }

 handlerLike = (idOfPost) => { console.log('idOfPost', idOfPost)
  this.props.increaseLikeAction(idOfPost)
 }

 handlerDislike = (idOfPost) => { console.log('idOfPost', idOfPost)
  this.props.increaseDislikeAction(idOfPost)
 }

 render(){
  const {posts} = this.props

  return <>
   {posts.map((v) => {
    return (
<div key={v.id} className={s.post}>
 <Link to={`/post/${v.id}`}>{v.title}</Link>
 <div>{v.content}</div>
 <div>
  <div>
   <div onClick={(e) => this.handlerLike(v.id)}>Like {v.likesCount}</div>
   <div onClick={(e) => this.handlerDislike(v.id)}>Dislike {v.dislikesCount}</div>
  </div>
  <div>Eyes {v.viewsCount}</div>
 </div>
</div>
    )
   })}
  </>
 }
}



const mapStateToProps = (state) => {
 return {
  posts: state.main.aPosts,
  isLoadingPosts: state.main.isLoadingPosts
 }
}
export default connect(mapStateToProps, Actions)(Main)