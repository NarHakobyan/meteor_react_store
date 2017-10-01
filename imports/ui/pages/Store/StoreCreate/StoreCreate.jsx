import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import CustomValidator from 'imports/utils/validatior';

import './style.css';

class StoreCreate extends Component {
    handleInputTouch = (value, field) => {
        this.validator.touchField(field);
        this.handleInputChange(value, field);
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.storeCreate(this.state.storeInfo, (err, storeId) => this.props.navigate(`/stores/${storeId}`));
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
            storeInfo: {
                name: '',
                description: '',
                incompleteCount: 0,
            },
        };
        this.validator = new CustomValidator({
                name: {
                    rules: [
                        {
                            test: (value) => value.length > 2,
                            message: 'Name must be longer than two characters',
                        }],
                },
                description: {
                    rules: [
                        {
                            test: (value) => value.length > 2,
                            message: 'Description must be longer than two characters',
                        }],
                },
                incompleteCount: {
                    rules: [
                        {
                            test: value => value > 0,
                            message: 'Count must be greater then zero',
                        }],
                },
            },
        );
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(value, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.storeInfo[inputPropName] = value;
        this.setState(newState);
        this.validator.validate(inputPropName, value);
    }
    
    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form onSubmit={this.handleSubmit} className="login-form">
                        {this.renderErrors(this.validator.getErrors('name'))}
                        <input type="text"
                               placeholder="name"
                               value={this.state.storeInfo.name}
                               onChange={event => this.handleInputChange(event.target.value, 'name')}
                               onBlur={event => this.handleInputTouch(event.target.value, 'name')}
                        />
                        {this.renderErrors(this.validator.getErrors('description'))}
                        <input type="text"
                               placeholder="description"
                               value={this.state.storeInfo.description}
                               onChange={event => this.handleInputChange(event.target.value, 'description')}
                               onBlur={event => this.handleInputTouch(event.target.value, 'description')}
                        />
                        {this.renderErrors(this.validator.getErrors('incompleteCount'))}
                        <input type="number"
                               placeholder="incompleteCount"
                               value={this.state.storeInfo.incompleteCount}
                               onChange={event => this.handleInputChange(event.target.value, 'incompleteCount')}
                               onBlur={event => this.handleInputTouch(event.target.value, 'incompleteCount')}
                        />
                        <button className={`btn ${this.validator.valid ? '' : 'disabled'}`} disabled={!this.validator.valid}>Create Store</button>
                    </form>
                </div>
            </div>
        );
    }
}

StoreCreate.propTypes = {};
StoreCreate.defaultProps = {};

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        navigate: url => dispatch(push(url)),
    };
}

export default createContainer((props) => {
    return {
        storeCreate: (storeInfo, callback) => Meteor.call('store.create', storeInfo, callback),
        
    };
}, connect(mapStateToProps, mapDispatchToProps)(StoreCreate));
