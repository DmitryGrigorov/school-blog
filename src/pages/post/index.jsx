import React from 'react'
import {connect} from 'react-redux'
import * as Actions from './actions'


class Post extends React.Component{
 componentDidMount(){
  const {match} = this.props //id из URL
  this.props.getDataOfPostAction(match.params.id)
 }

 render(){
  const {data} = this.props
  return <div>{data ? <div><div>{data.title}</div><div>{data.content}</div></div> : 'loading...' }</div>
 }
}




const mapStateToProps = (state) => {
 return {data: state.post.data}
}
export default connect(mapStateToProps, Actions)(Post)