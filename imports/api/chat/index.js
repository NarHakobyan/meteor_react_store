import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

class ChatCollection extends Mongo.Collection {
    insert(doc, callback) {
        doc.createdAt = new Date().valueOf();
        return super.insert(doc, callback);
    }
}

Chat = new ChatCollection('chat', {
    transform: chat => {
        chat.user = Meteor.users.findOne(chat.userId);
        return chat;
    },
});

Chat.schema = new SimpleSchema({
    text: { type: String },
    userId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true },
});

export default Chat;
