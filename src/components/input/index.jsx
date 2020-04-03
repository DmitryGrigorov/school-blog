import React from 'react'
import s from './style.css'



class Input extends React.Component{
 onChange = (e) => {
  const value = e.target.value
  const {id, onChange} = this.props

  onChange({fieldId: id, value})
 }

 onBlur = () => this.props.onBlur && this.props.onBlur()

 render(){
  const {id, placeholder, value, notice = '0|'} = this.props
  const a_notice = notice.split('|')

  return <>
<label className={`${s.labelOfInput} ${a_notice[0] < 0 ? s.error : ''} ${a_notice[0] > 0 ? s.valid : ''}`} htmlFor={id}>{a_notice[1] && a_notice[1]}</label>
<input type='text' id={id} placeholder={placeholder} value={value} onChange={this.onChange} onBlur={this.onBlur} placeholder={placeholder} />
  </>
 }
}



export default Input