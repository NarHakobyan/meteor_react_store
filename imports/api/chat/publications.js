// All links-related publications

import { Meteor } from 'meteor/meteor';
import Chat from 'imports/api/chat';

Meteor.publish('chat', function() {
    return Chat.find();
});
