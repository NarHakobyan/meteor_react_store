import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import Validator from 'imports/utils/validatior';

import './style.css';

class Login extends Component {
    handleInputTouch = (event, field) => {
        this.validator.touchField(field);
        this.handleInputChange(event, field);
    };
    
    constructor() {
        super();
        this.state = {
            userInfo: {
                username: '',
                password: '',
            },
        };
        this.validator = new Validator({
                username: {
                    rules: [
                        {
                            test: /^[a-z0-9_]+$/,
                            message: 'Username must contain only alphabets-numeric lowercase characters',
                        }, {
                            test: (value) => {
                                return value.length > 2;
                            },
                            message: 'Username must be longer than two characters',
                        }],
                },
                password: {
                    rules: [
                        {
                            test: (value) => {
                                return value.length >= 6;
                            },
                            message: 'Password must not be shorter than 6 characters',
                        }],
                },
            },
        );
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.userInfo[inputPropName] = event.target.value;
        this.setState(newState);
        this.validator.validate(inputPropName, event.target.value);
    }
    
    handleSubmit(e) {
        console.log(this.state);
        console.log('Yepee! form submitted');
        e.preventDefault();
    }
    
    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                        {JSON.stringify(this.validator.getErrors('username'))}
                        <input type="text"
                               placeholder="username"
                               value={this.state.userInfo.username}
                               onChange={event => this.handleInputChange(event, 'username')}
                               onBlur={event => this.handleInputTouch(event, 'username')}
                        />
                        {JSON.stringify(this.validator.getErrors('password'))}
                        <input type="password"
                               placeholder="password"
                               value={this.state.userInfo.password}
                               onChange={event => this.handleInputChange(event, 'password')}
                               onBlur={event => this.handleInputTouch(event, 'password')}
                        />
                        <button className={`btn waves-effect waves-light col s12 ${this.validator.valid ? '' : 'disabled'}`}>login</button>
                        <p className="message">Not registered? <a className="pointer" onClick={() => this.props.navigate('/register')}>Create an account</a></p>
                    </form>
                </div>
            </div>
        );
    }
}

Login.propTypes = {};
Login.defaultProps = {};

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        navigate: url => dispatch(push(url)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
