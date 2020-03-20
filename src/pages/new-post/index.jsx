import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Input from 'src/components/input'
import * as Actions from './actions'



class NewPost extends React.Component{
 static propTypes = {
  dataForm: PropTypes.object.isRequired,
  changeFieldAction: PropTypes.func.isRequired
 }

 render(){
  return <>
   <div>
    <label>title</label>
    <Input id='title' value={this.props.dataForm.title} onChange={this.props.changeFieldAction} />
   </div>
   <div>
    <label>body</label>
    <Input id='body' value={this.props.dataForm.body} onChange={this.props.changeFieldAction} />
   </div>
  </>
 }
}




const mapStateToProps = (state) => ({dataForm: state.newPost.dataForm})
export default connect(mapStateToProps, Actions)(NewPost)