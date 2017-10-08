// All links-related publications

import { Meteor } from 'meteor/meteor';
import OnlineUsers from 'imports/api/online-users';

Meteor.publish('online-users', function() {
    return [OnlineUsers.find(), Meteor.users.find()];
});
