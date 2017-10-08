// Methods related to links

import { Meteor } from 'meteor/meteor';
import Chat from 'imports/api/chat';

Meteor.methods({
    'chat.addMessage'({ message }) {
        return Chat.insert({ message, userId: Meteor.userId() });
    },
    // 'chat.delete'(chatId) {
    //     new SimpleSchema({
    //         chatId: { type: String, regEx: SimpleSchema.RegEx.Id },
    //     }).validate({ chatId });
    //     Chat.remove({ _id: chatId, userId: Meteor.userId() });
    //     return;
    //     if (!todo.editableBy(this.userId)) {
    //         throw new Meteor.Error('chat.delete.unauthorized',
    //             'Cannot edit todos in a private list that is not yours');
    //     }
    //     Todos.update(todoId, {
    //         $set: { text: newText },
    //     });
    // },
    // 'chat.update'({ chatId, name, description, incompleteCount }) {
    //     Chat.schema.validate({ name, description, incompleteCount });
    //     const chat = Chat.findOne(chatId);
    //     console.log(todo);
    //     return;
    //     if (!todo.editableBy(this.userId)) {
    //         throw new Meteor.Error('chat.delete.unauthorized',
    //             'Cannot edit todos in a private list that is not yours');
    //     }
    //     Chat.update(chatId, {
    //         $set: { name, description, incompleteCount },
    //     });
    // },
});
