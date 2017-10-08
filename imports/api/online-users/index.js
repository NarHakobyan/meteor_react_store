// Definition of the links collection

import { Mongo } from 'meteor/mongo';

class OnlineUsersCollection extends Mongo.Collection {
    insert(user, callback) {
        return super.insert(user, callback);
    }
}

OnlineUsers = new OnlineUsersCollection('onlineUsers', {
    transform: doc => {
        doc.user = Meteor.users.findOne(doc.userId);
        return doc;
    },
});

OnlineUsers.schema = new SimpleSchema({
    socketId: { type: String },
    userInfo: { type: Object },
});

export default OnlineUsers;
