import React from 'react'
import {connect} from 'react-redux'
import * as Actions from './actions'
import s from './style.css'



class ReadPost_popUp extends React.Component{
 componentDidMount(){
  this.props.readDataOfPostAction(this.props.idOfPost)
 }

 render(){
  const {data} = this.props
  return <div className={s.popUp}>{data ? <><div>{data.title}</div><div>{data.content}</div></> : 'loading...' }</div>
 }
}



const mapStateToProps = (state) => { return {data: state.readPost.data} }
export default connect(mapStateToProps, Actions)(ReadPost_popUp)