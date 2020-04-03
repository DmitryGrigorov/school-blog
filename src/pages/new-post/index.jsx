import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Input from 'src/components/input'
import Textarea from 'src/components/textarea'
import Button from 'src/components/button'
import * as Actions from './actions'



class NewPost extends React.Component{
 static propTypes = {
  data: PropTypes.object.isRequired,
  changeFieldAction: PropTypes.func.isRequired,
  setPostAction: PropTypes.func.isRequired
 }

 handlerOnChange = ({fieldId, value}) => this.props.changeFieldAction(fieldId, value)

 handlerOnClick = () => this.props.setPostAction(this.props.data)

 render(){
  return <>
<div>
 <Input id='title' placeholder='Заголовок' value={this.props.data.title} onChange={this.handlerOnChange} />
</div>
<div>
 <Textarea id='content' placeholder='Содержание' value={this.props.data.content} onChange={this.handlerOnChange} />
</div>
<div>
 <Button type='submit' onClick={this.handlerOnClick}>Отправить</Button>
</div>
  </>
 }
}




const mapStateToProps = (state) => ({data: state.newPost.dataForm})
export default connect(mapStateToProps, Actions)(NewPost)