import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as Actions from './actions'
import s from './style.css'



class Main extends React.Component{
 componentDidMount(){
  this.props.getPostsAction()
 }

 render(){
  const {posts} = this.props

  return <>
   {posts.map((v) => {
    return (
<div key={v.id} className={s.post}>
 <Link to={`/post/${v.id}`}>{v.title}</Link>
 <div>{v.content}</div>
</div>
    )
   })}
  </>
 }
}



const mapStateToProps = (state) => {
 return {
  posts: state.main.aPosts
 }
}
export default connect(mapStateToProps, Actions)(Main)