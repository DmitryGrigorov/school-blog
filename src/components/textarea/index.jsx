import React from 'react'



class Textarea extends React.Component{
 onChange = (e) => {
  const value = e.target.value
  const {id, onChange} = this.props
  onChange({fieldId: id, value})
 }

 render(){
  const {value} = this.props

  return <textarea onChange={this.onChange} value={value} />
 }
}



export default Textarea