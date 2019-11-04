import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/contacts/Contacts';
import { Stuffs } from '../../api/stuff/Stuff.js';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.insert(data);
}

function addContacts(contacts) {
  console.log(` Adding: ${contacts.firstName} (${contacts.owner})`);
  Contacts.insert(contacts);
}

/** Initialize the collection if empty. */
if (Stuffs.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}
if (Contacts.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating default contacts');
    Meteor.settings.defaultContacts.map(contact => addContacts(contact));
  }
}
