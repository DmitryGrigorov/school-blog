import React, {Component} from "react";
import style from './style.css'

export default class Loader extends Component {
	render(){
	    return(
            <div className={style.loader}>
                <div/>
                <div/>
            </div>
	    )
	}
}