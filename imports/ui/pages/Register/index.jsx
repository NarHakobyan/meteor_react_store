import { Accounts } from 'meteor/accounts-base';
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import isEmail from 'validator/lib/isEmail';
import CustomValidator from 'imports/utils/validatior';

import './style.css';

class Register extends Component {
    handleInputTouch = (event, field) => {
        this.validator.touchField(field);
        this.handleInputChange(event, field);
    };
    handleSubmit = (e) => {
        e.preventDefault();
        Accounts.createUser(this.state.userInfo, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            this.props.navigate('/');
        });
        console.log(this.state);
        console.log('Yepee! form submitted');
    };
    renderErrors = (errors) => {
        if (errors.length) {
            return errors.map(error => <span key={error} className="text-danger">{error}</span>);
        }
    };
    
    constructor() {
        super();
        this.state = {
            userInfo: {
                fullName: '',
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
        };
        this.validator = new CustomValidator({
                fullName: {
                    rules: [
                        {
                            test: (value) => value.length > 2,
                            message: 'Full name must be longer than two characters',
                        }],
                },
                username: {
                    rules: [
                        {
                            test: (value) => value.length > 2,
                            message: 'Username must be longer than two characters',
                        }],
                },
                email: {
                    rules: [
                        {
                            test: isEmail,
                            message: 'Email is not valid',
                        }],
                },
                password: {
                    rules: [
                        {
                            test: (value) => value.length >= 6,
                            message: 'Password must not be shorter than 6 characters',
                        }],
                },
                confirmPassword: {
                    rules: [
                        {
                            test: (value) => value.length >= 6,
                            message: 'Confirm Password must not be shorter than 6 characters',
                        }, {
                            test: (value) => value === this.state.userInfo.password,
                            message: 'Passwords are not match',
                        }],
                },
            },
        );
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.userInfo[inputPropName] = event.target.value;
        this.setState(newState);
        this.validator.validate(inputPropName, event.target.value);
    }
    
    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form onSubmit={this.handleSubmit} className="login-form">
                        {this.renderErrors(this.validator.getErrors('fullName'))}
                        <input type="text"
                               placeholder="fullName"
                               value={this.state.userInfo.fullName}
                               onChange={event => this.handleInputChange(event, 'fullName')}
                               onBlur={event => this.handleInputTouch(event, 'fullName')}
                        />
                        {this.renderErrors(this.validator.getErrors('username'))}
                        <input type="text"
                               placeholder="username"
                               value={this.state.userInfo.username}
                               onChange={event => this.handleInputChange(event, 'username')}
                               onBlur={event => this.handleInputTouch(event, 'username')}
                        />
                        {this.renderErrors(this.validator.getErrors('email'))}
                        <input type="text"
                               placeholder="email"
                               value={this.state.userInfo.email}
                               onChange={event => this.handleInputChange(event, 'email')}
                               onBlur={event => this.handleInputTouch(event, 'email')}
                        />
                        {this.renderErrors(this.validator.getErrors('password'))}
                        <input type="password"
                               placeholder="password"
                               value={this.state.userInfo.password}
                               onChange={event => this.handleInputChange(event, 'password')}
                               onBlur={event => this.handleInputTouch(event, 'password')}
                        />
                        {this.renderErrors(this.validator.getErrors('confirmPassword'))}
                        <input type="password"
                               placeholder="confirmPassword"
                               value={this.state.userInfo.confirmPassword}
                               onChange={event => this.handleInputChange(event, 'confirmPassword')}
                               onBlur={event => this.handleInputTouch(event, 'confirmPassword')}
                        />
                        <button className={`btn ${this.validator.valid ? '' : 'disabled'}`} disabled={!this.validator.valid}>Register</button>
                        <p className="message">Already registered? <a className="pointer" onClick={() => this.props.navigate('/login')}>Log in</a></p>
                    </form>
                </div>
            </div>
        );
    }
}

Register.propTypes = {};
Register.defaultProps = {};

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        navigate: url => dispatch(push(url)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
