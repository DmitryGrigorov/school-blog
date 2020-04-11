import React, { Component } from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import Input from 'src/components/input'
import * as Actions from './actions'
import { push } from 'connected-react-router'
import API from 'src/api'

class SignIn extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
    signInAction: PropTypes.func.isRequired,
  };

  onLogin = () => {
    const { dataForm } = this.props
    this.props.signInAction(dataForm)
  }

  // onClick() {
  //   this.props.dispatch({
  //   })
  //   this.props.changeFieldAction()
  // }

  render() {
    return (
      <div>
        <div>
          <div>
            login
          </div>
          <div>
            <Input
              id="login"
              value={this.props.dataForm.login}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>
        <div>
          <div>
            password
          </div>
          <div>
            <Input
              id="password"
              value={this.props.dataForm.password}
              onChange={this.props.changeFieldAction}
            />
          </div>
          <button onClick={this.onLogin}>Login</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ // state лежит в store
  dataForm: state.signInReducer.dataForm
});


// const createActionIncrease = (data) => {
//   return ({
//     type: "INCREASE",
//     data
//   })
// }

// function dispatchToProps(dispatch) {
//   return ({
//     dispatch: dispatch,
//     changeState() {
//       dispatch({ type: "CHANGE_STATE" })
//     },
//     createActionIncrease(data) {
//       const action = createActionIncrease(data)
//       dispatch(action)
//     }
//   })
// }

// const actions = {
//   increaseAction() {
//     return ({
//       type: 'NAME_OF_TYPE_1'
//     })
//   },
//   decreaseAction(data) {
//     return ({
//       type: 'NAME_OF_TYPE_2',
//       data
//     })
//   }
// }

export default connect(mapStateToProps, Actions)(SignIn)
// { push, ...Actions })
