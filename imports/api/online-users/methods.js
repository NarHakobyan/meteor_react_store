// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Store from 'imports/api/store';
import OnlineUsers from 'imports/api/online-users';

Meteor.methods({
    'online-users.insert'(title, url) {
        check(url, String);
        check(title, String);
        
        return Store.insert({
            url,
            title,
            createdAt: new Date(),
        });
    },
    'online-users.getUsers'() {
        const onlineUsers = OnlineUsers.find().fetch();
        // .map(user => user.userId);
        const onlineUserIds = onlineUsers && onlineUsers.map(user => user.userId) || [];
        return Meteor.users.find({ _id: { $in: onlineUserIds } });
    },
});
