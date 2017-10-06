import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { createContainer } from 'meteor/react-meteor-data';

import Store from 'imports/api/store';
import { showConfirmAlert } from 'imports/store/actions/alert.action';

import './style.css';

class StoreSingle extends Component {
    render() {
        if (this.props.storeSingle) {
            const store = this.props.storeSingle;
            return (
                <div className="card text-center my-4">
                    <div className="card-header">
                        <ul className="nav nav-pills card-header-pills">
                            <li className="nav-item mx-1">
                                <a className="btn btn-outline-danger pointer" onClick={() => this.props.deleteStore(store['_id'])}>Delete store</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-block">
                        <h4 className="card-title">{store.name}</h4>
                        <p className="card-text">{store.description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            );
        } else {
            return <div> Loading ... </div>;
        }
    }
    
    componentDidMount() {
        console.log(StoreSingle);
    }
    
}

StoreSingle.propTypes = {};
StoreSingle.defaultProps = {};

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch, props) {
    return {
        navigate: url => dispatch(push(url)),
        deleteStore: (storeId) => dispatch(showConfirmAlert({
            text: 'are you sure?', onConfirm: () => {
                Meteor.call('store.delete', storeId, console.log);
                return dispatch(push('/stores'));
            },
        })),
    };
}

export default createContainer((props) => {
    Meteor.subscribe('store');
    return {
        storeSingle: Store.find(props.match.params.id).fetch()[0],
    };
}, connect(mapStateToProps, mapDispatchToProps)(StoreSingle));