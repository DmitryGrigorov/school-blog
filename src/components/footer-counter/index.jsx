import React, {Component} from 'react';

export default class FooterCounter extends Component {
    render(){
        return(
            <div className='footer'>
            count = {this.props.counter}
            <button
              onClick={() => this.props.increaseAction(1)}
            >
              increase 1
            </button>
            <button
              onClick={() => this.props.increaseAction(55)}
            >
              increase 55
            </button>
            <button
              onClick={() => this.props.decreaseAction(1)}
            >
              decrease
            </button>
            </div>
        )
    }
}