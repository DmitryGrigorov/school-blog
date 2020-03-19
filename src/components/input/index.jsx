import React from 'react'



class Input extends React.Component{
 onChange = (e) => {
  const value = e.target.value
  const {id, onChange} = this.props

  onChange({fieldId: id, value})
 }

 render(){
  const { value } = this.props

  return <input type='text' value={value} onChange={this.onChange} />
 }
}



export default Input