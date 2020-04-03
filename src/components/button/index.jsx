import React from 'react'



class Button extends React.Component{
 onClick = () => {
  const {onClick} = this.props
  onClick && onClick()
 }

 render(){
  return <button onClick={this.onClick}>{this.props.children}</button>
 }
}



export default Button