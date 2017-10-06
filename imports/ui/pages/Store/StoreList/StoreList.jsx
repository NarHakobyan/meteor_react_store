import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { createContainer } from 'meteor/react-meteor-data';

import Store from 'imports/api/store';
import StoreCard from 'imports/ui/components/StoreCard';
import { showConfirmAlert } from 'imports/store/actions/alert.action';

import './style.css';

class StoreList extends Component {
    render() {
        console.log(this.props.stores);
        return (
            <div className="container">{
                this.props.stores.map(store => <StoreCard
                    key={store['_id']} {...store}
                    onDelete={() => this.props.deleteStore(store['_id'])}
                    productList={() => this.props.navigate(`/stores/${store['_id']}`)}
                />)}</div>
        );
    }
    
    componentDidMount() {
        console.log(StoreList);
    }
    
}

StoreList.propTypes = {};
StoreList.defaultProps = {
    stores: [],
};

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch, props) {
    return {
        navigate: url => dispatch(push(url)),
        deleteStore: (storeId) => dispatch(showConfirmAlert({ text: 'are you sure?', onConfirm: () => Meteor.call('store.delete', storeId, console.log) })),
    };
}

export default createContainer(() => {
    Meteor.subscribe('store');
    return {
        stores: Store.find().fetch(),
    };
}, connect(mapStateToProps, mapDispatchToProps)(StoreList));