// Methods related to links

import { Meteor } from 'meteor/meteor';
import Store from 'imports/api/store';

Meteor.methods({
    'store.insert'({ name, description, incompleteCount }) {
        return Store.insert({ name, description, incompleteCount, userId: Meteor.userId() });
    },
    'store.delete'(storeId) {
        new SimpleSchema({
            storeId: { type: String, regEx: SimpleSchema.RegEx.Id },
        }).validate({ storeId });
        Store.remove({_id: storeId, userId: Meteor.userId()});
        return;
        if (!todo.editableBy(this.userId)) {
            throw new Meteor.Error('store.delete.unauthorized',
                'Cannot edit todos in a private list that is not yours');
        }
        Todos.update(todoId, {
            $set: { text: newText }
        });
    }
});
