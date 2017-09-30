import React, { Component } from 'react';
import { connect } from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';
import { cancelAlert, confirmAlert } from '../../store/actions/alert.action';

class CustomAlert extends Component {
    render() {
        return (
            <SweetAlert {...this.props}>{this.props.text}</SweetAlert>
        );
    }
}

function mapStateToProps(state) {
    return state.alert;
}

function mapDispatchToProps(dispatch) {
    return {
        onConfirm: () => dispatch(confirmAlert()),
        onCancel: () => dispatch(cancelAlert()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomAlert);

