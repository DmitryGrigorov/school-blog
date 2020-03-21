import React, { Component } from 'react';
import { connect } from 'react-redux';

import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import * as Actions from './actions';

class SignIn extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
  };

  onClick = () => {
    console.log('this.props', this.props);
    this.props.push('/')
  };

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
          </div>
          <button onClick={this.onClick}>Login</button>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataForm: state.signIn.dataForm
});

export default connect(mapStateToProps, { push,...Actions})(SignIn);
