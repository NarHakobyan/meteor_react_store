// All links-related publications

import { Meteor } from 'meteor/meteor';
import Links from 'imports/api/links/index';

Meteor.publish('links', function() {
    return Links.find();
});
