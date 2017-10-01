import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Store from 'imports/api/store';
import './style.css';

class Home extends Component {
    render() {
        return (
            <div className="container">Store{this.props.stores && this.props.stores.map(link => <a key={link['_id']} href={link.url}>{link.title}</a>)}</div>
        );
    }
    
    componentDidMount() {
        try {
            let a = Store.schema.validate({ description: 'asd' });
            console.log(a);
        } catch (err) {
            console.log(err);
            
        }
    }
    
}

Home.propTypes = {};
Home.defaultProps = {};

export default createContainer(() => {
    Meteor.subscribe('store');
    return {
        stores: Store.find().fetch(),
    };
}, Home);