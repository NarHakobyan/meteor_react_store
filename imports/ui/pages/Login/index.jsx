import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import CustomValidator from 'imports/utils/validatior';
import { createContainer } from 'meteor/react-meteor-data';

import './style.css';

class Login extends Component {
    
    componentWillMount() {
        Session.set('loading', true);
        Accounts.logout();
    }
    
    componentDidMount() {
        this.props.showAlert();
    }
    
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
        this.validator = new CustomValidator({
                username: {
                    rules: [
                        {
                            test: (value) => value.length > 2,
                            message: 'Username must be longer than two characters',
                        }],
                },
                password: {
                    rules: [
                        {
                            test: (value) => value.length >= 6,
                            message: 'Password must not be shorter than 6 characters',
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
    
    handleSubmit = (e) => {
        e.preventDefault();
        Session.set('loading', true);
        Meteor.loginWithPassword(this.state.userInfo.username, this.state.userInfo.password, err => {
            if (err) {
                console.log(err);
                return;
            }
            Session.set('loading', false);
            this.props.navigate('/');
        });
    };
    
    renderErrors = (errors) => {
        if (errors.length) {
            return errors.map(error => <span key={error} className="text-danger">{error}</span>);
        }
    };
    
    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form onSubmit={this.handleSubmit} className="login-form">
                        {this.renderErrors(this.validator.getErrors('username'))}
                        <input type="text"
                               placeholder="username"
                               value={this.state.userInfo.username}
                               onChange={event => this.handleInputChange(event, 'username')}
                               onBlur={event => this.handleInputTouch(event, 'username')}
                        />
                        {this.renderErrors(this.validator.getErrors('password'))}
                        <input type="password"
                               placeholder="password"
                               value={this.state.userInfo.password}
                               onChange={event => this.handleInputChange(event, 'password')}
                               onBlur={event => this.handleInputTouch(event, 'password')}
                        />
                        <button className={`btn ${this.validator.valid ? '' : 'disabled'}`} disabled={!this.validator.valid}>login</button>
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

export default createContainer(() => {
    return {
        userId: Meteor.userId(),
    };
}, connect(mapStateToProps, mapDispatchToProps)(Login));
