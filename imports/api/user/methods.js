// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Store from 'imports/api/store';

Meteor.methods({
    'store.insert'(title, url) {
        check(url, String);
        check(title, String);
        
        return Store.insert({
            url,
            title,
            createdAt: new Date(),
        });
    },
});
