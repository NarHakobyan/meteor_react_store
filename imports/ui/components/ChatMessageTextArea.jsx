import React from 'react';
import PropTypes from 'prop-types';

function ChatMessageTextArea(props) {
    return (
        <div className="chat-message clearfix">
            <textarea value={props.text} onInput={(event) => props.changeText(event.target.value)}
                      name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3"/>
            <i className="fa fa-file-o"> </i> &nbsp;&nbsp;&nbsp;
            <i className="fa fa-file-image-o"> </i>
            <button onClick={(event) => props.addMessage()}>Send</button>
        </div>
    );
}

ChatMessageTextArea.propTypes = {
    addMessage: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    changeText: PropTypes.func.isRequired,
};
ChatMessageTextArea.defaultProps = {};

export default ChatMessageTextArea;
