import React from 'react';
import PropTypes from 'prop-types';

function ChatPeopleItem(props) {
    return (
        <li className="clearfix">
            <img src={props.image}
                 alt="avatar"/>
            <div className="about">
                <div className="name">{props.name}</div>
                <div className="status">
                    <i className="fa fa-circle online"> </i> online
                </div>
            </div>
        </li>
    );
}

ChatPeopleItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
ChatPeopleItem.defaultProps = {
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg',
};

export default ChatPeopleItem;
