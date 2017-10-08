import React from 'react';
import PropTypes from 'prop-types';
import ChatPeopleItem from './ChatPeopleItem';

function ChatPeopleList(props) {
    return (
        <div className="people-list" id="people-list">
            <div className="search">
                <input type="text" placeholder="search"/>
                <i className="fa fa-search"> </i>
            </div>
            <ul className="list">
                {props.onlineUsers.map(user => <ChatPeopleItem key={user._id} name={user.name} image={user.image}/>)}
            </ul>
        </div>
    );
}

ChatPeopleList.propTypes = {
    onlineUsers: PropTypes.arrayOf(PropTypes.object),
};
ChatPeopleList.defaultProps = {
    onlineUsers: [],
};

export default ChatPeopleList;
