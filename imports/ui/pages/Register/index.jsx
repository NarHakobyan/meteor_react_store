import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }
    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                        <input type="text" placeholder="username"/>
                        <input type="text" placeholder="email"/>
                        <input type="password" placeholder="password"/>
                        <input type="password" placeholder="confirm password"/>
                        <button>Register</button>
                        <p className="message">Already registered? <a className="pointer" onClick={() => this.props.navigate('/login')}>Log in</a></p>
                    </form>
                </div>
            </div>
        );
    }
    
    componentDidMount() {
        /*Accounts.createUser({
            username: 'user1',
            email: 'user1',
            password: 'user1',
        }, console.log)*/
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
