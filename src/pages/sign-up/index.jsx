import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import * as Actions from './actions';

class SignUp extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired
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
            email
          </div>
          <div>
            <Input
              id="email"
              value={this.props.dataForm.email}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>

        <div>
          <div>
            firstName
          </div>
          <div>
            <Input
              id="firstName"
              value={this.props.dataForm.firstName}
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

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataForm: state.signUp.dataForm
});

export default connect(mapStateToProps, Actions)(SignUp);
