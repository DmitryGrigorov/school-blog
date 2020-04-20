import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { push } from 'connected-react-router';
import Input from 'src/components/input';
import Button from 'src/components/button';
import * as Actions from './actions';
import style from './style.css';
class SignIn extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
    singInAction: PropTypes.func.isRequired,
  };
//   onClick = () => {
//     console.log('this.props', this.props);
//     this.props.push('/')
//   };
onSubmit = () => {
    const { dataForm } = this.props;
    this.props.singInAction(dataForm);
  };
  render() {
    return (
      <div>
         <div className={style.signInWrapper}>
        <div className={style.row}>
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
        <div className={style.row}>
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
        </div>
        <div className={style.row}>
            <Button onClick={this.onSubmit}>Войти</Button>
        </div>
        </div>
        </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   dataForm: state.signIn.dataForm
// });
const stateToProps = (state) => ({
    dataForm: state.signIn.dataForm
  });
// export default connect(mapStateToProps, {
//     push,
//     ...Actions
//   })(SignIn);
export default connect(stateToProps, Actions)(SignIn);