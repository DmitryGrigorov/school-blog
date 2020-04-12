import React from 'react'
import {createPortal} from 'react-dom'
import s from './style.css'



class WrapperOfPopUp extends React.Component{
 element = null;

 constructor(props){
  super(props)

  this.element = document.createElement('aside')
  document.body.append(this.element)
 }

 componentWillUnmount(){
  this.element.remove()
 }

 render(){
  return createPortal((
<section>
 <button className={s.close} onClick={this.props.setIsShowPopUp}>+</button>
 {this.props.children}
</section>
  ), this.element)
 }
}



export default WrapperOfPopUp