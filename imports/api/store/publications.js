// All links-related publications

import { Meteor } from 'meteor/meteor';
import Store from 'imports/api/store/index';

Meteor.publish('store', function() {
    return Store.find();
});
