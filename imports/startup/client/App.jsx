import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Links from 'imports/api/links';

class App extends Component {
    render() {
        return (
            <div className="container">Links{this.props.links && this.props.links.map(link => <a key={link['_id']} href={link.url}>{link.title}</a>)}</div>
        );
    }
}

App.propTypes = {};
App.defaultProps = {};

export default createContainer(() => {
    Meteor.subscribe('links');
    return {
        links: Links.find().fetch(),
    };
}, App);
