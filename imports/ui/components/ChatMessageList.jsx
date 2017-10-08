import React from 'react';
import PropTypes from 'prop-types';
import ChatMessageItem from './ChatMessageItem';

function ChatMessageList(props) {
    return (
        <div className="chat-history">
            <ul>
                {props.chats.map(chat => <ChatMessageItem key={chat._id} message={chat.message} user={chat.user}/>)}
            </ul>
        </div>
    );
}

ChatMessageList.propTypes = {
    chats: PropTypes.arrayOf(PropTypes.object),
};
ChatMessageList.defaultProps = {
    chats: [],
};

export default ChatMessageList;
