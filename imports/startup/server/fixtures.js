// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import Store from 'imports/api/store';

Meteor.startup(() => {
    // if the Links collection is empty
    if (Store.find().count() === 0) {
        const data = [
            {
                name: 'Do the Tutorial',
                description: 'https://www.meteor.com/try',
                incompleteCount: 10,
                userId: 'EmfkCRqukJSFuG44P',
                createdAt: new Date(),
            },
            {
                name: 'Follow the Guide',
                description: 'http://guide.meteor.com',
                incompleteCount: 10,
                userId: 'EmfkCRqukJSFuG44P',
                createdAt: new Date(),
            },
            {
                name: 'Read the Docs',
                description: 'https://docs.meteor.com',
                incompleteCount: 10,
                userId: 'EmfkCRqukJSFuG44P',
                createdAt: new Date(),
            },
            {
                name: 'Discussions',
                description: 'https://forums.meteor.com',
                incompleteCount: 10,
                userId: 'EmfkCRqukJSFuG44P',
                createdAt: new Date(),
            },
        ];
        
        data.forEach(link => Store.insert(link));
    }
    
});
