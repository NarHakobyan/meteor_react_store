import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import ReactLoading from 'react-loading';
import classNames from 'classnames';

class Header extends Component {
    
    menuRender() {
        if (this.props.userId) {
            return (<ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" role="button" onClick={() => this.props.navigate('/stores')}>Store</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" role="button" onClick={() => this.props.navigate('/stores/create')}>Create Store</a>
                </li>
            </ul>);
        } else {
            return (<ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" role="button" onClick={() => this.props.navigate('/')}>Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" role="button" onClick={() => this.props.navigate('/login')}>Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" role="button" onClick={() => this.props.navigate('/register')}>Register</a>
                </li>
            </ul>);
        }
    }
    
    logoutRender() {
        if (this.props.userId) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" role="button" onClick={() => this.props.navigate('/login')}>Log out</a>
                    </li>
                </ul>);
        }
    }
    
    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-light header-background">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <a className="navbar-brand" role="button" onClick={() => this.props.navigate('/')}>Navbar</a>
                <ReactLoading className={classNames({'visibility-hidden': this.props.loading})} type="spin" color="#444" height="40px" width="40px" />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {this.menuRender()}
                    {this.logoutRender()}
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
    
    componentDidMount() {
        console.log(this.props);
    }
    
}

Header.propTypes = {};
Header.defaultProps = {};

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
        loading: !!Session.get('loading'),
    };
}, connect(mapStateToProps, mapDispatchToProps)(Header));
