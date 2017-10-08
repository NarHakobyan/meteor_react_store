import { Meteor } from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function ChatMessageItem(props) {
    const selfMessage = props.user._id === Meteor.userId();
    return (
        <li className="clearfix">
            <div className={classNames('message-data', { 'align-right': selfMessage })}>
                <span className="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp;
                <span className="message-data-name">{props.user.username}</span>
                <i className="fa fa-circle me"> </i>
            </div>
            <div className={classNames('message',
                { 'align-right other-message': selfMessage, 'my-message': !selfMessage })}>
                {props.message}
            </div>
        </li>
    );
}

ChatMessageItem.propTypes = {
    user: PropTypes.object,
    message: PropTypes.string,
};
ChatMessageItem.defaultProps = {};

export default ChatMessageItem;
