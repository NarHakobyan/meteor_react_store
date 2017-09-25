// Definition of the links collection

import { Mongo } from 'meteor/mongo';

class UserCollection extends Mongo.Collection {
    insert(user, callback) {
        return super.insert(user, callback);
    }
}

User = new UserCollection('user');

User.schema = new SimpleSchema({
    name: { type: String },
    username: { type: String },
    email: { type: String, regEx: SimpleSchema.RegEx.Email },
    phone: { type: String, regEx: SimpleSchema.RegEx.Phone, optional: true },
});

export default User;
