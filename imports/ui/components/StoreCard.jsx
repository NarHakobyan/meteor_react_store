import React from 'react';
import PropTypes from 'prop-types';

function StoreCard(props) {
    return (
        <div className="card text-center my-4">
            <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item mx-1">
                        <a className="btn btn-outline-primary" href="#">Products list</a>
                    </li>
                    <li className="nav-item mx-1">
                        <a className="btn btn-outline-danger" onClick={props.onDelete}>Delete store</a>
                    </li>
                </ul>
            </div>
            <div className="card-block">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

StoreCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    incompleteCount: PropTypes.number.isRequired,
    userId: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};
StoreCard.defaultProps = {};

export default StoreCard;
