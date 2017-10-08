import { ChatMessageList, ChatMessageTextArea, ChatPeopleList } from 'imports/ui/components';
import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Chat from 'imports/api/chat';
import OnlineUsers from 'imports/api/online-users';
import './style.scss';

class ChatBox extends Component {
    
    changeNewMessage = (newMessage = '') => {
        this.setState({ newMessage });
    };
    addNewMessage = () => {
        Meteor.call('chat.addMessage', { message: this.state.newMessage }, (error, messageId) => {
            if (messageId) {
                this.setState({ newMessage: '' });
            }
        });
    };
    
    constructor() {
        super();
        this.state = {
            newMessage: '',
        };
    }
    
    render() {
        console.log(this.props.onlineUsers);
        return (
            <div className="chat-box clearfix">
                <ChatPeopleList onlineUsers={this.props.onlineUsers}/>
                <div className="chat">
                    <div className="chat-header clearfix">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
                             alt="avatar"/>
                        
                        <div className="chat-about">
                            <div className="chat-with">Chat with {this.props.user && this.props.user.username}</div>
                            <div className="chat-num-messages">already 1 902 messages</div>
                        </div>
                        <i className="fa fa-star"> </i>
                    </div>
                    <ChatMessageList chats={this.props.chats}/>
                    <ChatMessageTextArea text={this.state.newMessage} addMessage={this.addNewMessage}
                                         changeText={this.changeNewMessage}/>
                </div>
            </div>
        );
    }
    
    componentDidMount() {
    }
    
}

ChatBox.propTypes = {};
ChatBox.defaultProps = {};

export default createContainer(() => {
    Meteor.subscribe('chat');
    Meteor.subscribe('online-users');
    const onlineUserIds = OnlineUsers.find().fetch().map(user => user.userId);
    return {
        chats: Chat.find().fetch(),
        onlineUsers: Meteor.users.find({ _id: { $in: onlineUserIds } }).fetch(),
        user: Meteor.user(),
    };
}, ChatBox);