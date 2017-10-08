// Register online chat
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import OnlineUsers from 'imports/api/online-users';

Meteor.onConnection(socket => {
    Accounts.onLogin(data => {
        OnlineUsers.remove({ userId: data.user._id });
        OnlineUsers.insert({ socketId: socket.id, userId: data.user._id });
    });
    socket.onClose(() => {
        OnlineUsers.remove({ socketId: socket.id });
    });
});