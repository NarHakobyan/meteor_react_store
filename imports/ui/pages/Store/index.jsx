import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Store from 'imports/api/store';
import './style.css';
import StoreCard from 'imports/ui/components/StoreCard';
import { connect } from 'react-redux';
import { showConfirmAlert } from 'imports/store/actions/alert.action';

class StoreComponent extends Component {
    render() {
        return (
            <div className="container">{this.props.stores.map(store => <StoreCard key={store['_id']} {...store} onDelete={() => this.props.deleteStore(store['_id'])} />)}</div>
        );
    }
    
    componentDidMount() {
        console.log(StoreComponent);
    }
    
}

StoreComponent.propTypes = {};
StoreComponent.defaultProps = {
    stores: [],
};


function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        deleteStore: (storeId) => dispatch(showConfirmAlert({text: "are you sure?", onConfirm: () => Meteor.call('store.delete', storeId, console.log)})),
    };
}

export default createContainer(() => {
    Meteor.subscribe('store');
    return {
        stores: Store.find().fetch(),
    };
}, connect(mapStateToProps, mapDispatchToProps)(StoreComponent));