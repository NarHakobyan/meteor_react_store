// Methods related to links

import { Meteor } from 'meteor/meteor';
import Store from 'imports/api/store';

Meteor.methods({
    'store.create'({ name, description, incompleteCount }) {
        return Store.insert({ name, description, incompleteCount: Number(incompleteCount), userId: Meteor.userId() });
    },
    'store.delete'(storeId) {
        new SimpleSchema({
            storeId: { type: String, regEx: SimpleSchema.RegEx.Id },
        }).validate({ storeId });
        Store.remove({ _id: storeId, userId: Meteor.userId() });
        return;
        if (!todo.editableBy(this.userId)) {
            throw new Meteor.Error('store.delete.unauthorized',
                'Cannot edit todos in a private list that is not yours');
        }
        Todos.update(todoId, {
            $set: { text: newText },
        });
    },
    'store.update'({ storeId, name, description, incompleteCount }) {
        Store.schema.validate({ name, description, incompleteCount });
        const store = Store.findOne(storeId);
        console.log(todo);
        return;
        if (!todo.editableBy(this.userId)) {
            throw new Meteor.Error('store.delete.unauthorized',
                'Cannot edit todos in a private list that is not yours');
        }
        Store.update(storeId, {
            $set: { name, description, incompleteCount },
        });
    },
});
