import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Store from 'imports/api/store';

class App extends Component {
    render() {
        return (
            <div className="container">Store{this.props.stores && this.props.stores.map(link => <a key={link['_id']} href={link.url}>{link.title}</a>)}</div>
        );
    }
}

App.propTypes = {};
App.defaultProps = {};

export default createContainer(() => {
    Meteor.subscribe('store');
    return {
        stores: Store.find().fetch(),
    };
}, App);
