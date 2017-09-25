// Definition of the links collection

import { Mongo } from 'meteor/mongo';

const Store = new Mongo.Collection('store');

Store.schema = new SimpleSchema({
    name: { type: String },
    description: { type: String },
    incompleteCount: { type: Number, defaultValue: 0 },
    userId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true },
});

export default Store;
